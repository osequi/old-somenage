import PropTypes from "prop-types";

/**
 * Defines a set of presets to draw borders.
 * @type {Array}
 */
const borderPresets = [
  "normalized",
  "noBorders",
  "allBorders",
  "dottedInTheBackground",
];

/**
 * Defines the prop types.
 * @type {object}
 */
const propTypes = PropTypes.shape({
  /**
   * The name of the preset.
   * @type {string}
   */
  preset: PropTypes.oneOf(borderPresets),
  /**
   * The width of the border. Unitless.
   * @type {number}
   */
  width: PropTypes.number,
  /**
   * The unit of the border width.
   * @type {string}
   */
  unit: PropTypes.string,
  /**
   * The style of the border.
   * @type {string}
   */
  style: PropTypes.string,
  /**
   * The border color.
   * @type {string}
   */
  color: PropTypes.string,
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "allBorders",
  width: 1,
  unit: "px",
  style: "solid",
  color: "",
};

/**
 * Draws a set of normalized borders.
 * Overlapping borders are not displayed.
 * @type {Object}
 */
const normalized = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
    },

    left: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomWidth: `${props.width * 3}${props.unit}`,
    },

    right: {
      borderTop: props.border,
      borderBottom: props.border,
    },

    top: {},
    bottom: {},
  };
};

/**
 * Draws no borders
 */
const noBorders = () => {
  return {
    front: {},
    back: {},
    left: {},
    right: {},
    top: {},
    bottom: {},
  };
};

/**
 * Draws all borders
 */
const allBorders = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
    },

    left: {
      border: props.border,
    },

    right: {
      border: props.border,
    },

    top: {
      border: props.border,
    },

    bottom: {
      border: props.border,
    },
  };
};

/**
 * Draws dotted / dashed borders on the invisible sides.
 */
const dottedInTheBackground = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
      borderLeftStyle: "dashed",
      borderBottomStyle: "dashed",
    },

    left: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomWidth: `${props.width * 2}${props.unit}`,
    },

    right: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomStyle: "dashed",
    },

    top: {},
    bottom: {},
  };
};

/**
 * Returns a set of border styles based on a preset.
 */
const borderStyles = (props) => {
  const { preset, width, unit, style, color, name } = props;

  const border = `${width}${unit} ${style} ${color}`;

  const klasses = [normalized, noBorders, allBorders, dottedInTheBackground];
  const index = borderPresets.findIndex((item) => item === preset);

  if (index === -1) return null;

  const klass = klasses[index];
  const styles = klass({ ...props, border: border });

  return styles[name];
};

export {
  propTypes as BorderPropTypes,
  defaultProps as BorderDefaultProps,
  borderStyles,
};
