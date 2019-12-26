import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './login-form';
import SignUpForm from './signup-form';
import { LOGIN_URL, SIGNUP_URL } from "../../../scripts/url";
import Logo from "../../../../assets/favicons/colossal.png";

class Form extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="form-container">
                <div className="form">
                    <div className="logo-container m-t-10 m-l-12">
                        <img src={Logo} alt="Colossal Logo" className="w-100 h-100"/>
                    </div>
                    <Switch>
                        <Route path={LOGIN_URL} component={LoginForm} exact={true}/>
                        <Route path={SIGNUP_URL} component={SignUpForm} exact={true}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Form