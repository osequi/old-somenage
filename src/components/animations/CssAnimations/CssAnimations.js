import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

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
 * Defines the default props.
 */
const defaultProps = {
  animation: {},
  children: null,
};

/**
 * Defines the animation.
 * Due to Material UIs strange behavior this can't be put inside `makeStyles`.
 */
const animation = (props) => {
  return {
    animationName: `$${props.name}`,
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
 * Defines the keyframes.
 * Due to Material UIs strange behavior this can't be put inside `makeStyles`.
 */
const keyframes = (props) => {
  return {
    [`@keyframes ${props.name}`]: {
      ...props.keyframes,
    },
  };
};

/**
 * Defines the styles.
 * Due to Material UIs strange behavior this is the only way creating a CSS keyframes animation.
 */
const useStyles = makeStyles((theme) => ({
  container: {
    ...animation(theme.custom.props.animation),
  },

  ...keyframes(theme.custom.props.animation),
}));

/**
 * Displays the content inside an animation container.
 */
const CssAnimations = (props) => {
  const { children } = props;

  /**
   * Due to Material UIs strange behavior this is the only way to pass props to `makeStyles`.
   */
  const theme = useTheme();
  theme.custom.props = props;

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
