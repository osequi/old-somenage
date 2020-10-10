import PropTypes from "prop-types";

/**
 * Imports borders.
 */
import { noBorders } from "./Side.preset.noBorders";
import { allBorders } from "./Side.preset.allBorders";
import { dashedInTheBackground } from "./Side.preset.dashedInTheBackground";
import { normalized } from "./Side.preset.normalized";

/**
 * Imports helpers
 */
import { findStyles } from "../../../../helpers";

/**
 * Defines a set of presets to draw borders.
 * @type {Array}
 */
const borderPresets = [
  "noBorders",
  "allBorders",
  "dashedInTheBackground",
  "normalized",
];

/**
 * Defines the prop types.
 * @type {object}
 */
const propTypes = PropTypes.shape({
  /**
   * The name of the preset.
   * @type {string}
   */
  preset: PropTypes.oneOf(borderPresets),
  /**
   * The width of the border. Unitless.
   * @type {number}
   */
  width: PropTypes.number,
  /**
   * The unit of the border width.
   * @type {string}
   */
  unit: PropTypes.string,
  /**
   * The style of the border.
   * @type {string}
   */
  style: PropTypes.string,
  /**
   * The border color.
   * @type {string}
   */
  color: PropTypes.string,
});

/**
 * Defines the default props.
 * @type {Object}
 */
const defaultProps = {
  preset: "allBorders",
  width: 1,
  unit: "px",
  style: "solid",
  color: "",
};

/**
 * Returns a set of border styles based on a preset.
 */
const borderStyles = (props) => {
  const { preset, width, unit, style, color, entry } = props;

  const border = `${width}${unit} ${style} ${color}`;

  const presets = [noBorders, allBorders, dashedInTheBackground, normalized];

  const styles = findStyles({
    presets: presets,
    presetNames: borderPresets,
    preset: preset,
    props2: { ...props, border: border },
  });

  return styles ? styles[entry] : null;
};

export {
  propTypes as BorderPropTypes,
  defaultProps as BorderDefaultProps,
  borderStyles,
};
