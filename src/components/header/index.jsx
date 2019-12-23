import React from 'react';
import Logo from '../../../assets/favicons/colossal.png';
import { Link } from 'react-router-dom'
import Search from './components/search';

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="container primary w-100 p-12">
                <div className="header primary-bg w-100 p-10 flex center-a">
                    <div className="item">
                        <Link to="/">
                            <img src={Logo} alt="Colossal Logo" className="lg-icon"/>
                        </Link>
                    </div>
                    <div className="item">
                        <Search />
                    </div>
                </div>
            </header>
        )
    }
}

export default Index