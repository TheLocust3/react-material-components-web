import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/textfield/dist/mdc.textfield.css';

export class TextArea extends React.Component {

    render() {
        const { disabled, value, label, helpText, persistentHelpText, onChange, rows, cols, fullWidth, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-textfield--disabled" : "";
        let valueClass = _.isEmpty(value) ? "" : "mdc-textfield__label--float-above";
        let persistentHelpTextClass = persistentHelpText ? "mdc-textfield-helptext--persistent" : "";

        let fullWidthClass = fullWidth ? "mdc-textfield--fullwidth" : "";
        if (fullWidth && !_.isEmpty(label)) {
            console.log("Text area cannot be full width with a label!")
            return null
        }

        let inputProps = {}
        if (!_.isEmpty(value)) {
            inputProps.value = value
        }

        return (
            <div>
                <label className={`mdc-textfield mdc-textfield--multiline ${disabledClass} ${fullWidthClass}`} {...reactProps} data-mdc-auto-init="MDCTextfield">
                    <textarea type="text" className="mdc-textfield__input" rows={rows} cols={cols} onChange={onChange} {...inputProps}/>
                    <span className={`mdc-textfield__label ${valueClass}`}>{label}</span>
                </label>
                <p id="username-helptext" className={`mdc-textfield-helptext ${persistentHelpTextClass}`} aria-hidden="true">
                    {helpText}
                </p>
            </div>
        );
    }
}

TextArea.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.string,
    persistentHelpText: PropTypes.bool,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    cols: PropTypes.number,
    fullWidth: PropTypes.bool
}

TextArea.defaultProps = {
    disabled: false,
    value: "",
    label: "",
    helpText: "",
    persistentHelpText: false,
    onChange: (event) => {},
    rows: 10,
    cols: 40,
    fullWidth: false
}
