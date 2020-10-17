import PropTypes from "prop-types";

/**
 * Trying to set up the perfect grid / typographic scale.
 * - On FF the linear scale works perfectly.
 * - But it gets broken in Chrome on certain, unknown h elements.
 * - It turns out FF and Chrome compute differently the layout / line height.
 * - In FF a h1 is 700×179.533 in Chrome the same h1 is 700x178.
 * - No matter if the font size is set in px or em.
 * - The same is true also on the https://web.dev/ site on the first h1.
 *
 * It seems this problem is incurable for now.
 */

/**
 * Imports other components and hooks.
 */
import {
  scaleLinear,
  scaleLinearMargin,
  LinearScalePropTypes,
  LinearScaleDefaultProps,
} from "./typography.scale.linear";

import {
  scaleModular,
  scaleModularMargin,
  ModularScalePropTypes,
  ModularScaleDefaultProps,
} from "./typography.scale.modular";

import { findInArrays } from "../../../hooks";

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
 * Collects the margin functions from the presets
 * @type {Array}
 */
const scaleMargins = [scaleLinearMargin, scaleModularMargin];

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
  /**
   * The settings for the preset.
   * @type {object}
   */
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
 * Returns a margin style object for a scale.
 * Margins realign elements to the grid.
 * When elements have different font size / line height they break the grid.
 * This helper adds the necessary margin to fit the element to the grid again.
 */
const scaleMargin = (props, theme) => {
  const { typography } = theme;
  const { scale } = typography;
  const { preset } = scale;

  const marginFunction = findInArrays(scaleMargins, scalePresets, preset);

  return marginFunction ? marginFunction(props, theme) : null;
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

  return scaleFunction ? scaleFunction(value, settings2, typography) : null;
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
  scaleMargin,
};
