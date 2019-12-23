import React from 'react';
import Notification from './notification';
import Chat from './chat';
import Settings from './settings';

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header-rest flex end-j p-r-10 flex-1' id='header-rest'>
                <Notification />
                <Chat />
                <Settings />
            </div>
        )
    }
}

export default Index