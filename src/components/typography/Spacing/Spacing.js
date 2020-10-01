import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Every consecutive element has a top margin
 */
const spacingMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions
   */
  ["& * + li"]: {
    marginTop: 0,
  },
  ["& tr + tr"]: {
    marginTop: 0,
  },
};

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Spacing = (props) => {
  const { container } = useStyles(props);

  return <div className={clsx("Spacing", container)}>Spacing</div>;
};

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
export {
  propTypes as SpacingPropTypes,
  defaultProps as SpacingDefaultProps,
  spacingMarginTop,
};
