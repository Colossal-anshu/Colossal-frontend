import React from 'react';
import DropDown from '../../../../../shared/drop-down';
import SwitchIcon from '../../../../../shared/switch-icon';

import {
    FaEllipsisV,
    FaUser,
    FaCog,
    FaUnlock,
    FaTimes
} from 'react-icons/fa';

class Index extends React.Component{
    constructor(props){
        super(props)

        this.onClickMenu = this.onClickMenu.bind(this);

        this.state = {
            menu_open: false
        };
    }

    onClickMenu(){
        const { menu_open } = this.state;

        this.setState({
            menu_open: !menu_open
        });
    }


    render(){
        const { menu_open } = this.state;

        return(
            <div className='item rel'>
                <SwitchIcon
                    FirstIcon = {FaEllipsisV}
                    first_icon_class = "md-icon pointer black-icon"
                    SecondIcon = {FaTimes}
                    second_icon_class = "md-icon pointer black-icon"
                    onClickIcon = {this.onClickMenu}
                    change = {menu_open}
                />
                <DropDown
                    visible={menu_open}
                    position='right'
                    list={[
                        {
                            title: 'Profile',
                            icons: <FaUser />,
                            reverse: false,
                            link: '/profile',
                        },
                
                        {
                            title: 'Settings',
                            icons: <FaCog />,
                            reverse: false,
                            link: '/settings',
                        },
                        {
                            title: 'Logout',
                            icons: <FaUnlock />,
                            reverse: false,
                            link: '/logout',
                        },
                    ]}
                />
            </div>
        )
    }
}

export default Index