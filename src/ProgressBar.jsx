import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/linear-progress/dist/mdc.linear-progress.css';

export class ProgressBar extends React.Component {

    render() {
        const { className, indeterminate, reversed, accent, percent, bufferPercent, ...reactProps } = this.props;

        if (percent > 1 || percent < 0) {
            console.log("percent must be between 0 and 1")
            return null
        }

        if (bufferPercent > 1 || bufferPercent < 0) {
            console.log("bufferPercent must be between 0 and 1")
            return null
        }
        let indeterminateClass = indeterminate ? 'mdc-linear-progress--indeterminate' : '';
        let reversedClass = reversed ? 'mdc-linear-progress--reversed' : '';
        let accentClass = accent ? 'mdc-linear-progress--accent' : '';

        return (
            <div role="progressbar" className={`mdc-linear-progress ${indeterminateClass} ${reversedClass} ${accentClass} ${className}`} {...reactProps}>
                <div className="mdc-linear-progress__buffering-dots"></div>
                <div className="mdc-linear-progress__buffer" style={{ transform: `scaleX(${1 - bufferPercent})` }}></div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ transform: `scaleX(${percent})` }}>
                    <span className="mdc-linear-progress__bar-inner"></span>
                </div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span className="mdc-linear-progress__bar-inner"></span>
                </div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    reversed: PropTypes.bool,
    accent: PropTypes.bool,
    percent: PropTypes.number,
    bufferPercent: PropTypes.number
}

ProgressBar.defaultProps = {
    className: "",
    indeterminate: false,
    reversed: false,
    accent: false,
    percent: 1,
    bufferPercent: 0
}
