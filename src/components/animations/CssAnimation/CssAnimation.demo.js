import React from "react";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Imports other components and hooks.
 */
import CssAnimation from ".";

const container = {
  label: "Container",

  width: "400px",
  height: "400px",
  border: "1px solid",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const square = {
  label: "Square",

  width: "200px",
  height: "200px",
  background: "lightgreen",
};

const animation = {
  duration: "2s",
  timingFunction: "ease-in-out",
  iterationCount: "infinite",
  direction: "alternate",
  keyframes: {
    from: { transform: "translateX(-50px)" },
    to: { transform: "translateX(50px)" },
  },
};

/**
 * Displays the CssAnimation demo.
 */
const CssAnimationDemo = (props) => {
  const { containerKlass, squareKlass } = useStyles([container, square], props);

  return (
    <div className={cx("Container", containerKlass)}>
      <CssAnimation animation={animation}>
        <div className={cx("Square", squareKlass)} />
      </CssAnimation>
    </div>
  );
};

export default CssAnimationDemo;
