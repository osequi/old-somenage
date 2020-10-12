import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Face, { FaceDefaultProps, FacePropTypes } from "../Face";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The number of faces.
   * @type {number}
   */
  number: PropTypes.number,
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The content of the faces.
   * @type {Array}
   */
  children: PropTypes.shape(PropTypes.any),
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
  number: null,
  as: "div",
  children: null,
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
  const { number, as, children, className } = props;
  const { container } = useStyles(props);

  const facesList = Array(number)
    .fill("")
    .map((item, index) => {
      const id = shortid.generate();
      return (
        <Face key={id} id={id}>
          {children[index]}
        </Face>
      );
    });

  const props2 = { className: clsx(className, container) };

  return createElement(as, props2, facesList);
};

Faces.propTypes = propTypes;
Faces.defaultProps = defaultProps;

export default Faces;
export { propTypes as FacesPropTypes, defaultProps as FacesDefaultProps };
