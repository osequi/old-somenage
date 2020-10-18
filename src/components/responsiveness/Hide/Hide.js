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
 * @see Hide.md
 */
const Hide = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Hide", containerKlass)}>Hide</div>;
};

Hide.propTypes = propTypes;
Hide.defaultProps = defaultProps;

export default Hide;
export { propTypes as HidePropTypes, defaultProps as HideDefaultProps };
