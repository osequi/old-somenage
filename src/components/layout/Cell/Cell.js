import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The unique id of the cell.
   * Cells are part of a list so they need a unique `key`.
   * @type {string}
   */
  key: PropTypes.string,
  /**
   * The name of the cell.
   * When cells are transformed into complex objects they need a name.
   * Example: For a cube names are front, back, left, right, top, bottom
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.func,
  /**
   * The content of the cell.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The className of the element.
   * It's optional to set.
   * Serves the technical purpose of style chaining.
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  key: null,
  name: null,
  as: "div",
  children: null,
  className: "Cell",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays a grid cell.
 */
const Cell = (props) => {
  const { as, children, className } = props;
  const { container } = useStyles(props);

  const props2 = { className: clsx(className, container) };

  return createElement(as, props2, children);
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
export { propTypes as CellPropTypes, defaultProps as CellDefaultProps };
