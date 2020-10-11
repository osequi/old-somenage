import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Side, {
  SidePropTypes,
  SideDefaultProps,
  sideNames,
  BorderPropTypes,
  BorderDefaultProps,
  AnimationPropTypes,
  AnimationDefaultProps,
} from "../Side";

import {
  AnimationPropTypes as CubeAnimationPropTypes,
  AnimationDefaultProps as CubeAnimationDefaultProps,
  animationStyles,
  animationKeyframes,
} from "./animations/Cube.animations";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The container managing the cube's perspective / 3d settings.
   * @type {object}
   */
  container: PropTypes.shape({
    /**
     * The width of the container.
     * @type {string}
     */
    width: PropTypes.string,
    /**
     * The height of the container.
     * @type {string}
     */
    height: PropTypes.height,
    /**
     * Turns on / off the perspective.
     * When turned off the cube becomes a square.
     * @type {Boolean}
     */
    isPerspectiveOn: PropTypes.bool,
    /**
     * The distance from the z-axis.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
     * @type {string}
     */
    perspective: PropTypes.string,
    /**
     * The position at which the viewer is looking.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
     * @type {string}
     */
    perspectiveOrigin: PropTypes.string,
    /**
     * The className of the element.
     * It's optional to set.
     * Serves the technical purpose of style chaining.
     * @type {string}
     */
    className: PropTypes.string,
  }),
  /**
   * The width of the cube.
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the cube.
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The sides of the cube.
   * @type {array}
   */
  sides: PropTypes.arrayOf(PropTypes.shape(SidePropTypes)),
  /**
   * The borders of the cube.
   * Preferred to use one of the presets.
   * @type {object}
   */
  borders: PropTypes.shape(BorderPropTypes),
  /**
   * The animations attached to the cube.
   * @type {array}
   */
  animations: PropTypes.arrayOf(PropTypes.shape(AnimationPropTypes)),
  /**
   * The rotation of the cube.
   * Preferred to use one of the presets.
   * @type {object}
   */
  transformStyle: PropTypes.oneOf(["preserve-3d", "flat"]),
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
  container: {
    width: "400px",
    height: "400px",
    isPerspectiveOn: true,
    perspective: "800px",
    perspectiveOrigin: "top right",
    className: "CubeContainer",
  },
  width: "200px",
  height: "200px",
  sides: Array(6)
    .fill(SideDefaultProps)
    .map((item, index) => {
      return { ...item, id: shortid.generate(), name: sideNames[index] };
    }),
  borders: BorderDefaultProps,
  animations: [AnimationDefaultProps],
  transformStyle: "preserve-3d",
  className: "Cube",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    width: props.container.width,
    height: props.container.height,
    perspective: props.container.isPerspectiveOn
      ? props.container.perspective
      : "none",
    perspectiveOrigin: props.container.perspectiveOrigin,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  cube: (props) => ({
    width: props.width,
    height: props.height,
    transformStyle: props.transformStyle,
    position: "relative",
  }),

  cubeAnimation: {
    ...animationStyles(theme.custom.animation),
  },

  ...animationKeyframes(theme.custom.props),
}));

/**
 * Displays a 3D cube.
 */
const Cube = (props) => {
  const { container, sides, borders, animations, className } = props;
  const { className: containerClassName } = container;

  /**
   * Animations can't handle `props` so we'll hack with `theme`
   */
  const theme = useTheme();
  theme.custom.animation = { preset: "rotate", duration: "20s" };
  theme.custom.props = props;

  const {
    cube: cubeKlass,
    container: containerKlass,
    cubeAnimation,
  } = useStyles(props);

  const [frontFacingSide, setFrontFacingSide] = useState("front");
  console.log("frontFacingSide:", frontFacingSide);

  const clickHandler = (props) => {
    const { name } = props;
    setFrontFacingSide(name);
  };

  const sidesList =
    sides &&
    sides.map((item) => {
      const { id } = item;
      return (
        <Side
          key={id}
          {...item}
          parent={props}
          onClick={clickHandler}
          frontFacingSide={frontFacingSide}
        />
      );
    });

  return (
    <div className={clsx(containerClassName, containerKlass)}>
      <div className={clsx(className, cubeKlass, cubeAnimation)}>
        {sidesList}
      </div>
    </div>
  );
};

Cube.propTypes = propTypes;
Cube.defaultProps = defaultProps;

export default Cube;
export { propTypes as CubePropTypes, defaultProps as CubeDefaultProps };
