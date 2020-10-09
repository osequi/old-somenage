import PropTypes from "prop-types";

/**
 * Defines a set of presets to animate the cube sides.
 * @type {Array}
 */
const animationPresets = ["none", "unfold"];

/**
 * Defines the prop types.
 * @type {object}
 */
const propTypes = PropTypes.shape({
  /**
   * The name of the preset.
   * @type {string}
   */
  preset: PropTypes.oneOf(animationPresets),
  /**
   * The animation duration.
   * @type {string}
   */
  duration: PropTypes.string,
  /**
   * The animation delay.
   * @type {string}
   */
  delay: PropTypes.string,
  /**
   * The animation fill mode.
   * @type {string}
   */
  fillMode: PropTypes.string,
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "unfold",
  duration: "1s",
  delay: "0s",
  fillMode: "forwards",
};

/**
 * The 'none' animation
 */
const none = (props) => {
  return { front: {}, back: {}, left: {}, right: {}, top: {}, bottom: {} };
};

/**
 * The 'unfold' animation
 */
const unfold = (props) => {
  return {
    front: {
      animationName: `$Front`,
      animationDuration: "1s",
      animationDelay: "0s",
      animationFillMode: "forwards",
    },

    back: {
      animationName: `$Back`,
      animationDuration: "1s",
      animationDelay: "0s",
      animationFillMode: "forwards",
    },

    left: {},
    right: {},
    top: {},
    bottom: {},
  };
};

/**
 * The keyframes for the animations.
 * They have to be returned outside of the class which is using it.
 */
const keyframes = (props) => {
  return {
    "@keyframes Front": {
      to: {
        transform: `translateZ(100px)`,
      },
    },

    "@keyframes Back": {
      to: {
        transform: `translateZ(-100px)`,
      },
    },
  };
};

/**
 * Returns a set of animations based on a preset.
 */
const animationStyles = (props) => {
  const { preset, name } = props;

  const klasses = [none, unfold];
  const index = animationPresets.findIndex((item) => item === preset);

  if (index === -1) return null;

  const klass = klasses[index];
  const styles = klass(props);

  return styles[name];
};

export {
  propTypes as AnimationPropTypes,
  defaultProps as AnimationDefaultProps,
  animationStyles,
  keyframes,
};
