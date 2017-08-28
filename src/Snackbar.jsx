import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.jsx'

import '@material/snackbar/dist/mdc.snackbar.css';

export class Snackbar extends React.Component {

    renderButton() {
        if (this.props.actionHidden) return;

        return (
            <Button className="mdc-snackbar__action-button" onClick={this.props.onClick}>{this.props.actionText}</Button>
        )
    }

    render() {
        const { className, messageText, actionText, actionHidden, hidden, alignStart, multiline, actionOnBottom, onClick, ...reactProps } = this.props;

        let hiddenClass = !hidden ? 'mdc-snackbar--active' : '';
        let alignStartClass = alignStart ? 'mdc-snackbar--align-start' : '';
        let multilineClass = multiline ? 'mdc-snackbar--multiline' : '';
        let actionOnBottomClass = actionOnBottom ? 'mdc-snackbar--action-on-bottom' : '';

        return (
            <div className={`mdc-snackbar ${hiddenClass} ${alignStartClass} ${multilineClass} ${actionOnBottom} ${className}`} aria-live="assertive" aria-atomic="true">
                <div className="mdc-snackbar__text">{messageText}</div>
                <div className="mdc-snackbar__action-wrapper">
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}

Snackbar.propTypes = {
    className: PropTypes.string,
    messageText: PropTypes.string.isRequired,
    actionText: PropTypes.string,
    actionHidden: PropTypes.bool,
    hidden: PropTypes.bool,
    alignStart: PropTypes.bool,
    multiline: PropTypes.bool,
    actionOnBottom: PropTypes.bool,
    onClick: PropTypes.func
}

Snackbar.defaultProps = {
    className: "",
    actionText: "",
    actionHidden: false,
    hidden: true,
    alignStart: false,
    multiline: false,
    actionOnBottom: false,
    onClick: (event) => {}
}
