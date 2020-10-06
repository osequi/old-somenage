import PropTypes from "prop-types";

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

export { breakpoint, breakpoints };
