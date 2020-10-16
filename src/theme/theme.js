/**
 * Imports other components and hooks.
 */
import { typography } from "./typography";
import {
  lem,
  responsiveFontSizes,
  font,
  maxWidth,
  scale,
} from "./typography.helpers";
import { elements } from "./typography.elements";
import { headings } from "./typography.headings";

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
 * Beside settings the theme provides various helper functions.
 * These functions are documented in the respective files.
 */
const theme = {
  typography: {
    /**
     * The settings.
     */
    ...typography,
    elements: elements,
    headings: (props, theme) => headings(props, theme),
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
