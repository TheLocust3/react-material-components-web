import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.jsx'

import '@material/dialog/dist/mdc.dialog.css';

export class Dialog extends React.Component {

    renderAccept(acceptText, onAcceptClick) {
        if (_.isEmpty(acceptText)) return;

        return (
            <Button className="mdc-dialog__footer__button mdc-dialog__footer__button--accept" onClick={onAcceptClick}>{acceptText}</Button>
        )
    }

    renderCancel(cancelText, onCancelClick) {
        if (_.isEmpty(cancelText)) return;

        return (
            <Button className="mdc-dialog__footer__button mdc-dialog__footer__button--cancel" onClick={onCancelClick}>{cancelText}</Button>
        )
    }

    render() {
        const { className, title, open, children, acceptText, cancelText, onAcceptClick, onCancelClick, ...reactProps } = this.props;

        let openClass = open ? "mdc-dialog--open" : ""

        return (
            <aside className={`mdc-dialog ${openClass} ${className}`} role="alertdialog">
                <div className="mdc-dialog__surface">
                    <header className="mdc-dialog__header">
                        <h2 className="mdc-dialog__header__title">
                            {title}
                        </h2>
                    </header>
                    <section className="mdc-dialog__body">
                        {children}
                    </section>
                    <footer className="mdc-dialog__footer">
                        {this.renderCancel(cancelText, onCancelClick)}
                        {this.renderAccept(acceptText, onAcceptClick)}
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop"></div>
            </aside>
        );
    }
}

Dialog.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    open: PropTypes.bool,
    acceptText: PropTypes.string,
    cancelText: PropTypes.string,
    onAcceptClick: PropTypes.func,
    onCancelClick: PropTypes.func
}

Dialog.defaultProps = {
    className: "",
    title: "",
    open: false,
    acceptText: "",
    cancelText: "",
    onAcceptClick: (event) => {},
    onCancelClick: (event) => {}
}
