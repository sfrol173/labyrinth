import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types'

import './Button.scss';

const Button = (props) => {
    const {children,type,className, onClick, ...restProps} = props;

    return (
        <button 
            type={type}
            onClick={onClick}
            className={cn('button', className) }
            {...restProps}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}
export default Button