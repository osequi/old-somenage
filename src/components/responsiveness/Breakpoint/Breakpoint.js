import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

/**
 * Imports other components and hooks
 */
import MediaQueries from "../MediaQueries";

/**
 * Defines the breakpoint names.
 */
const breakpointNames = ["mobile", "tablet", "laptop", "desktop"];

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the breakpoints
   * @type {array}
   */
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(breakpointNames),
      value: PropTypes.number,
    })
  ),
  /**
   * A list of breakpoint names.
   * The content will be visible only in these breakpoints.
   * @type {array}
   */
  values: PropTypes.arrayOf(PropTypes.string),
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
  breakpoints: [
    {
      name: "mobile",
      value: "320",
    },
    {
      name: "tablet",
      value: "768",
    },
    {
      name: "laptop",
      value: "1024",
    },
    {
      name: "desktop",
      value: "1600",
    },
  ],
  values: null,
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Breakpoint = (props) => {
  const { container } = useStyles(props);

  return <div className={clsx("Breakpoint", container)}>Breakpoint</div>;
};

Breakpoint.propTypes = propTypes;
Breakpoint.defaultProps = defaultProps;

export default Breakpoint;
export {
  propTypes as BreakpointPropTypes,
  defaultProps as BreakpointDefaultProps,
};
