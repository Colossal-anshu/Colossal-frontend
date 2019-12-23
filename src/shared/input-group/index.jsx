import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const { inputDivClass, inputClass, inputGroupClass, iconClass, type, reverse, iconComponent, placeholder } = this.props
        return(
            <div className={"input-group flex center " + inputGroupClass + " " + classname({'reverse': reverse})}>
                <div className={"input-div " + inputDivClass}>
                    <input type={type} className={"input w-100 " + inputClass} placeholder={placeholder}/>
                </div>
                <div className={"icons " + iconClass}>
                    {iconComponent}
                </div>
            </div>
        )
    }
}

Index.defaultProps = {
    type: 'text',
    reverse: false,
    inputGroupClass: '',
    inputClass: '',
    iconClass: '',
    iconComponent: <span></span>,
    inputDivClass: '',
    placeholder: 'Search'
}

Index.propTypes = {
    type: PropTypes.string,
    reverse: PropTypes.bool,
    inputGroupClass: PropTypes.string,
    inputClass: PropTypes.string,
    iconClass: PropTypes.string,
    iconComponent: PropTypes.element,
    inputDivClass: PropTypes.string,
    placeholder: PropTypes.string
};

export default Index;