import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { isNil } from "lodash";

/**
 * Imports other components and hooks
 */
import { font } from "../Fonts";
import { scale, scaleValue } from "../Scale";
import { SetupPropTypes, SetupDefaultProps } from "../Setup";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The font name of the headings.
   * @type {string}
   */
  fontName: PropTypes.string,
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
   * The new line height.
   * Headings have a reduced line height while body text has a larger one. For better readabaility.
   * @type {number}
   */
  lineHeight: PropTypes.number,
  /**
   * The global grid setup.
   * @type {object}
   */
  setup: PropTypes.shape(SetupPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontName: "Default",
  scale: null,
  modularScale: null,
  lineHeight: 1,
  setup: SetupDefaultProps,
};

/**
 * Sets the new margins
 */
const margin = (props) => {
  const { scale, lineHeight } = props;
  const { fontSize, lineHeight: setupLineHeight } = defaultProps.setup;

  /**
   * The deafult line height in em.
   * Ex.: 100 * 1.25 => 1.25
   */
  const lineHeightInEm = (fontSize / 100) * setupLineHeight;

  /**
   * The heading's line height in em
   * Ex.: (ms(6), 1) => 5.61
   */
  const headingLineHeightInEm = scaleValue(scale) * lineHeight;

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
  const { fontName, scale: scaleValue, lineHeight } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font(fontName),
      ...scale(scaleValue),
      ...margin({ scale: scaleValue, lineHeight: lineHeight }),
      lineHeight: lineHeight,
    },
  };
};

/**
 * Returns headings with different sizes
 */
const differentSizes = (props) => {
  const { fontName, modularScale, lineHeight } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font(fontName),
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...scale(1),
      ...margin({ scale: 1, lineHeight: lineHeight }),
    },
    ["& h5"]: {
      ...scale(2),
      ...margin({ scale: 2, lineHeight: lineHeight }),
    },
    ["& h4"]: {
      ...scale(3),
      ...margin({ scale: 3, lineHeight: lineHeight }),
    },
    ["& h3"]: {
      ...scale(4),
      ...margin({ scale: 4, lineHeight: lineHeight }),
    },
    ["& h2"]: {
      ...scale(5),
      ...margin({ scale: 5, lineHeight: lineHeight }),
    },
    ["& h1"]: {
      ...scale(6),
      ...margin({ scale: 6, lineHeight: lineHeight }),
    },
  };
};

/**
 * Returns headings
 */
const headings = (props) => {
  const { scale } = props;

  return isNil(scale) ? differentSizes(props) : sameSize(props);
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: (props) => ({
    ...headings(props),
  }),
}));

/**
 * Displays children inside a headings container.
 * Don't use this component directly. Instead use `<Typography>`.
 */
const Headings = (props) => {
  const { children } = props;
  const { container } = useStyles(props);

  return <div className={clsx("Headings", container)}>{children}</div>;
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;

export default Headings;
export {
  propTypes as HeadingsPropTypes,
  defaultProps as HeadingsDefaultProps,
  headings,
};
