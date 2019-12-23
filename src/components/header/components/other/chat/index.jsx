import React from 'react';
import SwitchIcon from '../../../../../shared/switch-icon';

import {
    MdChatBubbleOutline,
    MdChat
} from 'react-icons/md';

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            chat: false
        }
    }

    render(){
        const { chat } = this.state;

        return(
            <div className='item'>
                <SwitchIcon 
                    First_icon = {MdChatBubbleOutline}
                    first_icon_class = "md-icon pointer black-icon"
                    Second_icon = {MdChat}
                    second_icon_class = "md-icon pointer black-icon"
                    change = {chat}
                />
            </div>
        )
    }
}

export default Index