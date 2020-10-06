import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The name of the font to be used.
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * The font family name as defined in the font css
   * @type {string}
   */
  fontFamily: PropTypes.string,
  /**
   * The weight of the font
   * @type {array}
   */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The font style
   * @type {string}
   */
  fontStyle: PropTypes.string,
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
  name: "Default",
  fontFamily: "inherit",
  fontWeight: "normal",
  fontStyle: "normal",
  children: null,
};

/**
 * Defines the styles.
 */
const useStyles = makeStyles(() => ({
  fontStyle: (props) => ({
    fontFamily: props.fontFamily,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
  }),
}));

/**
 * Displays content inside a font container.
 * Don't use this component directly. Instead use `<Text>`.
 */
const Font = (props) => {
  const { name, children } = props;
  const theme = useTheme();

  const font = theme.typography.font(name);
  const { fontStyle } = useStyles(font);

  if (!children) return null;

  return (
    <div className={clsx("Font", `Font${name}`, fontStyle)}>{children}</div>
  );
};

Font.propTypes = propTypes;
Font.defaultProps = defaultProps;

export default Font;
export { propTypes as FontPropTypes, defaultProps as FontDefaultProps };
