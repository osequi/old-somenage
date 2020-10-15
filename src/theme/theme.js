/**
 * Imports other components and hooks.
 */
import {
  typography,
  lem,
  responsiveFontSizes,
  font,
  maxWidth,
  scale,
} from "./typography";
import {
  breakpoints,
  breakpointQueryValue,
  breakpoint,
} from "./responsiveness";
import { spacing } from "./spacing";

/**
 * Defines the theme.
 *
 * Theme overwrites the defaultProps in components.
 * In other words, everything should be set up here. Rely on components only for their propTypes, not for their defaultProps.
 *
 * Beside the settings the theme provides various helper functions.
 * These functions are documented in the respective files.
 */
const theme = {
  typography: {
    /**
     * The settings.
     */
    ...typography,
    /**
     * The helpers.
     */
    lem: lem(),
    responsiveFontSizes: responsiveFontSizes(),
    font: (name) => font(name),
    maxWidth: (name) => maxWidth(name),
    scale: (number) => scale(number),
    spacing: (name) => spacing(name),
  },
  breakpoints: breakpoints,
  breakpointQueryValue: (name) => breakpointQueryValue(name),
  breakpoint: (name) => breakpoint(name),
  /**
   * Always leave room for later customization.
   * @type {Object}
   */
  custom: {},
};

export default theme;
