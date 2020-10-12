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
 * Defines the cube face names
 * @type {array}
 */
const cubeFaceNames = ["front", "back", "left", "right", "top", "bottom"];

/**
 * Defines the prop types
 */
const propTypes = {
  ...FacesPropTypes,
  faceNames: PropTypes.oneOf(cubeFaceNames),
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FacesDefaultProps,
  faces: Array(6)
    .fill(CubeFaceDefaultProps)
    .map((item, index) => {
      return {
        ...item,
        id: shortid.generate(),
        as: CubeFace,
        children: cubeFaceNames[index],
        name: cubeFaceNames[index],
      };
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
