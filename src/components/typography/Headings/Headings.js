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
 * Calculates the new margins.
 */
const margin = (props) => {
  const { scale, lineHeight } = props;
  const { fontSize, lineHeight: setupLineHeight } = defaultProps.setup;

  /**
   * The deafult line height in px.
   * Ex.: (100, 1.25) => 20
   */
  const lineHeightInPx = ((fontSize * 16) / 100) * setupLineHeight;

  /**
   * The heading's line height in px
   * Ex.: (6, 1) => 89.76372759879813
   */
  const headingLineHeightInPx = scaleValue(scale) * 16 * lineHeight;

  /**
   * The nearest multiply of the default line height for the heading's line height, in pixels.
   * Ex.: (20, 89.76) => 100
   * Ex.: (20, 67.3396) = 80
   */
  const nearestInPx =
    (Math.floor(headingLineHeightInPx / lineHeightInPx) + 1) * lineHeightInPx;

  /**
   * The margin we should add to match the grid, in pixels.
   */
  const differenceInPx = nearestInPx - headingLineHeightInPx;
  const differenceInEm = differenceInPx / 16;

  /**
   * This shit is very tricky
   * - `em` cannot be used since margins calculate somehow different em to px conversion than font size does. In Inspector / Computed we have correctly 89.7637px but in Inspector / Layout / Box Model we have 89.7667px incorrectly.
   * - if both margin top and bottom is set, the first h1 is ok, the immediate next h1 gets distorted.
   * - if only margin top is set they both work fine
   * - see https://seek-oss.github.io/capsize/
   *
   * Tested with:
   * - Nimbus sans, default fonts combined in all possible ways. Worked fine all the time.
   * - Scales well when the user cales the font size of the browser.
   * - It gets broken in Chrome. It seems margin top in px won't work.
   * - So px need to be converted somehow to em with another formula based on Layout / Box Model.
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
      //...margin({ scale: scaleValue, lineHeight: lineHeight }),
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
