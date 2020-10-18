import React from "react";
import PropTypes from "prop-types";
import { cx, keyframes } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Defines the prop types.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
 */
const propTypes = {
  animation: PropTypes.shape({
    duration: PropTypes.string,
    timingFunction: PropTypes.string,
    delay: PropTypes.string,
    iterationCount: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    keyframes: PropTypes.object,
  }),
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  animation: {},
  children: null,
};

/**
 * Defines the keyframes.
 */
const keyframe = (props) => keyframes({ ...props.keyframes });

/**
 * Defines the animation.
 */
const animationStyle = (props) => {
  return {
    animationName: `${keyframe(props)}`,
    animationDuration: props.duration,
    animationTimingFunction: props.timingFunction,
    animationDelay: props.delay,
    animationIterationCount: props.iterationCount,
    animationDirection: props.direction,
    animationFillMode: props.fillMode,
    animationPlayState: props.playState,
  };
};

/**
 * Displays content inside an animation container.
 * @see CssAnimation.md
 */
const CssAnimation = (props) => {
  const { animation, children } = props;
  const { animationStyleKlass } = useStyles([animationStyle], animation);

  return (
    <div className={cx("CssAnimation", animationStyleKlass)}>{children}</div>
  );
};

CssAnimation.propTypes = propTypes;
CssAnimation.defaultProps = defaultProps;

export default CssAnimation;
export {
  propTypes as CssAnimationPropTypes,
  defaultProps as CssAnimationDefaultProps,
};
