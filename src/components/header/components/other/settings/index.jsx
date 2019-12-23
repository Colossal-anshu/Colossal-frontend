import React from 'react';

import {
    MdSettings
} from 'react-icons/md';

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className='item'>
                <MdSettings className = "md-icon pointer black-icon" />
            </div>
        )
    }
}

export default Index