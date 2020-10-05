import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import { default as MediaQueriesDemo } from "../MediaQueries/MediaQueries.demo";
import { default as BreakpointsDemo } from "../Breakpoints/Breakpoints.demo";
import Theme from "../Theme";

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
  container: {},
}));

/**
 * Displays the component
 */
const ThemeDemo = (props) => {
  const { container } = useStyles(props);

  return (
    <div className={clsx("ThemeDemo", container)}>
      <h1>Theme Demo</h1>
      <Theme />
      <h2>Media Queries Demo</h2>
      {/*<MediaQueriesDemo />*/}
      <h2>Breakpoints Demo</h2>
      <BreakpointsDemo />
    </div>
  );
};

ThemeDemo.propTypes = propTypes;
ThemeDemo.defaultProps = defaultProps;

export default ThemeDemo;
export {
  propTypes as ThemeDemoPropTypes,
  defaultProps as ThemeDemoDefaultProps,
};
