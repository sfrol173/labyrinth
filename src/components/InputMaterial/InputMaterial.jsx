import React from "react";
import PropTypes from 'prop-types'
import './InputMaterial.scss';

const InputMaterial = (props) => {
    const {type="text", name, label, id, inputRef, ...restProps} = props;

    
    return (
        <label className="input-wrapper">
            <span className="label">{label}</span>
            <input type={type} name={name} ref={inputRef} id={id} {...restProps} />
        </label>
    )
}

InputMaterial.propTypes =  {
    type: PropTypes.string, 
    name: PropTypes.string, 
    label: PropTypes.string, 
    id: PropTypes.string    
}
export default InputMaterial