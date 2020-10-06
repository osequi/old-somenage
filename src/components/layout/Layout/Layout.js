import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import { gridFauxLines, gridFauxLinesStyles } from "../GridFauxLines";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * What kind of layout to display.
   */
  variant: PropTypes.oneOf(["1d"]),
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.func,
  /**
   * The width of the layout
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the layout
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The number of columns, unitless.
   * The columns will be calculated useing `grid-template-columns: repeat(x, 1fr)`
   * @type {string}
   */
  columns: PropTypes.string,
  /**
   * The gap between the cells, unitless.
   * The gap will be a multiply of `var(--lem)`
   * Sets the gaps both horizontally with `column-gap` and vertically with `row-gap`.
   * @type {string}
   */
  gap: PropTypes.number,
  /**
   * The gap faux lines, aka the grid borders.
   * @type {string}
   */
  fauxLines: PropTypes.oneOf(["none", "horizontal", "vertical", "both"]),
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  variant: null,
  as: "div",
  width: "100%",
  height: "100%",
  columns: 1,
  gap: 0,
  fauxLines: "none",
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: (props) => ({
    display: "grid",
    width: `${props.width}`,
    height: `${props.height}`,
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
    columnGap: `calc(${props.gap} * var(--lem))`,
    rowGap: `calc(${props.gap} * var(--lem))`,

    ["& > *"]: {
      background: "lightgrey",
    },
  }),
}));

const displayFauxLines = (props) => {
  const { fauxLines, columns, children, theme } = props;

  if (fauxLines === "none") return null;

  /**
   * Calculates the number of rows.
   * The grid faux lines need them.
   */
  const rows = Math.floor(children.length / columns);

  /**
   * Loads the props for the grid faux lines.
   */
  const fauxLinesProps =
    fauxLines !== "none"
      ? gridFauxLines({ ...props, rows: rows, lines: fauxLines })
      : null;
  const { borderLeftSelector, borderBottomSelector } = fauxLinesProps;

  /**
   * Extends theme with faux lines props
   */
  theme.custom.fauxLinesBorderLeftSelector = borderLeftSelector;
  theme.custom.fauxLinesBorderBottomSelector = borderBottomSelector;

  /**
   * Displays the faux lines
   */
  return gridFauxLinesStyles(fauxLinesProps);
};

/**
 * Displays the component
 */
const Layout = (props) => {
  const { variant, as, columns, fauxLines, children } = props;
  const { container } = useStyles(props);

  let theme = useTheme();
  const fauxLinesKlass = displayFauxLines({ ...props, theme: theme });

  const props2 = { className: clsx("Layout", container, fauxLinesKlass) };

  return createElement(as, props2, children);
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
export { propTypes as LayoutPropTypes, defaultProps as LayoutDefaultProps };
