import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";

/**
 * Defines the prop types.
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
 * Defines the default props.
 * Props will be overwritten by the theme.
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
const container = (font) => {
  return {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    fontStyle: font.fontStyle,
  };
};

/**
 * Displays content inside a font container.
 * Don't use this component directly. Instead use `<Text>`.
 * @see Font.md
 */
const Font = (props) => {
  const { name, children } = props;

  const theme = useTheme();
  const font = theme.typography.font(name);
  const { containerKlass } = useStyles([container], font);

  return <div className={cx("Font", containerKlass)}>{children}</div>;
};

Font.propTypes = propTypes;
Font.defaultProps = defaultProps;

export default Font;
export { propTypes as FontPropTypes, defaultProps as FontDefaultProps };
