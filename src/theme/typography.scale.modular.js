import PropTypes from "prop-types";
import ms from "modularscale-js";

/**
 * Defines the prop types.
 * @see https://www.modularscale.com/?1&em&1.333
 * @type {Object}
 */
const propTypes = {
  base: PropTypes.arrayOf(PropTypes.number),
  ratio: PropTypes.number,
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  base: [1],
  ratio: 1.333,
};

/**
 * Returns a value from the modular scale
 * @param  {number} size The size on the scale.
 * @return {number}      The value on the scale.
 * @example scale('modular', 2) => 1.77em (within the perfect fourth ratio)
 * @see https://www.modularscale.com/?1&em&1.333
 */
const scaleModular = (value, settings) => {
  return ms(value);
};

export {
  propTypes as ModularScalePropTypes,
  defaultProps as ModularScaleDefaultProps,
  scaleModular,
};
