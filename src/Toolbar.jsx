import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/toolbar/dist/mdc.toolbar.css';

export class Toolbar extends React.Component {

    render() {
        const { className, children, fixed, waterfall, fixedLastrow, flexible, defaultFlexible, ...reactProps } = this.props;

        let fixedClass = fixed ? 'mdc-toolbar--fixed' : '';
        let waterfallClass = waterfall ? 'mdc-toolbar--waterfall' : '';
        let fixedLastrowClass = fixedLastrow ? 'mdc-toolbar--fixed-lastrow-only' : '';
        let flexibleClass = flexible ? 'mdc-toolbar--flexible' : '';
        let defaultFlexibleClass = defaultFlexible ? 'mdc-toolbar--flexible-default-behavior' : '';

        return (
            <header className={`mdc-toolbar ${fixedClass} ${waterfallClass} ${fixedLastrowClass} ${defaultFlexibleClass} ${className}`} data-mdc-auto-init="MDCToolbar">
                {children}
            </header>
        );
    }
}

Toolbar.propTypes = {
    className: PropTypes.string,
    fixed: PropTypes.bool,
    waterfall: PropTypes.bool,
    fixedLastrow: PropTypes.bool,
    flexible: PropTypes.bool,
    defaultFlexible: PropTypes.bool
}

Toolbar.defaultProps = {
    className: "",
    fixed: false,
    waterfall: false,
    fixedLastrow: false,
    flexible: false,
    defaultFlexible: false
}
