import PropTypes from "prop-types";
import { isNil } from "lodash";
import ms from "modularscale-js";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * The name of the font used for headings.
   * @type {string}
   */
  font: PropTypes.string,
  /**
   * The new line height.
   * Headings have a reduced line height while body text has a larger one. For better readabaility.
   * @type {number}
   */
  lineHeight: PropTypes.number,
  /**
   * The scale of the headings in case all of them have the same scale.
   * @type {number}
   */
  scale: PropTypes.number,
  /**
   * The modular scale of the headings in case when headings are different.
   * @type {object}
   * // NOTE: This prop is inactive for now.
   */
  modularScale: PropTypes.shape({}),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scale: null,
  modularScale: null,
};

/**
 * Sets the new margins.
 */
const margin = (props, theme) => {
  const { scale: scaleProp, lineHeight } = props;
  const { typography } = theme;
  const { lem, setup } = typography;
  const { fontSize, scale: scaleTheme } = setup;

  /**
   * The size of a single line in the heading.
   * Example: (6, 1) => 5.61
   */
  const headingLem = ms(scaleProp, scaleTheme) * lineHeight;

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
 * Returns headings with different sizes.
 */
const differentSizes = (props, theme) => {
  const { font, lineHeight } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.font(font),
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...theme.typography.scale(1),
      ...margin({ ...props, scale: 1 }, theme),
    },
    ["& h5"]: {
      ...theme.typography.scale(2),
      ...margin({ ...props, scale: 2 }, theme),
    },
    ["& h4"]: {
      ...theme.typography.scale(3),
      ...margin({ ...props, scale: 3 }, theme),
    },
    ["& h3"]: {
      ...theme.typography.scale(4),
      ...margin({ ...props, scale: 4 }, theme),
    },
    ["& h2"]: {
      ...theme.typography.scale(5),
      ...margin({ ...props, scale: 5 }, theme),
    },
    ["& h1"]: {
      ...theme.typography.scale(6),
      ...margin({ ...props, scale: 6 }, theme),
    },
  };
};

/**
 * Returns headings with the same size.
 */
const sameSize = (props, theme) => {
  const { font, lineHeight, scale } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.font(font),
      ...theme.typography.scale(scale),
      ...margin(props, theme),
      lineHeight: lineHeight,
    },
  };
};

/**
 * Returns the style for the headings.
 */
const headings = (props, theme) => {
  const { scale } = props;

  return isNil(scale) ? differentSizes(props, theme) : sameSize(props, theme);
};

export { headings };
