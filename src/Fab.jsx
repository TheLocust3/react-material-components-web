import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/fab/dist/mdc.fab.css';

export class Fab extends React.Component {

    render() {
        const { className, mini, plain, disabled, children, ...reactProps } = this.props;

        let miniClass = mini ? 'mdc-fab--mini' : '';
        let plainClass = plain ? 'mdc-fab--plain' : '';

        return (
            <button className={`mdc-fab material-icons ${miniClass} ${plainClass} ${className}`} disabled={disabled} data-mdc-auto-init="MDCRipple" {...reactProps}>
                {children}
            </button>
        );
    }
}

Fab.propTypes = {
    className: PropTypes.string,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
    disabled: PropTypes.bool
}

Fab.defaultProps = {
    className: "",
    mini: false,
    plain: false,
    disabled: false
}
