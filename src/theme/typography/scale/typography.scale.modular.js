import PropTypes from "prop-types";
import ms from "modularscale-js";

/**
 * On the modular scale values are floats.
 * This breaks the grid aligmnet for multiline headings.
 * With margin calculations the grid can be preserved for single line headings.
 *
 * To calculate on-the-fly the margins for multiline headings we either need refs to the headings, or use `ReactDOM.findDOMNode`.
 * Since content often times comes from markdown we don't have access to refs.
 * And `findDOMNode` is deprecated in `StrictMode`, CRA comes with `StrictMode` enabled.
 *
 * The only way left for multiline headings is to skip markdown usage.
 */

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
 * Sets the margins of an element to realign to the grid.
 */
const scaleModularMargin = (props, theme) => {
  return {
    marginTop: 0,
    marginBottom: 0,
  };
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
  scaleModularMargin,
};
