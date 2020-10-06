/**
 * Imports other components and hooks
 */
import { typography, font, maxWidth, scale } from "./typography";
import { breakpoints, breakpoint } from "./responsiveness";
import { spacing } from "./spacing";

/**
 * Defines the theme.
 */
const theme = {
  typography: {
    ...typography,
    font: (name) => font(name),
    maxWidth: (name) => maxWidth(name),
    scale: (number) => scale(number),
    spacing: (name) => spacing(name),
  },
  breakpoints: breakpoints,
  breakpointQuery: (name) => breakpoint(name),
  breakpoint: (name) => {
    const query = breakpoint(name);
    return query ? `@media screen and ${query})` : null;
  },
  /**
   * Always leave room for later customization.
   * @type {Object}
   */
  custom: {},
};

export default theme;
