import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/checkbox/dist/mdc.checkbox.css';

export class Checkbox extends React.Component {

    render() {
        const { label, disabled, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-checkbox--disabled" : "";

        return (
            <div>
                <div className={`mdc-checkbox ${disabledClass}`} data-mdc-auto-init="MDCCheckbox">
                    <input type="checkbox" className="mdc-checkbox__native-control" disabled={disabled} {...reactProps}/>
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool
}

Checkbox.defaultProps = {
    label: "",
    disabled: false
}
