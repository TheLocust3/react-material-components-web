import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/switch/dist/mdc.switch.css';

export class Switch extends React.Component {

    render() {
        const { className, label, disabled, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-switch--disabled" : "";

        return (
            <div>
                <div className={`mdc-switch ${disabledClass} ${className}`}>
                    <input type="checkbox" className="mdc-switch__native-control" disabled={disabled} {...reactProps} />
                    <div className="mdc-switch__background">
                        <div className="mdc-switch__knob"></div>
                    </div>
                </div>
                <label className="mdc-switch-label">{label}</label>
            </div>
        );
    }
}

Switch.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

Switch.defaultProps = {
    className: "",
    label: "",
    disabled: false
}
