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
  /**
   * Retuns an Emotion-style media query.
   * @param  {string} name The breakpoint name, like tablet
   * @return {string}      The Emotion-style media query
   * @example theme.breakpoint('tablet') => '@media(min-width: 1024px)'
   * @see https://github.com/emotion-js/emotion/issues/490
   */
  breakpoint: (name) => {
    const query = breakpoint(name);
    return query ? `@media(${query})` : null;
  },
  /**
   * Always leave room for later customization.
   * @type {Object}
   */
  custom: {},
};

export default theme;
