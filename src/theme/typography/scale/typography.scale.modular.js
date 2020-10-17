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
  const { scale: scaleProp, lineHeight: lineHeightProp } = props;
  const { typography } = theme;
  const { setup, helpers } = typography;
  const { fontSize } = setup;
  const { lem } = helpers;

  /**
   * The size of a single line in the heading.
   * Example: (6, 1) => 5.61
   */
  const headingLem = ms(scaleProp, defaultProps) * lineHeightProp;

  /**
   * The number of lines in the heading.
   * This can't be calculated...
   */
  const headingLines = 1;

  /**
   * The size of the heading.
   * Example: 1 * 5.61 = 5.61
   */
  const headingSize = headingLines * headingLem;
  console.log("headingSize:", headingSize);

  /**
   * How many cells (vertical grid lines) the heading occupies.
   * Example: 5.61 / 1.25 = 4.488
   */
  const nrOfCellsOccupied = headingSize / lem;

  /**
   * How big the margin has to be set.
   * Example: 5 * 1.25 - 5.61 = 0.64
   */
  const marginToSet = Math.ceil(nrOfCellsOccupied) * lem - headingSize;

  /**
   * Convert em to px.
   * If margin is set in `em` it doesn't works. If set in `px` it works like a charm.
   */
  const marginToSetinPx = marginToSet * ((fontSize * 16) / 100);
  console.log("marginToSetinPx:", marginToSetinPx);

  /**
   * This shit is very tricky
   *
   * - If both margin top and bottom is set, the first h1 is ok, the immediate next h1 gets distorted.
   * - If only margin top is set they both work fine.
   * - Tested in FF, Chrome.
   */

  return {
    marginTop: `${marginToSetinPx}px`,
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
  return ms(value, settings);
};

export {
  propTypes as ModularScalePropTypes,
  defaultProps as ModularScaleDefaultProps,
  scaleModular,
  scaleModularMargin,
};
