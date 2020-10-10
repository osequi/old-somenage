import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import {
  CssAnimationsPropTypes,
  CssAnimationsDefaultProps,
} from "../../../../animations/CssAnimations";

/**
 * Imports presets.
 */
import { rotate, rotateKeyframes } from "./Cube.preset.rotate";
import { noAnimation } from "./Cube.preset.none";

/**
 * Imports helpers.
 */
import { findStyles } from "../../../../helpers";

/**
 * Defines a set of presets.
 * @type {Array}
 */
const animationPresets = ["none", "rotate"];

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
   * The animation settings.
   * @type {object}
   */
  animation: PropTypes.shape(CssAnimationsPropTypes),
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "rotate",
  animation: {
    duration: "20s",
  },
};

/**
 * Returns an animation based on a preset.
 */
const animationStyles = (props) => {
  const { preset } = props;

  const presets = [noAnimation, rotate];

  const styles = findStyles({
    presets: presets,
    presetNames: animationPresets,
    preset: preset,
    props2: props,
  });

  return styles;
};

export {
  propTypes as AnimationPropTypes,
  defaultProps as AnimationDefaultProps,
  animationStyles,
  rotateKeyframes as animationKeyframes,
};
