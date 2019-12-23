import "./styles/main.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';
import history from "./scripts/history";
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router history={history}>
                <Main />
            </Router>
        )
    }
}

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('colossal-app'));