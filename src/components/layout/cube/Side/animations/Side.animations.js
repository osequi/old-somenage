import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import {
  CssAnimationsPropTypes,
  CssAnimationsDefaultProps,
} from "../../../../animations/CssAnimations";

/**
 * Imports animations.
 */
import { none } from "./Side.preset.none";
import { fold, foldKeyframes } from "./Side.preset.fold";

/**
 * Imports helpers
 */
import { findStyles } from "../../../../helpers";

/**
 * Defines a set of presets.
 * @type {Array}
 */
const animationPresets = ["none", "fold"];

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
   * The entry of the preset.
   * A preset can contain multiple entries.
   * @type {string}
   */
  entry: PropTypes.string,
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
  preset: "fold",
  entry: null,
  animation: { duration: "1s", delay: "0s", fillMode: "forwards" },
};

/**
 * Returns a set of animations based on a preset.
 */
const animationStyles = (props) => {
  const { preset, entry } = props;

  const presets = [none, fold];

  const styles = findStyles({
    presets: presets,
    presetNames: animationPresets,
    preset: preset,
    props2: props,
  });

  return styles ? styles[entry] : null;
};

export {
  propTypes as AnimationPropTypes,
  defaultProps as AnimationDefaultProps,
  animationStyles,
  foldKeyframes as animationKeyframes,
};