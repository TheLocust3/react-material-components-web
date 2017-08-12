import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/textfield/dist/mdc.textfield.css';

export class TextField extends React.Component {

    render() {
        const { disabled, value, label, helpText, persistentHelp, fullWidth, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-textfield--disabled" : "";
        let valueClass = _.isEmpty(value) ? "" : "mdc-textfield__label--float-above";
        let persistentHelpClass = persistentHelp ? "mdc-textfield-helptext--persistent" : ""

        let fullWidthClass = fullWidth ? "mdc-textfield--fullwidth" : "";
        let placeholderText = "";
        let labelText = label;
        if (fullWidth && !_.isEmpty(label)) {
            placeholderText = label;
            labelText = "";
        }

        let inputProps = {}
        if (!_.isEmpty(value)) {
            inputProps.value = value
        }

        return (
            <div>
                <label className={`mdc-textfield ${disabledClass} ${fullWidthClass}`} data-mdc-auto-init="MDCTextfield">
                    <input type="text" className="mdc-textfield__input" placeholder={placeholderText} {...inputProps} {...reactProps}/>
                    <span className={`mdc-textfield__label ${valueClass}`}>{labelText}</span>
                </label>
                <p id="username-helptext" className={`mdc-textfield-helptext ${persistentHelpClass}`} aria-hidden="true">
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
    persistentHelp: PropTypes.bool,
    fullWidth: PropTypes.bool
}

TextField.defaultProps = {
    disabled: false,
    value: "",
    label: "",
    helpText: "",
    persistentHelp: false,
    fullWidth: false
}
