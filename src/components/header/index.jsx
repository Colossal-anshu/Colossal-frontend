import React from 'react';
import Logo from '../../../assets/favicons/colossal.png';
import { Link } from 'react-router-dom'
import Search from './components/search/index';
import RestComponent from './components/other/index'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="container w-100">
                <div className="header primary-bg w-100 p-5 flex center-a">
                    <div className="item">
                        <Link to="/">
                            <img src={Logo} alt="Colossal Logo" className="lg-icon"/>
                        </Link>
                    </div>
                    <div className="item" id="search-container">
                        <Search />
                    </div>
                    <RestComponent />
                </div>
            </header>
        )
    }
}

export default Index