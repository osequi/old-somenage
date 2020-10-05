import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import {
  SetupPropTypes,
  SetupDefaultProps,
} from "../components/typography/Setup";
import {
  ScalePropTypes,
  ScaleDefaultProps,
} from "../components/typography/Scale";

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
};

/**
 * Defines the breakpoints prop types.
 * @type {Object}
 */
const breakpointPropTypes = {
  /**
   * Defines the breakpoints.
   * Example: [{mobile: '320'}]
   * @type {array}
   */
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The breakpoint name
       * @type {string}
       */
      name: PropTypes.oneOf(["mobile", "tablet", "laptop", "desktop"]),
      /**
       * The breakpoint value, unitless.
       * @type {number}
       */
      value: PropTypes.number,
    })
  ),
};

/**
 * Sets up breakpoints.
 */
const breakpoints = [
  {
    name: "mobile",
    value: "320",
  },
  {
    name: "tablet",
    value: "768",
  },
  {
    name: "laptop",
    value: "1024",
  },
  {
    name: "desktop",
    value: "1600",
  },
];

/**
 * Returns a media query for a breakpoint name.
 * @param  {string} name The breakpoint name.
 * @return {string}      A media query.
 */
const breakpoint = (name) => {
  const bp = breakpoints.find((item) => item.name === name);
  return bp?.value ? `(min-width: ${bp.value}px)` : null;
};

/**
 * Defines the theme.
 */
const theme = {
  typography: typography,
  breakpoints: breakpoints,
  breakpoint: (name) => {
    const query = breakpoint(name);
    return query ? `@media screen and ${query})` : null;
  },
};

export default theme;
