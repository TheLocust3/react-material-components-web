import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class Option extends React.Component {

    render() {
        const { className, disabled, children, ...reactProps } = this.props;

        return (
            <li className="mdc-list-item {className}" role="option" id="{text}" tabIndex="0" aria-disabled={disabled}>
                {children}
            </li>
        );
    }
}

Option.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
}

Option.defaultProps = {
    className: "",
    disabled: false
}
