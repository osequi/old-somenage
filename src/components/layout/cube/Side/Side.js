import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports styles.
 */
import { BorderPropTypes, BorderDefaultProps, borderStyles } from ".";

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
   * The borders of the side.
   * @type {object}
   */
  borders: PropTypes.shape(BorderPropTypes),
  /**
   * The width and height of the container.
   * Needed for 3d transformations.
   * @type {object}
   */
  container: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  parents: PropTypes.any,
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
  borders: BorderDefaultProps,
  container: {
    width: "200px",
    height: "200px",
  },
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
  }),

  front: (props) => ({
    transform: `translateZ(calc(${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "front" }),
  }),

  back: (props) => ({
    transform: `translateZ(calc(-${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "back" }),
  }),

  left: (props) => ({
    transform: `rotateY(90deg) translateZ(calc(${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "left" }),
  }),

  right: (props) => ({
    transform: `rotateY(-90deg) translateZ(calc(${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "right" }),
  }),

  top: (props) => ({
    transform: `rotateX(90deg) translateZ(calc(${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "top" }),
  }),

  bottom: (props) => ({
    transform: `rotateX(-90deg) translateZ(calc(${props.parents.width} / 2))`,
    ...borderStyles({ ...props.parents.borders, name: "bottom" }),
  }),
}));

/**
 * Displays a side of the cube.
 */
const Side = (props) => {
  const { name, className, children } = props;
  const { side, front, back, left, right, top, bottom } = useStyles(props);

  const klasses = [front, back, left, right, top, bottom];
  const index = sideNames.findIndex((item) => item === name);
  const klass = klasses[index];

  return (
    <div className={clsx(className, side, klass)}>
      <div className="Content">{children}</div>
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