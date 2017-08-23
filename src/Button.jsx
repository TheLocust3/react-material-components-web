import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/button/dist/mdc.button.css';

const VARIANTS = { flat: '', raised: 'mdc-button--raised' }
const COLORS = { default: '', primary: 'mdc-button--primary', accent: 'mdc-button--accent' }
const SIZE = { default: '', compact: 'mdc-button--compact', dense: 'mdc-button--dense', small: 'mdc-button--compact mdc-button--dense' }

export class Button extends React.Component {

    render() {
        const { className, color, size, variant, disabled, children, ...reactProps } = this.props;

        return (
            <button className={`mdc-button ${VARIANTS[variant]} ${COLORS[color]} ${SIZE[size]} ${className}`} disabled={disabled ? 'disabled' : ''} data-mdc-auto-init="MDCRipple" {...reactProps}>
              {children}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    className: "",
    variant: 'flat',
    color: 'default',
    size: 'default',
    disabled: false
}
