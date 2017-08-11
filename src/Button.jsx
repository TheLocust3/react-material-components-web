import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { autoInit } from 'material-components-web';
import '@material/button/dist/mdc.button.css';

const VARIANTS = { flat: '', raised: 'mdc-button--raised' }
const COLORS = { default: '', primary: 'mdc-button--primary', accent: 'mdc-button--accent' }
const SIZE = { default: '', compact: 'mdc-button--compact', dense: 'mdc-button--dense', small: 'mdc-button--compact mdc-button--dense' }

export class Button extends React.Component {

    componentDidMount() {
        autoInit();
    }

    render() {
        const { color, size, variant, disabled, ...reactProps } = this.props;

        return (
            <button className={`mdc-button ${VARIANTS[variant]} ${COLORS[color]} ${SIZE[size]}`} disabled={disabled ? 'disabled' : ''} data-mdc-auto-init="MDCRipple" {...reactProps}>
              {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    variant: 'flat',
    color: 'default',
    size: 'default',
    disabled: false
}
