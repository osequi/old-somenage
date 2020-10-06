import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const names = ["front", "back", "left", "right", "top", "bottom"];

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.oneOf(names),
  content: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  opacity: PropTypes.number,
  border: PropTypes.string,
  parent: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "front",
  name: "front",
  content: null,
  width: "100%",
  height: "100%",
  className: "Side",
  opacity: 0.9,
  border: "1px solid",
  parent: {
    width: "200px",
    height: "200px",
  },
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  side: (props) => ({
    position: "absolute",
    width: props.width,
    height: props.height,
    border: props.border,
    opacity: props.opacity,
  }),

  front: (props) => ({
    transform: `translateZ(calc(${props.parent.width} / 2))`,
  }),

  back: (props) => ({
    transform: `translateZ(calc(-${props.parent.width} / 2))`,
  }),

  left: (props) => ({
    transform: `rotateY(90deg) translateZ(calc(${props.parent.width} / 2))`,
  }),

  right: (props) => ({
    transform: `rotateY(-90deg) translateZ(calc(${props.parent.width} / 2))`,
  }),

  top: (props) => ({
    transform: `rotateX(90deg) translateZ(calc(${props.parent.width} / 2))`,
  }),

  bottom: (props) => ({
    transform: `rotateX(-90deg) translateZ(calc(${props.parent.width} / 2))`,
  }),
}));

/**
 * Displays a side of the cube
 */
const Side = (props) => {
  const { name, className, content } = props;
  const { side, front, back, left, right, top, bottom } = useStyles(props);

  const klasses = [front, back, left, right, top, bottom];
  const index = names.findIndex((item) => item === name);
  const klass = klasses[index];

  return (
    <div className={clsx(className, side, klass)}>
      <div className="Content">{content}</div>
    </div>
  );
};

Side.propTypes = propTypes;
Side.defaultProps = defaultProps;

export default Side;
export {
  propTypes as SidePropTypes,
  defaultProps as SideDefaultProps,
  names as sideNames,
};
