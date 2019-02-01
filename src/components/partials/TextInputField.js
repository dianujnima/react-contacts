import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputField = ({label, name, value, placeholder, onchange, type, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>Name</label>
            <input
                type={type}
                id={name}
                name={name}
                className={classnames("form-control", {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                onChange={onchange}
                value={value}
            />
            {error && <div className="invalid-feedback">{error}</div> }
        </div>
    );
}


TextInputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    type: PropTypes.string,
    error: PropTypes.string,
}

TextInputField.defaultProp = {
    type: "text",
    required: false
}

export default TextInputField