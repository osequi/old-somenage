import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

// NOTE: Only the propTypes are useful from this component. See why below.

/**
 * Defines the prop types.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
 */
const propTypes = {
  animation: PropTypes.shape({
    name: PropTypes.string,
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
 * Defines the default props
 */
const defaultProps = {
  animation: {},
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    // NOTE: Can't get this to work
    animationName: props.name,
    animationDuration: props.duration,
    animationTimingFunction: props.timingFunction,
    animationDelay: props.delay,
    animationIterationCount: props.iterationCount,
    animationDirection: props.direction,
    animationFillMode: props.fillMode,
    animationPlayState: props.playState,
  }),

  // NOTE: Don't know if this works or not
  [`@keyframes ${theme.custom.keyframeName}`]: {
    ...theme.custom.keyframes,
  },
}));

/**
 * Displays the content inside an animation container.
 * This doesn't works due to Material UIs strange CSS animations / keyframes support.
 */
const CssAnimations = (props) => {
  const { animation, children } = props;
  const { name, keyframes } = animation;

  const theme = useTheme();
  theme.custom.name = name;
  theme.custom.keyframes = keyframes;
  theme.custom.keyframeName = name.substring(1);

  const { container } = useStyles(animation);

  return <div className={clsx("CssAnimations", container)}>{children}</div>;
};

CssAnimations.propTypes = propTypes;
CssAnimations.defaultProps = defaultProps;

export default CssAnimations;
export {
  propTypes as CssAnimationsPropTypes,
  defaultProps as CssAnimationsDefaultProps,
};
