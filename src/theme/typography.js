import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { SetupPropTypes } from "../components/typography/Setup";

/**
 * Imports fonts.
 */
import "./fonts.css";

/**
 * Defines the typography prop types.
 * @type {Object}
 */
const propTypes = {
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
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the font to be used.
       * @type {string}
       */
      name: PropTypes.string,
      /**
       * The font family name as defined in the font css
       * @type {string}
       */
      fontFamily: PropTypes.string,
      /**
       * The weight of the font
       * @type {array}
       */
      fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      /**
       * The font style
       * @type {string}
       */
      fontStyle: PropTypes.string,
    })
  ),
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

export { typography };
