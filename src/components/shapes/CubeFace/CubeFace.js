import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Face, { FacePropTypes, FaceDefaultProps } from "../Face";

/**
 * Defines the prop types
 */
const propTypes = {
  ...FacePropTypes,
  /**
   * The width of the face.
   * Optional, it is set to 100%
   * @type {string}
   */
  width: PropTypes.string,
  /**
   * The height of the face.
   * Optional, it is set to 100%
   * @type {string}
   */
  height: PropTypes.string,
  /**
   * The opacity of the face.
   * It should be less than 1 to make faces in the back visible.
   * @type {string}
   */
  opacity: PropTypes.number,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FaceDefaultProps,
  width: "100%",
  height: "100%",
  opacity: 0.9,
  className: "CubeFace",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: (props) => ({
    position: "absolute",
    width: props.width,
    height: props.height,
    opacity: props.opacity,
  }),
}));

/**
 * Displays the component
 */
const CubeFace = (props) => {
  const { name, className } = props;
  const { container } = useStyles(props);

  return <Face {...props} className={clsx(className, container, name)} />;
};

CubeFace.propTypes = propTypes;
CubeFace.defaultProps = defaultProps;

export default CubeFace;
export { propTypes as CubeFacePropTypes, defaultProps as CubeFaceDefaultProps };
