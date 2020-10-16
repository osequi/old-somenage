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
 * @param  {number} size       The size on the scale.
 * @param  {object} settings   The settings needed for the calculations.
 * @param  {object} typography The typographic settings needed for the calculations.
 * @return {number}            The value on the scale.
 * @example scale('linear', 2, 1) => 3.75em (the value of the 0 scale is 1em)
 */
const scaleLinear = (value, settings, typography) => {
  const { setup } = typography;
  const { lineHeight } = setup;

  const newLineHeight = lineHeight / settings;

  return (value + 1) * newLineHeight;
};

export {
  propTypes as LinearScalePropTypes,
  defaultProps as LinearScaleDefaultProps,
  scaleLinear,
};
