import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports styles.
 */
import { borderStyles, animationStyles, keyframes } from ".";

/**
 * Defines the side names.
 */
const sideNames = ["front", "back", "left", "right", "top", "bottom"];

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * The unique id of the side.
   * The sides are part of a list so they need a unique `key`.
   * @type {string}
   */
  id: PropTypes.string,
  /**
   * The name of the side.
   * @type {string}
   */
  name: PropTypes.oneOf(sideNames),
  /**
   * The content of the side.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The width of the side.
   * Optional, it is set to 100%
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the side.
   * Optional, it is set to 100%
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The opacity of the sides.
   * It should be less than 1 to make sides visible.
   * @type {string}
   */
  opacity: PropTypes.number,
  /**
   * The parent (cube, container) props.
   * Needed for borders, animations, etc.
   * @type {object}
   */
  parent: PropTypes.any,
  /**
   * The click handler.
   * @type {func}
   */
  onClick: PropTypes.func,
  /**
   * The name of the side which is currently facing the front.
   * @type {string}
   */
  frontFacingSide: PropTypes.string,
  /**
   * The className of the element.
   * It's optional to set.
   * Serves the technical purpose of style chaining.
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "front",
  name: "front",
  children: null,
  width: "100%",
  height: "100%",
  opacity: 0.9,
  parent: null,
  onClick: () => {
    console.log("Side clicked");
  },
  frontFacingSide: "front",
  className: "Side",
};

/**
 * Defines the styles.
 */
const useStyles = makeStyles((theme) => ({
  side: (props) => ({
    position: "absolute",
    width: props.width,
    height: props.height,
    opacity: props.opacity,

    ["&:hover"]: {
      background: "red",
    },
  }),

  front: (props) => ({
    transform: `translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "front" }),
  }),

  frontAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "front" }),
  },

  back: (props) => ({
    transform: `translateZ(calc(-${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "back" }),
  }),

  backAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "back" }),
  },

  left: (props) => ({
    transform: `rotateY(90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "left" }),
  }),

  leftAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "left" }),
  },

  right: (props) => ({
    transform: `rotateY(-90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "right" }),
  }),

  rightAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "right" }),
  },

  top: (props) => ({
    transform: `rotateX(90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "top" }),
  }),

  topAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "top" }),
  },

  bottom: (props) => ({
    transform: `rotateX(-90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, name: "bottom" }),
  }),

  bottomAnimation: {
    ...animationStyles({ ...theme.custom.animation1, name: "bottom" }),
  },

  ...keyframes(theme.custom.parent),
}));

/**
 * Displays a side of the cube.
 */
const Side = (props) => {
  const { name, parent, onClick, frontFacingSide, className, children } = props;

  /**
   * Animations can't handle `props` so we'll hack with `theme`
   */
  const theme = useTheme();
  theme.custom.animation1 = parent.animations[0];
  theme.custom.parent = parent;

  const {
    side,
    front,
    back,
    left,
    right,
    top,
    bottom,
    frontAnimation,
    backAnimation,
    leftAnimation,
    rightAnimation,
    topAnimation,
    bottomAnimation,
  } = useStyles(props);

  const klasses = [front, back, left, right, top, bottom];
  const animations = [
    frontAnimation,
    backAnimation,
    leftAnimation,
    rightAnimation,
    topAnimation,
    bottomAnimation,
  ];
  const index = sideNames.findIndex((item) => item === name);
  const klass = klasses[index];
  const animation = animations[index];

  return (
    <div
      className={clsx(className, side, klass, animation)}
      onClick={() => onClick(props)}
    >
      {children}
    </div>
  );
};

Side.propTypes = propTypes;
Side.defaultProps = defaultProps;

export default Side;
export {
  propTypes as SidePropTypes,
  defaultProps as SideDefaultProps,
  sideNames,
};
