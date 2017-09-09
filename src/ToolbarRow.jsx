import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/toolbar/dist/mdc.toolbar.css';

export class ToolbarRow extends React.Component {

    render() {
        const { className, children, ...reactProps } = this.props;

        return (
            <div className={`mdc-toolbar__row ${className}`}>
                {children}
            </div>
        );
    }
}

Toolbar.propTypes = {
    className: PropTypes.string
}

Toolbar.defaultProps = {
    className: ""
}
