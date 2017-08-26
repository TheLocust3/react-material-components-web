import React from 'react';
import PropTypes from 'prop-types';

export class Icon extends React.Component {

    render() {
        const { className, icon, ...reactProps } = this.props;

        return (
            <i className={`material-icons ${className}`} {...reactProps}>
                {icon}
            </i>
        );
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
}

Icon.defaultProps = {
    className: "",
}
