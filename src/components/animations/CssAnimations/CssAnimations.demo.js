import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import CssAnimations, {
  CssAnimationsPropTypes,
  CssAnimationsDefaultProps,
} from ".";

/**
 * Defines the prop types
 */
const propTypes = {
  ...CssAnimationsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  animation: {
    name: "MoveOnX",
    duration: "2s",
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    direction: "alternate",
    keyframes: {
      from: { transform: "translateX(-50px)" },
      to: { transform: "translateX(50px)" },
    },
  },
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {
    width: "400px",
    height: "400px",
    border: "1px solid",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  square: {
    width: "200px",
    height: "200px",
    background: "lightgreen",
  },
}));

/**
 * Displays the demo.
 */
const CssAnimationsDemo = (props) => {
  const { container, square } = useStyles(props);

  return (
    <CssAnimations {...props}>
      <div className={clsx("Container", container)}>
        <div className={clsx("Square", square)}></div>
      </div>
    </CssAnimations>
  );
};

CssAnimationsDemo.propTypes = propTypes;
CssAnimationsDemo.defaultProps = defaultProps;

export default CssAnimationsDemo;
