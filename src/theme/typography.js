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
    {
      name: "Nimbus Sans Medium",
      family: "nimbus-sans",
      weight: 500,
      style: "normal",
    },
  ],
};

/**
 * Returns a media query for a breakpoint name.
 * @param  {string} name The breakpoint name.
 * @return {string}      A media query.
 */
const font = (name) => {
  return typography.fonts.find((item) => item.name === name);
};

export { typography, font };
