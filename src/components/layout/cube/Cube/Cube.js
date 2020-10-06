import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Sides, { SidesPropTypes, SidesDefaultProps } from "../Sides";

/**
 * Defines the prop types
 */
const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  transformStyle: PropTypes.oneOf(["preserve-3d", "flat"]),
  className: PropTypes.string,
  sides: PropTypes.shape(SidesPropTypes),
  container: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.height,
    perspective: PropTypes.string,
    perspectiveOrigin: PropTypes.string,
    isPerspectiveOn: PropTypes.bool,
    className: PropTypes.string,
  }),
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: "200px",
  height: "200px",
  transformStyle: "preserve-3d",
  className: "Cube",
  sides: SidesDefaultProps,
  container: {
    width: "400px",
    height: "400px",
    perspective: "800px",
    perspectiveOrigin: "top right",
    isPerspectiveOn: true,
    className: "CubeContainer",
  },
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  cube: (props) => ({
    width: props.width,
    height: props.height,
    transformStyle: props.transformStyle,
    position: "relative",
  }),

  container: (props) => ({
    width: props.container.width,
    height: props.container.height,
    perspective: props.container.isPerspectiveOn
      ? props.container.perspective
      : "none",
    perspectiveOrigin: props.container.perspectiveOrigin,

    border: "1px solid",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
}));

/**
 * Displays the component
 */
const Cube = (props) => {
  const { className, sides, container } = props;
  const { className: containerClassName } = container;
  console.log("containerClassName:", containerClassName);

  const { cube: cubeKlass, container: containerKlass } = useStyles(props);

  return (
    <div className={clsx(containerClassName, containerKlass)}>
      <div className={clsx(className, cubeKlass)}>
        <Sides {...sides} />
      </div>
    </div>
  );
};

Cube.propTypes = propTypes;
Cube.defaultProps = defaultProps;

export default Cube;
export { propTypes as CubePropTypes, defaultProps as CubeDefaultProps };
