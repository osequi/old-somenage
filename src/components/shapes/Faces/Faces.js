import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Face, { FaceDefaultProps, FacePropTypes } from "../Face";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The faces.
   * @type {array}
   */
  faces: PropTypes.arrayOf(PropTypes.shape(FacePropTypes)),
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  faces: null,
  as: "div",
  className: "Faces",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays a list of faces.
 */
const Faces = (props) => {
  const { faces, as, className } = props;
  const { container } = useStyles(props);

  console.log("faces:", faces);

  const facesList =
    faces &&
    faces.map((item) => {
      const { id } = item;
      return <Face key={id} {...item} />;
    });

  const props2 = { className: clsx(className, container) };

  return createElement(as, props2, facesList);
};

Faces.propTypes = propTypes;
Faces.defaultProps = defaultProps;

export default Faces;
export { propTypes as FacesPropTypes, defaultProps as FacesDefaultProps };
