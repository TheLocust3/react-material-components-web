import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/toolbar/dist/mdc.toolbar.css';

export class Toolbar extends React.Component {

    render() {
        const { className, children, ...reactProps } = this.props;

        return (
            <div className={`${className}`}>
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
