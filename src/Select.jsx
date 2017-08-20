import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/select/dist/mdc.select.css';

export class Select extends React.Component {

    render() {
        const { className, text, disabled, children, ...reactProps } = this.props;

        return (
            <div>
                <div className="mdc-select {className}" role="listbox" tabIndex="0" aria-disabled={disabled} {...reactProps} data-mdc-auto-init="MDCSelect">
                    <span className="mdc-select__selected-text">{text}</span>
                    <div className="mdc-simple-menu mdc-select__menu">
                        <ul className="mdc-list mdc-simple-menu__items">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Select.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
}

Select.defaultProps = {
    className: "",
    text: "",
    disabled: false
}
