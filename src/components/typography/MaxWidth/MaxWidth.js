import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The font name.
   * The font width contributes to the calculation
   * @type {string}
   */
  fontName: PropTypes.string,
  /**
   * Which element will have `maxWidth` set.
   * The element type contributes to the calculation
   * @type {string}
   */
  htmlElement: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontName: "Default",
  htmlElement: "p",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Sets the number of chars in a row to around 50-60
 */
const maxWidth = (props) => {
  const { fontName, htmlElement } = props;
  return { maxWidth: `calc(35*var(--lem))` };
};

/**
 * Displays the component
 */
const MaxWidth = (props) => {
  const { container } = useStyles(props);

  return <div className={clsx("MaxWidth", container)}>MaxWidth</div>;
};

MaxWidth.propTypes = propTypes;
MaxWidth.defaultProps = defaultProps;

export default MaxWidth;
export {
  propTypes as MaxWidthPropTypes,
  defaultProps as MaxWidthDefaultProps,
  maxWidth,
};
