import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */

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
   * The grid borders look good only when there is no gap in the grid.
   * Therefore when fauxLines is set instead of grid gap we'll set a margin on the grid elements.
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
const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    display: "grid",
    width: `${props.width}`,
    height: `${props.height}`,
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
    columnGap: theme.custom.fauxLinesBorderLeftSelector
      ? 0
      : `calc(${props.gap} * var(--lem))`,
    rowGap: theme.custom.fauxLinesBorderLeftSelector
      ? 0
      : `calc(${props.gap} * var(--lem))`,

    ["& > *"]: {
      background: "lightgrey",
      padding: theme.custom.fauxLinesBorderLeftSelector
        ? `calc(${props.gap} * var(--lem))`
        : "inherit",
    },
  }),

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
 * Calculates the position of the faux lines.
 */
const calculateFauxLines = (props) => {
  const { fauxLines, columns, children } = props;

  if (fauxLines === "none") return null;

  const rows = Math.floor(children.length / columns) + 1;

  const lastRow = columns * rows - columns + 1;
  const firstRow = columns - 1;
  const borderLeftException = `${columns}n - ${firstRow}`;
  const borderBottomException = `n + ${lastRow}`;

  const displayHorizontal = fauxLines === "both" || fauxLines === "vertical";
  const displayVertical = fauxLines === "both" || fauxLines === "horizontal";
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
const Layout = (props) => {
  const { variant, as, columns, fauxLines, children } = props;

  /**
   * Displays the faux lines if requested.
   */
  let theme = useTheme();
  const fauxLinesProps = calculateFauxLines(props);

  if (fauxLinesProps) {
    const { borderLeftSelector, borderBottomSelector } = fauxLinesProps;
    theme.custom.fauxLinesBorderLeftSelector = borderLeftSelector;
    theme.custom.fauxLinesBorderBottomSelector = borderBottomSelector;
  }

  const { container, fauxLines: fauxLinesKlass } = useStyles({
    ...props,
    ...fauxLinesProps,
  });

  /**
   * Prepares the props to render the component.
   */
  const props2 = { className: clsx("Layout", container, fauxLinesKlass) };

  return createElement(as, props2, children);
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
export { propTypes as LayoutPropTypes, defaultProps as LayoutDefaultProps };
