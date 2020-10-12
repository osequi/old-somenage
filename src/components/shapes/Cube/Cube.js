import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Faces, { FacesPropTypes, FacesDefaultProps } from "../Faces";
import CubeFace, { CubeFacePropTypes, CubeFaceDefaultProps } from "../CubeFace";

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
  faces: Array(6).map((item) => (
    <CubeFace {...CubeFaceDefaultProps} id={shortid.generate()} />
  )),
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
