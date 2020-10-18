import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import { colors } from "./colors";

/**
 * Defines the prop types
 * @type {Object}
 */
const colorPairPropTypes = {
  preset: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

const propTypes = PropTypes.arrayOf(PropTypes.shape(colorPairPropTypes));

/**
 * Defines the presets
 * @type {Array}
 */
const defaultProps = [
  {
    normal: {
      color: colors.dark,
      backgroundColor: colors.light,
    },
  },
  {
    inverted: {
      color: colors.light,
      backgroundColor: colors.dark,
    },
  },
  {
    highlighted: {
      color: colors.highlight,
    },
  },
  {
    highlightedAsBackground: {
      backgroundColor: colors.highlight,
    },
  },
  { shaded: { color: colors.shade } },
  { shadedAsBackground: { backgroundColor: colors.shade } },
];

export { propTypes as ColorPairsPropTypes, defaultProps as colorPairs };
