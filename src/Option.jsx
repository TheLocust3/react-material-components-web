import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class Option extends React.Component {

    onOptionClick(event) {
        this.props.onClick(this.props.value)
    }

    render() {
        const { className, value, disabled, children, onClick, ...reactProps } = this.props;

        return (
            <li className={`mdc-list-item ${className}`} value={value} onClick={this.onOptionClick.bind(this)} role="option" tabIndex="0" aria-disabled={disabled} {...reactProps}>
                {children}
            </li>
        );
    }
}

Option.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

Option.defaultProps = {
    className: "",
    disabled: false
}
