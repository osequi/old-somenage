import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The number of columns
   * @type {number}
   */
  columns: PropTypes.number,
  /**
   * The number of rows
   * @type {number}
   */
  rows: PropTypes.number,
  /**
   * Which lines to display
   * @type {string}
   */
  lines: PropTypes.oneOf(["horizontal", "vertical", "both"]),
  /**
   * The grid items
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  columns: 0,
  rows: 0,
  lines: null,
  children: null,
};

/**
 * Defines the styles.
 */
const useStyles = makeStyles((theme) => ({
  fauxLines: {
    ["&  > *"]: {
      boxSizing: "border-box",

      [`${theme.custom.fauxLinesBorderLeftSelector}`]: {
        borderLeft: (props) => (props.displayHorizontal ? "1px solid" : "none"),
      },

      [`${theme.custom.fauxLinesBorderBottomSelector}`]: {
        borderBottom: (props) => (props.displayVertical ? "1px solid" : "none"),
      },
    },
  },
}));

/**
 * Returns the generated faux lines CSS.
 * Many times the parent will need just a CSS instead of a rendered component.
 * @param  {object} props The props
 * @return {string}       The CSS
 */
const gridFauxLines = (props) => {
  const { columns, rows, lines, theme } = props;

  const lastRow = columns * rows - columns + 1;
  const firstRow = columns - 1;
  const borderLeftException = `${columns}n - ${firstRow}`;
  const borderBottomException = `n + ${lastRow}`;

  const displayHorizontal = lines === "both" || lines === "vertical";
  const displayVertical = lines === "both" || lines === "horizontal";
  const borderLeftSelector = `&:not(:nth-child(${borderLeftException}))`;
  const borderBottomSelector = `&:not(:nth-child(${borderBottomException}))`;

  return {
    displayVertical: displayVertical,
    displayHorizontal: displayHorizontal,
    borderLeftSelector: borderLeftSelector,
    borderBottomSelector: borderBottomSelector,
  };
};

/**
 * Displays the component
 */
const GridFauxLines = (props) => {
  const { columns, rows, lines, children } = props;

  const fauxLines = useStyles(gridFauxLines(props));

  if (!children) return null;
  if (columns === 0 || rows === 0) return null;
  if (!lines) return null;

  return (
    <section className={clsx("GridFauxLines", fauxLines)}>{children}</section>
  );
};

GridFauxLines.propTypes = propTypes;
GridFauxLines.defaultProps = defaultProps;

export default GridFauxLines;
export {
  propTypes as GridFauxLinesPropTypes,
  defaultProps as GridFauxLinesDefaultProps,
  gridFauxLines,
  useStyles as gridFauxLinesStyles,
};
