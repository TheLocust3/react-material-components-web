import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class OptionGroup extends React.Component {

    render() {
        const { className, label, children, onClick, ...reactProps } = this.props;

        const childrenWithProps = React.Children.map(this.props.children, (child, i) => { // TODO: Common functions
            return React.cloneElement(child, { onClick: onClick, multiple: true });
        });

        return (
            <optgroup className={`mdc-list-group ${className}`} label={label} {...reactProps}>
                {childrenWithProps}
            </optgroup>
        );
    }
}

OptionGroup.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}

OptionGroup.defaultProps = {
    className: ""
}
