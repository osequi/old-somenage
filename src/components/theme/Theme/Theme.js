import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import { SetupPropTypes, SetupDefaultProps } from "../../typography/Setup";
import { ScalePropTypes, ScaleDefaultProps } from "../../typography/Scale";

/**
 * Defines the prop types
 */
const propTypes = {
  typography: {
    setup: PropTypes.shape(SetupPropTypes),
    scale: PropTypes.shape(ScalePropTypes),
  },
};

/**
 * Defines the default props
 */
const defaultProps = {
  typography: {
    setup: { ...SetupDefaultProps, fontSizes: [100, 110, 140, 160, 200] },
    scale: ScaleDefaultProps,
  },
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
const Theme = (props) => {
  const { container } = useStyles(props);

  return <div className={clsx("Theme", container)}>Theme</div>;
};

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
export { propTypes as ThemePropTypes, defaultProps as ThemeDefaultProps };
