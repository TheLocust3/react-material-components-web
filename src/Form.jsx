import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { button, autoInit } from 'material-components-web';

const ALIGNMENT = { default: '', end: "mdc-form-field--align-end" }

export class Form extends React.Component {

    componentDidMount() {
        autoInit();
    }

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
