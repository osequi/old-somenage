import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import { SetupPropTypes, SetupDefaultProps } from "../../typography/Setup";
import { ScalePropTypes, ScaleDefaultProps } from "../../typography/Scale";
import { breakpoint } from "../Breakpoints/Breakpoints";

/**
 * Defines the prop types
 */
const propTypes = {
  typography: {
    setup: PropTypes.shape(SetupPropTypes),
    scale: PropTypes.shape(ScalePropTypes),
  },
  breakpoint: PropTypes.func,
};

/**
 * Defines the default props
 */
const defaultProps = {
  typography: {
    setup: { ...SetupDefaultProps, fontSizes: [100, 110, 140, 160, 200] },
    scale: ScaleDefaultProps,
  },
  breakpoint: (name) => `@media screen and ${breakpoint(name)}`,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  container: {
    background: "lightblue",
    [theme.breakpoint("mobile")]: {
      background: "red",
    },
    [theme.breakpoint("tablet")]: {
      background: "green",
    },
    [theme.breakpoint("tabletPortrait")]: {
      background: "blue",
    },
    [theme.breakpoint("laptop")]: {
      background: "yellow",
    },
    [theme.breakpoint("desktop")]: {
      background: "orange",
    },
  },
}));

/**
 * Displays the component
 */
const Theme = (props) => {
  const { container } = useStyles(props);

  console.log("bp:", defaultProps.breakpoint("mobile"));

  return <div className={clsx("Theme", container)}>Theme</div>;
};

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
export { propTypes as ThemePropTypes, defaultProps as ThemeDefaultProps };
