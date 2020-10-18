import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../hooks";

/**
 * Imports other components and hooks.
 */
import MediaQueries from "../MediaQueries";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * The breakpoint name above the content will be hidden.
   * Example: 'tablet'
   * @type {string}
   */
  above: PropTypes.string,
  /**
   * The content to be hidden.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  above: null,
  children: null,
};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Hides content above a breakpoint.
 * @see Hide.md
 */
const Hide = (props) => {
  const { above, children } = props;
  const theme = useTheme();

  const breakpoint = theme.responsiveness.helpers.getBreakpoint(above);
  const query = `(max-width: ${breakpoint.value}px)`;

  return <MediaQueries values={[query]}>{children}</MediaQueries>;
};

Hide.propTypes = propTypes;
Hide.defaultProps = defaultProps;

export default Hide;
export { propTypes as HidePropTypes, defaultProps as HideDefaultProps };
