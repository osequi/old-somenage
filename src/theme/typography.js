import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import {
  SetupPropTypes,
  SetupDefaultProps,
} from "../components/typography/Setup";
import {
  ScalePropTypes,
  ScaleDefaultProps,
} from "../components/typography/Scale";
import { FontPropTypes, FontDefaultProps } from "../components/typography/Font";

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
   * @type {object}
   */
  scale: PropTypes.shape(ScalePropTypes),
  /**
   * The list of fonts.
   * @type {array}
   */
  fonts: PropTypes.arrayOf(PropTypes.shape(FontPropTypes)),
};

/**
 * Sets up typography.
 */
const typography = {
  setup: {
    ...SetupDefaultProps,
  },
  scale: {
    ...ScaleDefaultProps,
  },
  fonts: [
    { ...FontDefaultProps },
    {
      name: "Nimbus Sans Light",
      fontFamily: "nimbus-sans",
      fontWeigh: 300,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Regular",
      fontFamily: "nimbus-sans",
      fontWeigh: 400,
      fontStyle: "normal",
    },
    {
      name: "Nimbus Sans Medium",
      fontFamily: "nimbus-sans",
      fontWeigh: 500,
      fontStyle: "normal",
    },
  ],
};

/**
 * Finds a font.
 * @param  {string} name The font name.
 * @return {object}      The font object.
 */
const font = (name) => {
  return typography.fonts.find((item) => item.name === name);
};

/**
 * Sets the max-width of a text to display 50-60 character in a row.
 * // TODO: do the calculations. Currently maxWidth is hardcoded to 35.
 * @param  {string} name The font name
 * @return {string}      The max width set
 */
const maxWidth = (name) => {
  return { maxWidth: `calc(35*var(--lem))` };
};

export { typography, font, maxWidth };
