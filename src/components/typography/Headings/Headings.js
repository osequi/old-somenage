import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { isNil } from "lodash";

/**
 * Imports other components and hooks
 */
import { font } from "../Fonts";
import { scale } from "../Scale";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The font name of the headings
   * @type {string}
   */
  fontName: PropTypes.string,
  /**
   * The scale of the headings in case all of them have the same scale.
   * @type {number}
   */
  scale: PropTypes.number,
  /**
   * The scale of the headings in case when a modular scale is applied
   * @type {object}
   */
  modularScale: PropTypes.shape({}),
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontName: "Default",
  scale: null,
  modularScale: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

const sameSize = (props) => {
  const { fontName, scale: scaleValue } = props;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font(fontName),
      ...scale(scaleValue),
    },
  };
};

const headings = (props) => {
  const { fontName, scale: scaleValue, modularScale } = props;

  if (!isNil(scaleValue)) return sameSize(props);

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font(fontName),
      /**
       * Better readability best practice
       */
      lineHeight: 1,
      /**
       * Overwrite spacing where perhaps the marginTop technique was used.
       * `marginTop: var(--lem)` grows imense when the scale increase.
       */
      marginTop: 0,
      // TODO: Add Iain Lambs' typograph padding calculator here
    },
    ["& h6"]: {
      ...scale(1),
    },
    ["& h5"]: {
      ...scale(2),
    },
    ["& h4"]: {
      ...scale(3),
    },
    ["& h3"]: {
      ...scale(4),
    },
    ["& h2"]: {
      ...scale(5),
    },
    ["& h1"]: {
      ...scale(6),
    },
  };
};

/**
 * Displays the component
 */
const Headings = (props) => {
  const { container } = useStyles(props);

  return <div className={clsx("Headings", container)}>Headings</div>;
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;

export default Headings;
export {
  propTypes as HeadingsPropTypes,
  defaultProps as HeadingsDefaultProps,
  headings,
};
