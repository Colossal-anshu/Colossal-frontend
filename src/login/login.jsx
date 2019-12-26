import React from 'react';
import Background from './components/background';
import Form from './components/form/form';

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='login-container'>
                <Background />
                <Form />
            </div>
        )
    }
}

export default Login