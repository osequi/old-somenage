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
 * @see CssAnimation.md
 */
const CssAnimation = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("CssAnimation", containerKlass)}>CssAnimation</div>;
};

CssAnimation.propTypes = propTypes;
CssAnimation.defaultProps = defaultProps;

export default CssAnimation;
export {
  propTypes as CssAnimationPropTypes,
  defaultProps as CssAnimationDefaultProps,
};
