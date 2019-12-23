import React from 'react';
import classname from 'classnames';

class Switch extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        const {First_icon, Second_icon, first_icon_class, second_icon_class, change, container_class} = this.props;
        return(
            <div className={container_class}>
                <First_icon className={first_icon_class + ' ' + classname({ 'none': change})}/>
                <Second_icon className={second_icon_class + ' ' + classname({ 'none': !change})}/>
            </div>
        )
    }
}

Switch.defaultProps = {
    change: false,
    First_icon: '',
    first_icon_class: '',
    Second_icon: '',
    second_icon_class: '',
    container_class: ''
}

export default Switch