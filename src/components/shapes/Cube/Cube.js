import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Faces, { FacesPropTypes, FacesDefaultProps } from "../Faces";

/**
 * Defines the prop types
 */
const propTypes = {
  ...FacesPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FacesDefaultProps,
  number: "6",
  children: Array(6)
    .fill("")
    .map((item, index) => {
      return `Face ${index + 1}`;
    }),
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Cube = (props) => {
  const { container } = useStyles(props);

  return <Faces {...props} className={clsx("Cube", container)} />;
};

Cube.propTypes = propTypes;
Cube.defaultProps = defaultProps;

export default Cube;
export { propTypes as CubePropTypes, defaultProps as CubeDefaultProps };
