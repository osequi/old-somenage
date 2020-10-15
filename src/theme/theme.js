/**
 * Imports other components and hooks
 */
import { typography, font, maxWidth, scale } from "./typography";
import { breakpoints, breakpoint } from "./responsiveness";
import { spacing } from "./spacing";

/**
 * Defines the theme.
 * Theme overwrites the defaultProps in components. In other words, everything should be set up here. Rely on components only for thei propTypes, not defaultProps.
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
    /**
     * Returns a font style object identified by name.
     * @param  {string} name The font name.
     * @return {object}      The font style object.
     * @example
     * ```
     * font('Nimbus Sans Medium') => { name: "Nimbus Sans Medium", fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}
     * ```
     */
    font: (name) => font(name),
    /**
     * Sets the max-width of a text to display 50-60 characters in a row.
     * // TODO: do the calculations. Currently maxWidth is hardcoded to 35.
     * @param  {string} name The font name.
     * @return {object}      The maxWidth style object.
     */
    maxWidth: (name) => maxWidth(name),
    /**
     * Sets the font size to a modular scale value, in em.
     * @param  {number} number The level on the modular scale.
     * @return {object}        The fontSize style object.
     */
    scale: (number) => scale(number),
    /**
     * Returns a specifing typographic spacing.
     * @param  {string} name The spacing name.
     * @return {object}      The typographic spacing object styles.
     */
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
