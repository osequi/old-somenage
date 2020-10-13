/**
 * Imports other components and hooks
 */
import { findStyles } from "../../helpers";

/**
 * Draws no borders.
 */
const no = () => {
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
 * Draws all borders.
 */
const all = (props) => {
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
 * Draws dashed borders on the invisible sides.
 */
const dashedInTheBackground = (props) => {
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
 * Draws a set of normalized borders.
 * Overlapping borders are not displayed.
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
 * Returns the available border preset names.
 * @type {Array}
 */
const borderPresetNames = ["no", "all", "dashedInTheBackground", "normalized"];

/**
 * Returns a border for a cube face.
 * The border comes from a preset.
 */
const border = (props) => {
  const { faceName, borderPresetName } = props;

  const presets = [no, all, dashedInTheBackground, normalized];
  const preset = findStyles({
    presets: presets,
    presetNames: borderPresetNames,
    preset: borderPresetName,
    props2: props,
  });

  return preset ? preset[faceName] : null;
};

export default border;
export { borderPresetNames };
