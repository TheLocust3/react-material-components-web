import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {
  render() {
    let { className, outerClassName, type, children, span, ...props } = this.props;

    className = _.isEmpty(className) ? '' : className;
    outerClassName = _.isEmpty(outerClassName) ? '' : outerClassName;

    if (span) {
      return (
        <span className={`mdc-typography mdc-typography--${type} ${outerClassName}`} {...props}>
          <div className={className}>{children}</div>
        </span>
      );
    }

    return (
      <div className={`mdc-typography mdc-typography--${type} ${outerClassName}`} {...props}>
        <div className={className}>{children}</div>
      </div>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  outerClassName: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.any,
  span: PropTypes.bool
};

export default Text;
