import PropTypes from "prop-types";
import ms from "modularscale-js";

/**
 * Imports other components and hooks.
 */
import { SetupPropTypes } from "../components/typography/Setup";
import { FontPropTypes } from "../components/typography/Font";
import { breakpoint } from "./responsiveness";

/**
 * Imports fonts.
 */
import "./fonts.css";

/**
 * Defines the typography prop types.
 * @type {Object}
 */
const typographyPropTypes = {
  /**
   * Sets up the typographic grid in `<body>`.
   * @type {object}
   */
  setup: PropTypes.shape(SetupPropTypes),
  /**
   * Sets up the Modular Scale for font sizing.
   * @see https://github.com/modularscale/modularscale-js
   * @type {object}
   */
  scale: {
    base: PropTypes.arrayOf(PropTypes.number),
    ratio: PropTypes.number,
  },
  /**
   * The list of fonts available for this theme.
   * @type {array}
   */
  fonts: PropTypes.arrayOf(PropTypes.shape(FontPropTypes)),
};

/**
 * Sets up typography.
 */
const typography = {
  setup: {
    fontSize: 100,
    lineHeight: 1.25,
    fontSizes: [
      {
        breakpoint: "tablet",
        fontSize: 110,
      },
      {
        breakpoint: "laptop",
        fontSize: 120,
      },
      {
        breakpoint: "desktop",
        fontSize: 130,
      },
    ],
  },
  scale: {
    base: [1],
    ratio: 1.333,
  },
  fonts: [
    {
      name: "Nimbus Sans Light",
      fontFamily: "nimbus-sans",
      fontWeight: 300,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Regular",
      fontFamily: "nimbus-sans",
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Medium",
      fontFamily: "nimbus-sans",
      fontWeight: 500,
      fontStyle: "normal",
    },
  ],
};

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

export { typography, lem, responsiveFontSizes, font, maxWidth, scale };
