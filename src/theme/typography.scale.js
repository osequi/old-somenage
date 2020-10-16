import PropTypes from "prop-types";
import ms from "modularscale-js";

/**
 * Imports other components and hooks.
 */
import { findInArrays } from "../hooks";

/**
 * Defines the presets.
 * @type {Array}
 */
const scalePresets = ["linear", "modular"];

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
};

/**
 * Defines the deafult props.
 * @type {Object}
 */
const defaultProps = {
  preset: "linear",
};

/**
 * Returns a value from the linear scale
 * @param  {number} size The size on the scale.
 * @return {number}      The value on the scale.
 * @example scale('linear', 2) => 3em (the value of the 0 scale is 1em)
 */
const scaleLinear = (value) => {
  return value + 1;
};

/**
 * Returns a value from the modular scale
 * @param  {number} size The size on the scale.
 * @return {number}      The value on the scale.
 * @example scale('modular', 2) => 1.77em (within the perfect fourth ratio)
 * @see https://www.modularscale.com/?1&em&1.333
 */
const scaleModular = (value) => {
  return ms(value);
};

/**
 * Returns a value from a scale.
 */
const scaleValue = (preset, value) => {
  const scaleFunction = findInArrays(
    [scaleLinear, scaleModular],
    scalePresets,
    preset
  );

  return scaleFunction(value);
};

/**
 * Resizes the element to a value on a scale.
 */
const scaleTo = (preset, value) => {
  return { fontSize: `${scaleValue(preset, value)}em` };
};

export {
  propTypes as ScalePropTypes,
  defaultProps as ScaleDefaultProps,
  scaleValue,
  scaleTo,
};
