import PropTypes from "prop-types";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  lineHeight: PropTypes.number,
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  lineHeight: 1,
};

/**
 * Returns a value from the linear scale.
 * @param  {number} size The size on the scale.
 * @return {number}      The value on the scale.
 * @example scale('linear', 2) => 3em (the value of the 0 scale is 1em)
 */
const scaleLinear = (value, settings) => {
  return value + 1;
};

export {
  propTypes as LinearScalePropTypes,
  defaultProps as LinearScaleDefaultProps,
  scaleLinear,
};
