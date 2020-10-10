import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
 */
const propTypes = {
  name: PropTypes.string,
  duration: PropTypes.string,
  timingFunction: PropTypes.string,
  delay: PropTypes.string,
  iterationCount: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: null,
  duration: null,
  timingFunction: null,
  delay: null,
  iterationCount: null,
  direction: null,
  fillMode: null,
  playState: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: (props) => ({
    animationName: props.name,
    animationDuration: props.duration,
    animationTimingFunction: props.timingFunction,
    animationDelay: props.delay,
    animationIterationCount: props.iterationCount,
    animationDirection: props.direction,
    animationFillMode: props.fillMode,
    animationPlayState: props.playState,
  }),
}));

/**
 * Displays the content inside an animation container.
 */
const CssAnimations = (props) => {
  const { children } = props;
  const { container } = useStyles(props);

  return <div className={clsx("CssAnimations", container)}>{children}</div>;
};

CssAnimations.propTypes = propTypes;
CssAnimations.defaultProps = defaultProps;

export default CssAnimations;
export {
  propTypes as CssAnimationsPropTypes,
  defaultProps as CssAnimationsDefaultProps,
};
