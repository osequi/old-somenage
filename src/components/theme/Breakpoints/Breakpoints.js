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
 * Defines the constants
 */
const breakpointNames = [
  "mobile",
  "tablet",
  "tabletPortrait",
  "laptop",
  "desktop",
];

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
      value: "767",
    },
    {
      name: "tablet",
      value: "1023",
    },
    {
      name: "tabletPortrait",
      value: "1365",
    },
    {
      name: "laptop",
      value: "1599",
    },
    {
      name: "desktop",
      value: "1920",
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

const breakpoint = (name) => {
  const bp = defaultProps.breakpoints.find((item) => item.name === name);
  return bp?.value ? `(min-width: ${bp.value}px)` : null;
};

/**
 * Displays the content for the specified breakpoints.
 */
const Breakpoints = (props) => {
  const { breakpoints, values, children } = props;
  const { container } = useStyles(props);

  const queries =
    values &&
    values.map((value) => {
      return breakpoint(value);
    });

  return <MediaQueries values={queries} children={children} />;
};

Breakpoints.propTypes = propTypes;
Breakpoints.defaultProps = defaultProps;

export default Breakpoints;
export {
  propTypes as BreakpointsPropTypes,
  defaultProps as BreakpointsDefaultProps,
  breakpoint,
};
