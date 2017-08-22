import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class Option extends React.Component {

    onOptionClick(event) {
        this.props.onClick(this.props.value)
    }

    renderMultiple() {
        const { className, value, disabled, children, onClick, ...reactProps } = this.props;

        return (
            <option className={`mdc-list-item ${className}`} value={value} onClick={this.onOptionClick.bind(this)} aria-disabled={disabled} {...reactProps}>
                {children}
            </option>
        )
    }

    render() {
        if (this.props.multiple) {
            return this.renderMultiple()
        }

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
    multiple: PropTypes.bool
}

Option.defaultProps = {
    className: "",
    disabled: false,
    multiple: false
}
