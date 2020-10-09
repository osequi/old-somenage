import PropTypes from "prop-types";

/**
 * Defines a set of presets for rotations.
 * @type {Array}
 */
const rotationPresets = ["none", "default"];

/**
 * Defines the prop types.
 * @type {object}
 */
const propTypes = PropTypes.shape({
  /**
   * The name of the preset.
   * @type {string}
   */
  preset: PropTypes.oneOf(rotationPresets),
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "default",
};

/**
 * Defines no rotation.
 */
const noRotation = () => {};

/**
 * Defines the default rotation.
 */
const defaultRotation = (props) => {
  return {
    animation: `$defaultRotation 10s infinite linear`,
  };
};

/**
 * Defines the keyframes animations for the rotations
 */
const rotateKeyframes = {
  "@keyframes defaultRotation": {
    "0%": { transform: "rotateY(0deg) rotateX(720deg) rotateZ(0deg)" },
    "100%": { transform: "rotateY(360deg) rotateX(0deg) rotateZ(360deg)" },
  },
};

/**
 * Returns a rotation animation based on a preset.
 */
const rotate = (props) => {
  const { preset } = props;

  const rotations = [noRotation, defaultRotation];
  const index = rotationPresets.findIndex((item) => item === preset);
  if (index === -1) return null;

  const rotation = rotations[index];
  const styles = rotation(props);

  return styles;
};

export {
  propTypes as RotatePropTypes,
  defaultProps as RotateDefaultProps,
  rotate,
  rotateKeyframes,
};
