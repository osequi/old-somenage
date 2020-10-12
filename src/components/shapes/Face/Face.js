import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components, hooks, helpers.
 */
import Cell, { CellPropTypes, CellDefaultProps } from "../../layout/Cell";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * First of all, every face is a cell, with id and name.
   * @type {Object}
   */
  ...CellPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...CellDefaultProps,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays a face of a shape.
 */
const Face = (props) => {
  const { children } = props;
  const { container } = useStyles(props);

  return <Cell className={clsx("Face", container)}>{children}</Cell>;
};

Face.propTypes = propTypes;
Face.defaultProps = defaultProps;

export default Face;
export { propTypes as FacePropTypes, defaultProps as FaceDefaultProps };
