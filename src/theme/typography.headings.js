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
  const { scale, lineHeight } = props;
  return null;
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
 * Returns the style for the headings.
 */
const headings = (props, theme) => {
  const { scale } = props;

  return isNil(scale) ? differentSizes(props, theme) : sameSize(props, theme);
};

export { headings };
