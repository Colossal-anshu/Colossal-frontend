import "./styles/main.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import history from "./scripts/history";
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import { APP_URL, LOGIN_URL } from './scripts/url'

// Components
import Main from './components/main.jsx';
import Login from './login/login';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path={APP_URL} component={Main} />
                    <Route path={LOGIN_URL} component={Login} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('colossal-app'));