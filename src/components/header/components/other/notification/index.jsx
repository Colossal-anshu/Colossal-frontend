import React from 'react';
import SwitchIcon from '../../../../../shared/switch-icon';

import {
    MdNotificationsNone,
    MdNotificationsActive
} from 'react-icons/md';

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notification: false
        }
    }

    render(){
        const { notification } = this.state;

        return(
            <div className='item'>
                <SwitchIcon 
                    First_icon = {MdNotificationsNone}
                    first_icon_class = "md-icon pointer black-icon"
                    Second_icon = {MdNotificationsActive}
                    second_icon_class = "md-icon pointer black-icon"
                    change = {notification}
                />
            </div>
        )
    }
}

export default Index