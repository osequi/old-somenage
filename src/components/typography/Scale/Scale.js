import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import ms from "modularscale-js";

/**
 * Defines the prop types.
 * Uses the Modular Scale.
 * @see https://github.com/modularscale/modularscale-js
 */
const propTypes = {
  /**
   * The scale config object
   * @type {object}
   */
  config: PropTypes.shape({
    base: PropTypes.arrayOf(PropTypes.number),
    ratio: PropTypes.number,
  }),
  /**
   * The scale value.
   * Ex.: 0 = 1.333, etc
   * @type {number}
   */
  scale: PropTypes.numer,
};

/**
 * Defines the default props
 */
const defaultProps = {
  config: { base: [1], ratio: 1.333 },
  scale: 0,
};

/**
 * Returns the style object to size a font `em` following to the Modular Scale.
 * @param  {number} number The modular scale value
 * @return {object}        The style object
 */
const scale = (number) => {
  return { fontSize: `${ms(number, defaultProps.config)}em` };
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: (props) => ({
    fontSize: `${ms(props.scale, props.config)}em`,
  }),
}));

/**
 * Displays children inside a scale container.
 * Don't use this component directly. Instead use `<Typography>`.
 */
const Scale = (props) => {
  const { children } = props;
  const { container } = useStyles(props);

  return <div className={clsx("Scale", container)}>{children}</div>;
};

Scale.propTypes = propTypes;
Scale.defaultProps = defaultProps;

export default Scale;
export {
  propTypes as ScalePropTypes,
  defaultProps as ScaleDefaultProps,
  scale,
};
