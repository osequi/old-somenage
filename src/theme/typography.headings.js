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
   * The scales of the headings in case when headings are different.
   * @type {object}
   */
  scales: PropTypes.arrayOf(PropTypes.number),
};

/**
 * Defines the default props.
 */
const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scale: null,
  scales: [1, 2, 3, 4, 5, 6],
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
  //const headingLem = ms(scaleProp, scaleTheme) * lineHeight;
  const headingLem = (scaleProp + 1) * lineHeight;

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
    marginTop: 0,
    marginBottom: 0,
  };
};

/**
 * Returns headings with different sizes.
 */
const differentSizes = (props, theme) => {
  const { font, lineHeight, scales } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.helpers.font(font),
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...theme.typography.helpers.scale(scales[0], lineHeight),
      ...margin({ ...props, scale: scales[0] }, theme),
    },
    ["& h5"]: {
      ...theme.typography.helpers.scale(scales[1], lineHeight),
      ...margin({ ...props, scale: scales[1] }, theme),
    },
    ["& h4"]: {
      ...theme.typography.helpers.scale(scales[2], lineHeight),
      ...margin({ ...props, scale: scales[2] }, theme),
    },
    ["& h3"]: {
      ...theme.typography.helpers.scale(scales[3], lineHeight),
      ...margin({ ...props, scale: scales[3] }, theme),
    },
    ["& h2"]: {
      ...theme.typography.helpers.scale(scales[4], lineHeight),
      ...margin({ ...props, scale: scales[4] }, theme),
    },
    ["& h1"]: {
      ...theme.typography.helpers.scale(scales[5], lineHeight),
      ...margin({ ...props, scale: scales[5] }, theme),
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
      ...theme.typography.helpers.font(font),
      ...theme.typography.helpers.scale(scale, lineHeight),
      ...margin(props, theme),
      lineHeight: lineHeight,
    },
  };
};

/**
 * Returns the style for the headings.
 */
const headings = (props, theme) => {
  const { scale, scales } = props;

  const scales2 = isNil(scales) ? defaultProps.scales : scales;
  const props2 = { ...props, scales: scales2 };

  return isNil(scale) ? differentSizes(props2, theme) : sameSize(props, theme);
};

export { headings };
