import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";

/**
 * Imports other components and hooks
 */
import MediaQueries from "../MediaQueries";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The breakpoint name above the content will be visible.
   * Example: 'mobile'
   * @type {string}
   */
  above: PropTypes.string,
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
  above: null,
  children: null,
};

/**
 * Displays content above a breakpoint.
 */
const Display = (props) => {
  const { above, children } = props;
  const theme = useTheme();

  const query = theme.breakpointQuery(above);

  return <MediaQueries values={[query]}>{children}</MediaQueries>;
};

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Display;
export { propTypes as DisplayPropTypes, defaultProps as DisplayDefaultProps };
