import React from "react";
import PropTypes from "prop-types";

/**
 * Imports external font css
 */
import "./Fonts.css";

/**
 * Imports other components and hooks
 */
import Font, { FontPropTypes, FontDefaultProps } from "../Font";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The name of the font to use
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * The list of available fonts
   * @type {array}
   */
  fonts: PropTypes.arrayOf(PropTypes.shape(FontPropTypes)),
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "Default",
  fonts: [
    { ...FontDefaultProps },
    {
      name: "Nimbus Sans Light",
      family: "nimbus-sans",
      weight: 300,
      style: "normal",
    },
    {
      name: "Nimbus Sans Regular",
      family: "nimbus-sans",
      weight: 400,
      style: "normal",
    },
  ],
};

/**
 * Returns the font object for a font identified by name.
 * @param  {string} props The font name
 * @return {object}       The font style object
 */
const getFont = (name) => {
  const { name: defaultName, fonts } = defaultProps;

  /**
   * If no `name` specified returns the default font
   */
  const name2 = name ? name : defaultName;

  /**
   * Loads the font
   */
  const font = fonts.find((item) => item.name === name);

  return font;
};

/**
 * Returns the style object for a font.
 * @param  {object} props The font object
 * @return {object}       The font style object
 */
const getFontCss = (font) => {
  const { family, weight, style } = font;
  return { fontFamily: family, fontWeight: weight, fontStyle: style };
};

/**
 * Returns the style object for a font identified by name.
 * @param  {string} name The font name
 * @return {object}      The font style object
 */
const font = (name) => {
  return getFontCss(getFont(name));
};

/**
 * Displays children inside a font container.
 * Don't use this component directly. Instead use `<Typography>`.
 */
const Fonts = (props) => {
  const { name, children } = props;
  const font = getFont(name);

  return <Font {...font}>{children}</Font>;
};

Fonts.propTypes = propTypes;
Fonts.defaultProps = defaultProps;

export default Fonts;
export {
  propTypes as FontsPropTypes,
  defaultProps as FontsDefaultProps,
  getFont,
  getFontCss,
  font,
};
