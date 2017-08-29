import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import '@material/slider/dist/mdc.slider.css';

export class Slider extends React.Component {

    renderMarkers() {
        if (!this.props.markers) return

        return (
            <div className="mdc-slider__track-marker-container"></div>
        )
    }

    render() {
        const { className, disabled, discrete, onChange, min, max, defaultValue, step, markers, ...reactProps } = this.props;

        let discreteClass = discrete ? 'mdc-slider--discrete' : '';
        let dataStep = discrete ? { "data-step": step } : {};
        let markersClass = markers ? 'mdc-slider--display-markers' : '';

        return (
            <div className={`mdc-slider ${discreteClass} ${markersClass} ${className}`} data-mdc-auto-init="MDCSlider" tabIndex="0" role="slider"
             aria-valuemin={min} aria-valuemax={max} aria-valuenow={defaultValue} {...dataStep}
             aria-label="Select Value" aria-disabled={disabled} onChange={onChange} {...reactProps}>
                <div className="mdc-slider__track-container">
                    <div className="mdc-slider__track"></div>
                    {this.renderMarkers()}
                </div>
                <div className="mdc-slider__thumb-container">
                    <svg className="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875"></circle>
                    </svg>
                    <div className="mdc-slider__focus-ring"></div>
                </div>
            </div>
        );
    }
}

Slider.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    discrete: PropTypes.bool,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    defaultValue: PropTypes.number,
    step: PropTypes.number,
    markers: PropTypes.bool
}

Slider.defaultProps = {
    className: "",
    disabled: false,
    discrete: false,
    onChange: (event) => {},
    min: 0,
    max: 100,
    defaultValue: 0,
    step: 1,
    markers: false
}
