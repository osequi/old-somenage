import { findInArrays } from ".";

/**
 * Find specific styles based on presets and preset names.
 */
const findStyles = (props) => {
  const { presets, presetNames, preset, props2 } = props;

  const found = findInArrays({
    targetArray: presets,
    anotherArray: presetNames,
    identifier: preset,
  });

  return found ? found(props2) : null;
};

export default findStyles;
