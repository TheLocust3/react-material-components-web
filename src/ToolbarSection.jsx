import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/toolbar/dist/mdc.toolbar.css';

const ALIGNMENT = { center: '', start: 'mdc-toolbar__section--align-start', end: 'mdc-toolbar__section--align-end' }

export class ToolbarSection extends React.Component {

    renderTitle() {
        if (_.isEmpty(this.props.title)) return;

        return (
            <span class="mdc-toolbar__title">{this.props.title}</span>
        )
    }

    render() {
        const { className, children, alignment, shrink, title, ...reactProps } = this.props;

        let shrinkClass = shrink ? 'mdc-toolbar__section--shrink-to-fit' : '';

        return (
            <section className={`mdc-toolbar__section ${ALIGNMENT[alignment]} ${shrink} ${className}`}>
                {children}
                {this.renderTitle()}
            </section>
        );
    }
}

ToolbarSection.propTypes = {
    className: PropTypes.string,
    alignment: PropTypes.string,
    shrink: PropTypes.bool,
    title: PropTypes.string
}

ToolbarSection.defaultProps = {
    className: "",
    alignment: "center",
    shrink: false,
    title: ""
}
