import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components, hooks, helpers.
 */
import Cell, { CellPropTypes, CellDefaultProps } from "../../Cell";
import { borderStyles } from "./borders/Side.borders";

import {
  animationStyles,
  animationKeyframes,
} from "./animations/Side.animations";

import { findInArrays } from "../../../helpers";

/**
 * Defines the side names.
 */
const sideNames = ["front", "back", "left", "right", "top", "bottom"];

/**
 * Defines the prop types.
 */
const propTypes = {
  ...CellPropTypes,
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
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...CellDefaultProps,
  className: "Side",
  width: "100%",
  height: "100%",
  opacity: 0.9,
  parent: null,
  onClick: () => {
    console.log("Side clicked");
  },
  frontFacingSide: "front",
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
    //transform: `translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "front" }),
  }),

  frontAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "front" }),
  },

  back: (props) => ({
    //transform: `translateZ(calc(-${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "back" }),
  }),

  backAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "back" }),
  },

  left: (props) => ({
    //transform: `rotateY(90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "left" }),
  }),

  leftAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "left" }),
  },

  right: (props) => ({
    //transform: `rotateY(-90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "right" }),
  }),

  rightAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "right" }),
  },

  top: (props) => ({
    //transform: `rotateX(90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "top" }),
  }),

  topAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "top" }),
  },

  bottom: (props) => ({
    //transform: `rotateX(-90deg) translateZ(calc(${props.parent.width} / 2))`,
    ...borderStyles({ ...props.parent.borders, entry: "bottom" }),
  }),

  bottomAnimation: {
    ...animationStyles({ ...theme.custom.animation1, entry: "bottom" }),
  },

  ...animationKeyframes(theme.custom.props),
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
  theme.custom.props = props;

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

  const klass = findInArrays({
    targetArray: klasses,
    anotherArray: sideNames,
    identifier: name,
  });

  const animations = [
    frontAnimation,
    backAnimation,
    leftAnimation,
    rightAnimation,
    topAnimation,
    bottomAnimation,
  ];

  const animation = findInArrays({
    targetArray: animations,
    anotherArray: sideNames,
    identifier: name,
  });

  return (
    <Cell
      className={clsx(className, side, klass, animation)}
      onClick={() => onClick(props)}
    >
      {children}
    </Cell>
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
