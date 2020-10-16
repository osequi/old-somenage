import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */
import {
  scaleLinear,
  LinearScalePropTypes,
  LinearScaleDefaultProps,
} from "./typography.scale.linear";
import {
  scaleModular,
  ModularScalePropTypes,
} from "./typography.scale.modular";
import { findInArrays } from "../hooks";

/**
 * Defines the presets.
 * @type {Array}
 */
const scalePresets = ["linear", "modular"];

/**
 * Defines the settings for the presets.
 * @type {Array}
 */
const scaleSettings = [LinearScalePropTypes, ModularScalePropTypes];

/**
 * Defines the prop types.
 * @type {Object}
 */
const propTypes = {
  /**
   * The preset name.
   * @type {string}
   */
  preset: PropTypes.oneOf(scalePresets),
  settings: PropTypes.oneOf(scaleSettings),
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  preset: "linear",
  settings: LinearScaleDefaultProps,
};

/**
 * Returns a value from a scale.
 */
const scaleValue = (props) => {
  const { value, preset, settings } = props;

  const scaleFunction = findInArrays(
    [scaleLinear, scaleModular],
    scalePresets,
    preset
  );

  return scaleFunction(value, settings);
};

/**
 * Resizes the element to a value on a scale.
 */
const scaleTo = (props) => {
  return { fontSize: `${scaleValue(props)}em` };
};

export {
  propTypes as ScalePropTypes,
  defaultProps as ScaleDefaultProps,
  scaleValue,
  scaleTo,
};
