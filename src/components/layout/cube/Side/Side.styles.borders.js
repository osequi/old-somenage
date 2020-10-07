import PropTypes from "prop-types";

/**
 * Defines a set of presets to draw borders.
 * @type {Array}
 */
const borderPresets = ["normalized"];

/**
 * Defines the border prop types.
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
  preset: "normalized",
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
      borderBottomWidth: props.width * 3,
    },

    right: {
      borderTop: props.border,
      borderBottom: props.border,
    },

    top: {},
    bottom: {},
  };
};

const borderStyles = (props) => {
  const { preset, width, unit, style, color, name } = props;

  const border = `${width}${unit} ${style} ${color}`;

  const klasses = [normalized];
  const index = borderPresets.findIndex((item) => item === preset);
  const klass = klasses[index];

  const styles = klass({ border: border, width: width });
  return styles[name];
};

export {
  propTypes as BorderPropTypes,
  defaultProps as BorderDefaultProps,
  borderStyles,
};
