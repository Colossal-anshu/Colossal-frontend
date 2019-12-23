import React from 'react'
import InputGroup from '../../../shared/input-group';

import {
    GoSearch
} from 'react-icons/go'

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <InputGroup
                    iconComponent = {<GoSearch className='md-icon black-icon'/>}
                    placeholder = "Search..."
                    inputGroupClass = "search"
                />
        )
    }
}

export default Search