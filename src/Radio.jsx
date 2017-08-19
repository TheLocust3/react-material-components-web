import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/radio/dist/mdc.radio.css';

export class Radio extends React.Component {

    render() {
        const { className, label, disabled, checked, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-radio--disabled" : "";

        return (
            <div>
                <div className={`mdc-radio ${disabledClass} ${className}`} data-mdc-auto-init="MDCRadio">
                    <input className="mdc-radio__native-control" type="radio" {...reactProps} />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle"></div>
                        <div className="mdc-radio__inner-circle"></div>
                    </div>
                </div>
                <label>{label}</label>
            </div>
        );
    }
}

Radio.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
}

Radio.defaultProps = {
    className: "",
    label: "",
    disabled: false,
    checked: false
}
