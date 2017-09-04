import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/switch/dist/mdc.switch.css';

export class Switch extends React.Component {

    constructor(props) {
        super(props);

        if (_.isNull(props.defaultChecked)) {
            this.state = { on: false }
        } else {
            this.state = { on: props.defaultChecked }
        }
    }

    onChange(event) {
        let on = !this.state.on;
    
        this.setState({
            on: on
        });

        this.props.onChange(on);
    }

    render() {
        const { className, label, disabled, onChange, ...reactProps } = this.props;

        let disabledClass = disabled ? "mdc-switch--disabled" : "";

        return (
            <div>
                <div className={`mdc-switch ${disabledClass} ${className}`}>
                    <input type="checkbox" className="mdc-switch__native-control" disabled={disabled} onChange={this.onChange.bind(this)} {...reactProps} />
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
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool
}

Switch.defaultProps = {
    className: "",
    label: "",
    disabled: false,
    onChange: (on) => {},
    defaultChecked: false
}
