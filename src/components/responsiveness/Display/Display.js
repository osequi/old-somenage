import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {}
}));

/**
 * Displays the component
 */
const Display = props => {
  const { container } = useStyles(props);

  return <div className={clsx("Display", container)}>Display</div>;
};

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Display;
export { propTypes as DisplayPropTypes, defaultProps as DisplayDefaultProps };
