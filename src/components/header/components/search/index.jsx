import React from 'react';
import InputGroup from '../../../../shared/input-group';

import {
    GoSearch
} from 'react-icons/go'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.onFocus = this.onFocus.bind(this);
    }

    onFocus(){
        document.getElementById('search-container').classList.add('search-focus')
    }

    onBlur(){
        document.getElementById('search-container').classList.remove('search-focus')
    }

    render(){
        return(
                <InputGroup
                    iconComponent = {<GoSearch className='md-icon black-icon' id='header-search'/>}
                    iconClass = "pointer"
                    placeholder = "Search..."
                    inputGroupClass = "search w-100"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
        )
    }
}

export default Search