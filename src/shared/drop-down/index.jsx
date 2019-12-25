import React from 'react'
import classname from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DropDown extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { list, visible, drop_box_class, drop_box_ul_class, drop_box_li_class, reverse, position } = this.props;
        return(
            <div className={'drop-box-container ' + drop_box_class + ' ' + position + ' ' + classname({ 'none': !visible})}>
                <ul className={'drop-box-ul ' + drop_box_ul_class}>
                    { list.map( (item, key) => {
                        return(
                            <li className={'drop-box-li ' + drop_box_li_class} key={key}>
                                <Link to={item.link}  className={'i-block w-100 flex center-a ' + classname({ 'reverse': reverse})}>
                                    {item.icons}<span className='m-l-12'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

DropDown.defaultProps = {
    list: [],
    visible: false,
    drop_box_li_class: '',
    drop_box_ul_class: '',
    drop_box_class: '',
    reverse: false,
    position: 'left'
}

DropDown.propTypes = {
    list: PropTypes.array,
    visible: PropTypes.bool,
    reverse: PropTypes.bool,
    position: PropTypes.string,
    drop_box_li_class: PropTypes.string,
    drop_box_ul_class: PropTypes.string,
    drop_box_class: PropTypes.string
}

export default DropDown