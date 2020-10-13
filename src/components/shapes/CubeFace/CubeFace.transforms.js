/**
 * Imports other components and hooks
 */
import { findStyles } from "../../helpers";

/**
 * Defines the default transforms for the cube faces.
 */
const def = (props) => {
  return {
    front: {
      transform: `translateZ(calc(${props.width} * 2))`,
    },

    back: {
      transform: `translateZ(calc(-${props.width} * 2))`,
    },

    left: {
      transform: `rotateY(90deg) translateZ(calc(${props.width} * 2))`,
    },

    right: {
      transform: `rotateY(-90deg) translateZ(calc(${props.width} * 2))`,
    },

    top: {
      transform: `rotateX(90deg) translateZ(calc(${props.width} * 2))`,
    },

    bottom: {
      transform: `rotateX(-90deg) translateZ(calc(${props.width} * 2))`,
    },
  };
};

/**
 * Returns the available transform preset names.
 * @type {Array}
 */
const transformPresetNames = ["def"];

/**
 * Returns a transform for a cube face.
 * The transform comes from a preset.
 */
const transform = (props) => {
  const { faceName, transformPresetName } = props;

  const presets = [def];
  const preset = findStyles({
    presets: presets,
    presetNames: transformPresetNames,
    preset: transformPresetName,
    props2: props,
  });

  return preset ? preset[faceName] : null;
};

export default transform;
export { transformPresetNames };
