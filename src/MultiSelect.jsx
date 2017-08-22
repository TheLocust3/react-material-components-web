import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class MultiSelect extends React.Component {

    render() {
        const { className, text, disabled, children, onChange, size, ...reactProps } = this.props;

        const childrenWithProps = React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, { onClick: onChange, multiple: true });
        });

        return (
            <select multiple size={size} className={`mdc-multi-select mdc-list ${className}`} disabled={disabled} {...reactProps}>
                {childrenWithProps}
            </select>
        );
    }
}

MultiSelect.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.number
}

MultiSelect.defaultProps = {
    className: "",
    text: "",
    disabled: false,
    size: 6
}
