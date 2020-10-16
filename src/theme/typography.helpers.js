import ms from "modularscale-js";

/**
 * Imports other components and hooks.
 */
import { typography } from "./typography";
import { breakpoint } from "./responsiveness";

/**
 * Calculates the basic spacing unit, the grid size, in `em`
 * @example {fontSize: 100%, lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
 * @example {fontSize: 110%, lineHeight: 1.25} => (110 * 1.25) / 100 = 1.375
 */
const lem = () => {
  const { setup } = typography;
  const { fontSize, lineHeight } = setup;
  return (fontSize * lineHeight) / 100;
};

/**
 * Creates the media queries for the responsive font sizes.
 */
const responsiveFontSizes = () => {
  const { setup } = typography;
  const { fontSizes } = setup;

  let responsiveSizes = [];
  fontSizes &&
    fontSizes.map((item) => {
      const { breakpoint: bp, fontSize } = item;
      const query = breakpoint(bp);
      responsiveSizes[`${query}`] = { fontSize: `${fontSize}%` };
    });

  return responsiveSizes;
};

/**
 * Returns a font style object identified by name.
 * @param  {string} name The font name.
 * @return {object}      The font style object.
 * @example
 * ```
 * font('Nimbus Sans Medium') => { name: "Nimbus Sans Medium", fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}
 * ```
 */
const font = (name) => {
  return typography.fonts.find((item) => item.name === name);
};

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 * // TODO: do the calculations. Currently maxWidth is hardcoded to 35.
 * // NOTE: `ch` would be useful here, however does it fits the grid?
 * @param  {string} name The font name.
 * @return {object}      The maxWidth style object.
 */
const maxWidth = (name) => {
  return { maxWidth: `calc(35*var(--lem))` };
};

/**
 * Sets the font size to a modular scale value, in em.
 * @param  {number} number The level on the modular scale.
 * @return {object}        The fontSize style object.
 */
const scale = (number) => {
  const scaled = ms(number, typography.scale);
  return { fontSize: `${scaled}em` };
};

export { lem, responsiveFontSizes, font, maxWidth, scale };
