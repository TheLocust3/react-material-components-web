import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/icon-toggle/dist/mdc.icon-toggle.css';

export class IconToggle extends React.Component {

    constructor(props) {
        super(props)

        this.state = { on: true, currentIcon: props.iconOn }
    }

    onToggleClick(event) {
        if (this.props.disabled) return

        console.log(this.state)
        let on = !this.state.on
        this.setState({ on: on })

        if (on) {
            this.setState({ currentIcon: this.props.iconOn })
        } else {
            this.setState({ currentIcon: this.props.iconOff })
        }

        this.props.onClick(on)
    }

    render() {
        const { className, disabled, onClick, iconOn, iconOff, children, ...reactProps } = this.props;

        return (
            <i className="mdc-icon-toggle material-icons" role="button"
                 disabled={disabled} onClick={this.onToggleClick.bind(this)} {...reactProps}>
                {this.state.currentIcon}
            </i>
        );
    }
}

IconToggle.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    iconOn: PropTypes.string.isRequired,
    iconOff: PropTypes.string.isRequired
}

IconToggle.defaultProps = {
    className: "",
    disabled: false,
    onClick: (event) => {}
}
