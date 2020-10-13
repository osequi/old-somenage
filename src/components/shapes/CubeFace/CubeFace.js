import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Face, { FacePropTypes, FaceDefaultProps } from "../Face";
import { findInArrays } from "../../helpers";

/**
 * Imports cube props and styles.
 */
import transform, { transformPresetNames } from "./CubeFace.transforms";
import border, { borderPresetNames } from "./CubeFace.borders";

/**
 * Defines the face names.
 * @type {Array}
 */
const faceNames = ["front", "back", "left", "right", "top", "bottom"];

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
  /**
   * The name of the transform preset.
   * @type {string}
   */
  transformPresetName: PropTypes.oneOf(transformPresetNames),
  /**
   * The name of the border preset.
   * @type {string}
   */
  borderPresetName: PropTypes.oneOf(borderPresetNames),
  /**
   * The border CSS property.
   * Example: '1px solid'
   * @type {string}
   */
  border: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...FaceDefaultProps,
  className: "CubeFace",
  name: "front",
  width: "100px",
  height: "100px",
  opacity: 0.9,
  transformPresetName: "def",
  borderPresetName: "dashedInTheBackground",
  border: "1px solid",
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

  front: (props) => ({
    ...transform({ faceName: "front", ...props }),
    ...border({ faceName: "front", ...props }),
  }),

  back: (props) => ({
    ...transform({ faceName: "back", ...props }),
    ...border({ faceName: "back", ...props }),
  }),

  left: (props) => ({
    ...transform({ faceName: "left", ...props }),
    ...border({ faceName: "left", ...props }),
  }),

  right: (props) => ({
    ...transform({ faceName: "right", ...props }),
    ...border({ faceName: "right", ...props }),
  }),

  top: (props) => ({
    ...transform({ faceName: "top", ...props }),
    ...border({ faceName: "top", ...props }),
  }),

  bottom: (props) => ({
    ...transform({ faceName: "bottom", ...props }),
    ...border({ faceName: "bottom", ...props }),
  }),
}));

/**
 * Displays the component
 */
const CubeFace = (props) => {
  const { name, className } = props;

  const { container, front, back, left, right, top, bottom } = useStyles(props);

  /**
   * Styles the face based on `name`.
   * @type {object}
   */
  const klasses = [front, back, left, right, top, bottom];
  const klassForName = findInArrays({
    targetArray: klasses,
    anotherArray: faceNames,
    identifier: name,
  });

  return (
    <Face {...props} className={clsx(className, container, klassForName)} />
  );
};

CubeFace.propTypes = propTypes;
CubeFace.defaultProps = defaultProps;

export default CubeFace;
export { propTypes as CubeFacePropTypes, defaultProps as CubeFaceDefaultProps };
