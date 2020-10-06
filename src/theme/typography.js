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

export default typography;
