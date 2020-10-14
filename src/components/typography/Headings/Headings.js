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
const margin = (props) => {
  const { scale, lineHeight, theme } = props;
  const { typography } = theme;
  const { setup, scale: scaleSetup } = typography;
  const { fontSize, lineHeight: setupLineHeight } = setup;

  /**
   * The deafult line height in em.
   * Ex.: 100 * 1.25 => 1.25
   */
  const lineHeightInEm = (fontSize / 100) * setupLineHeight;

  /**
   * The heading's line height in em
   * Ex.: (ms(6), 1) => 5.61
   */
  const headingLineHeightInEm = ms(scale, scaleSetup) * lineHeight;

  /**
   * The nearest multiply of the default line height for the heading's line height, in em.
   * Ex.: default: 1.25, heading: 5.61 => (4+1)*1.25 = 6.25
   */
  const nearestInEm =
    (Math.floor(headingLineHeightInEm / lineHeightInEm) + 1) * lineHeightInEm;

  /**
   * The margin we should add to match the grid, in em.
   * Ex.: 6.25 - 5.61 = 0.64
   */
  const differenceInEm = nearestInEm - headingLineHeightInEm;
  const differenceInPx = differenceInEm * 16;

  /**
   * This shit is very tricky
   *
   * - If both margin top and bottom is set, the first h1 is ok, the immediate next h1 gets distorted.
   * - If only margin top is set they both work fine.
   *
   * Tested with, px:
   * - Nimbus sans, default fonts combined in all possible ways. Worked fine all the time.
   * - Scales well when the user scales the font size of the browser.
   * - It gets broken in Chrome on certain, unknown h elements.
   * - It turns out FF and Chrome compute differently the layout / line height. In FF a h1 is 700×179.533 in Chrome the same h1 is 700x178. No matter if the font size is set in px or em. The same is true also on the https://web.dev/ site on the first h1. So it seems this problem is incurable via CSS.
   * - A runtime size checker JS code might help, but perhaps will reduce redering speed and introduces code complexity.
   *
   * Tested with, em:
   * - When margins are set in em they are both broken in FF and Chrome, in the same way.
   *
   * See Headings.md for more details.
   */

  return {
    marginTop: `${differenceInPx}px`,
    marginBottom: 0,
  };
};

/**
 * Returns headings with the same size.
 */
const sameSize = (props) => {
  const { font, lineHeight, scale, theme } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...theme.typography.font(font),
      ...theme.typography.scale(scale),
      ...margin(props),
      lineHeight: lineHeight,
    },
  };
};

/**
 * Returns headings with different sizes.
 */
const differentSizes = (props) => {
  const { font, lineHeight, modularScale, theme } = props;

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
const headings = (props) => {
  const { scale } = props;

  return isNil(scale) ? differentSizes(props) : sameSize(props);
};

/**
 * Defines the styles.
 */
const container = (props) => {
  return {
    ...headings(props),
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
  const { containerKlass } = useStyles([container], { ...props, theme: theme });

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
