import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export class TextField extends React.Component {

    render() {
        const { disabled, value, label, helpText, persistentHelpText, onChange, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-textfield--disabled" : "";
        let valueClass = _.isEmpty(value) ? "" : "mdc-textfield__label--float-above";
        let persistentHelpTextClass = persistentHelpText ? "mdc-textfield-helptext--persistent" : ""

        let inputProps = {}
        if (!_.isEmpty(value)) {
            inputProps.value = value
        }

        return (
            <div>
                <label className={`mdc-textfield ${disabledClass}`} {...reactProps} data-mdc-auto-init="MDCTextfield">
                    <input type="text" className="mdc-textfield__input" onChange={onChange} {...inputProps}/>
                    <span className={`mdc-textfield__label ${valueClass}`}>{label}</span>
                </label>
                <p id="username-helptext" className={`mdc-textfield-helptext ${persistentHelpTextClass}`} aria-hidden="true">
                    {helpText}
                </p>
            </div>
        );
    }
}

TextField.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.string,
    persistentHelpText: PropTypes.bool,
    onChange: PropTypes.func
}

TextField.defaultProps = {
    disabled: false,
    value: "",
    label: "",
    helpText: "",
    persistentHelpText: false,
    onChange: (event) => {}
}
