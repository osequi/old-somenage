import PropTypes from "prop-types";

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
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
  /**
   * A set of helper functions.
   * @type {[type]}
   */
  helpers: PropTypes.object,
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
 * Returns an Emotion friendly media query value for a breakpoint name.
 * @param  {string} name The breakpoint name.
 * @return {string}      A media query value.
 * @example breakpointQueryValue(tablet) => 'min-wdith: 1024px'
 * @see https://github.com/emotion-js/emotion/issues/490
 */
const breakpointQueryValue = (name) => {
  const bp = breakpoints.find((item) => item.name === name);
  return bp?.value ? `min-width: ${bp.value}px` : null;
};

/**
 * Returns an Emotion friendly media query for a breakpoint name.
 * @param  {string} name The breakpoint name.
 * @return {string}      A media query.
 * @example breakpoint(tablet) => '@media(min-width: 1024px)'
 */
const breakpoint = (name) => {
  const query = breakpointQueryValue(name);
  return query ? `@media(${query})` : null;
};

/**
 * Defines the helpers.
 * @type {Object}
 */
const helpers = {
  breakpointQueryValue: (name) => breakpointQueryValue(name),
  breakpoint: (name) => breakpoint(name),
};

/**
 * Merges helpers with the settings.
 */
const responsiveness = {
  breakpoints: breakpoints,
  helpers: helpers,
};

export { responsiveness };
