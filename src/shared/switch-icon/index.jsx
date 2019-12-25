import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

class SwitchIcon extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        const {FirstIcon, SecondIcon, first_icon_class, second_icon_class, change, container_class, onClickIcon} = this.props;
        return(
            <div className={container_class}>
                <FirstIcon onClick={onClickIcon} className={first_icon_class + ' ' + classname({ 'none': change})}/>
                <SecondIcon onClick={onClickIcon} className={second_icon_class + ' ' + classname({ 'none': !change})}/>
            </div>
        )
    }
}

SwitchIcon.defaultProps = {
    change: false,
    FirstIcon: '',
    first_icon_class: '',
    SecondIcon: '',
    second_icon_class: '',
    container_class: '',
    onClickIcon: () => null,
};

SwitchIcon.propTypes = {
    change: PropTypes.bool,
    FirstIcon: PropTypes.func,
    first_icon_class: PropTypes.string,
    SecondIcon: PropTypes.func,
    second_icon_class: PropTypes.string,
    container_class: PropTypes.string,
    onClickIcon: PropTypes.func
};

export default SwitchIcon;