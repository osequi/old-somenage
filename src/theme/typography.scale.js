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
  ModularScaleDefaultProps,
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
  const { value, settings, typography } = props;
  const { scale } = typography;
  const { preset } = scale;

  const scaleFunction = findInArrays(
    [scaleLinear, scaleModular],
    scalePresets,
    preset
  );

  /**
   * The settings for modular scale comes from the default props
   */
  const settings2 = preset === "linear" ? settings : ModularScaleDefaultProps;

  return scaleFunction(value, settings2, typography);
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
