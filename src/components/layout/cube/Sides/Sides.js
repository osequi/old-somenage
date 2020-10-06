import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Side, { SidePropTypes, SideDefaultProps, sideNames } from "../Side";

/**
 * Defines the prop types
 */
const propTypes = {
  sides: PropTypes.arrayOf(PropTypes.shape(SidePropTypes)),
};

/**
 * Defines the default props
 */
const defaultProps = {
  sides: Array(6)
    .fill(SideDefaultProps)
    .map((item, index) => {
      return { ...item, id: shortid.generate(), name: sideNames[index] };
    }),
};

/**
 * Displays the component
 */
const Sides = (props) => {
  const { sides } = props;

  const sidesHtml =
    sides &&
    sides.map((item) => {
      const { id } = item;

      return <Side key={id} {...item} />;
    });

  return sidesHtml;
};

Sides.propTypes = propTypes;
Sides.defaultProps = defaultProps;

export default Sides;
export { propTypes as SidesPropTypes, defaultProps as SidesDefaultProps };
