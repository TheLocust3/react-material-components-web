import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class OptionDivider extends React.Component {

    render() {
        const { className, ...reactProps } = this.props;

        return (
            <option className={`mdc-list-divider ${className}`} role="presentation" disabled {...reactProps}/>
        );
    }
}

OptionDivider.propTypes = {
    className: PropTypes.string
}

OptionDivider.defaultProps = {
    className: ""
}
