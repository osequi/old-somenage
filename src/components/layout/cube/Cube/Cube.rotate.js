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
  /**
   * The animation settings.
   * @type {object}
   */
  animation: PropTypes.shape({
    duration: PropTypes.string,
  }),
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "default",
  animation: {
    duration: "20s",
  },
};

/**
 * Defines no rotation.
 */
const noRotation = () => {
  return {
    animation: "",
  };
};

/**
 * Defines the default rotation.
 * // NOTE: `$defaultRotation ...` cannot contain any props inside ...
 */
const defaultRotation = (props) => {
  return {
    animation: `$defaultRotation infinite linear`,
    animationDuration: (props = props.duration),
  };
};

/**
 * Defines the keyframes animations for the rotations
 */
const rotateKeyframes = (props) => {
  return {
    "@keyframes defaultRotation": {
      "0%": { transform: "rotateY(0deg) rotateX(720deg) rotateZ(0deg)" },
      "100%": { transform: "rotateY(360deg) rotateX(0deg) rotateZ(360deg)" },
    },
  };
};

/**
 * Returns a rotation animation based on a preset.
 */
const rotate = (props) => {
  const { preset, animation } = props;

  const rotations = [noRotation, defaultRotation];
  const index = rotationPresets.findIndex((item) => item === preset);

  if (index === -1) return null;

  const rotation = rotations[index];
  const styles = rotation(animation);

  return styles;
};

export {
  propTypes as RotatePropTypes,
  defaultProps as RotateDefaultProps,
  rotate,
  rotateKeyframes,
};
