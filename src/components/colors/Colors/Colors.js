import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Colors.md
 */
const Colors = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Colors", containerKlass)}>Colors</div>;
};

Colors.propTypes = propTypes;
Colors.defaultProps = defaultProps;

export default Colors;
export { propTypes as ColorsPropTypes, defaultProps as ColorsDefaultProps };
