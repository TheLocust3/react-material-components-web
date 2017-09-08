import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/toolbar/dist/mdc.toolbar.css';

export class ToolbarSection extends React.Component {

    render() {
        const { className, children, ...reactProps } = this.props;

        return (
            <div className={`${className}`}>
                {children}
            </div>
        );
    }
}

ToolbarSection.propTypes = {
    className: PropTypes.string
}

ToolbarSection.defaultProps = {
    className: ""
}
