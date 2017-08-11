import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const ALIGNMENT = { default: '', end: "mdc-form-field--align-end" }

export class Form extends React.Component {

    render() {
        const { align, ...reactProps } = this.props;

        return (
            <div className={`mdc-form-field ${ALIGNMENT[align]}`} {...reactProps}>
              {this.props.children}
            </div>
        );
    }
}

Form.propTypes = {
    align: PropTypes.string
}

Form.defaultProps = {
    align: 'default'
}
