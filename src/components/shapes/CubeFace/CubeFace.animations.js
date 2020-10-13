/**
 * Imports other components and hooks
 */
import { findInArrays } from "../../helpers";

/**
 * Defines the fold animations for the cube faces.
 */
const fold = (props) => {
  return {
    front: {
      name: "FoldFront",
      duration: "1s",
      delay: "0s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `translateZ(calc(${props.width} * 2))`,
        },
      },
    },

    back: {
      name: "FoldBack",
      duration: "1s",
      delay: "0s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `translateZ(calc(-${props.width} * 2))`,
        },
      },
    },

    left: {
      name: "FoldLeft",
      duration: "1s",
      delay: "1s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `rotateY(90deg) translateZ(calc(${props.width} * 2))`,
        },
      },
    },

    right: {
      name: "FoldRight",
      duration: "1s",
      delay: "1s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `rotateY(-90deg) translateZ(calc(${props.width} * 2))`,
        },
      },
    },

    top: {
      name: "FoldTop",
      duration: "1s",
      delay: "2s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `rotateX(90deg) translateZ(calc(${props.width} * 2))`,
        },
      },
    },

    bottom: {
      name: "FoldBottom",
      duration: "1s",
      delay: "2s",
      fillMode: "forwards",
      keyframes: {
        to: {
          transform: `rotateX(-90deg) translateZ(calc(${props.width} * 2))`,
        },
      },
    },
  };
};

/**
 * Returns the available animation preset names.
 * @type {Array}
 */
const animationPresetNames = ["fold"];

/**
 * Returns an animation for a cube face.
 * The animation comes from a preset.
 */
const animation = (props) => {
  const { faceName, animationPresetName } = props;

  const presets = [fold];
  const preset = findInArrays({
    targetArray: presets,
    anotherArray: animationPresetNames,
    identifier: animationPresetName,
  });

  return preset ? preset(props)[faceName] : null;
};

export default animation;
export { animationPresetNames };
