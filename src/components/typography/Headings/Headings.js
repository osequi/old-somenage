import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";
import { isNil } from "lodash";
import ms from "modularscale-js";

/**
 * Imports other components and hooks.
 */

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
  /**
   * The theme object.
   * @type {object}
   */
  theme: PropTypes.object,
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scale: null,
  modularScale: null,
  theme: null,
  children: null,
};

/**
 * Sets the new margins.
 */
const margin = (props, theme) => {
  const { scale, lineHeight } = props;
  return theme;
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
      ...margin({ ...props, scale: 1 }),
    },
    ["& h5"]: {
      ...theme.typography.scale(2),
      ...margin({ ...props, scale: 2 }),
    },
    ["& h4"]: {
      ...theme.typography.scale(3),
      ...margin({ ...props, scale: 3 }),
    },
    ["& h3"]: {
      ...theme.typography.scale(4),
      ...margin({ ...props, scale: 4 }),
    },
    ["& h2"]: {
      ...theme.typography.scale(5),
      ...margin({ ...props, scale: 5 }),
    },
    ["& h1"]: {
      ...theme.typography.scale(6),
      ...margin({ ...props, scale: 6 }),
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

/**
 * Defines the styles.
 */
const container = (props, theme) => {
  return {
    ...headings(props, theme),
  };
};

/**
 * Displays children inside a headings container.
 * Don't use this component directly. Instead use `<Text>`.
 * @see Headings.md
 */
const Headings = (props) => {
  const { children } = props;

  const theme = useTheme();
  const { containerKlass } = useStyles([container], props, theme);

  return <div className={cx("Headings", containerKlass)}>{children}</div>;
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;

export default Headings;
export {
  propTypes as HeadingsPropTypes,
  defaultProps as HeadingsDefaultProps,
  headings,
};
