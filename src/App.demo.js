import React from "react";

/**
 * Imports other components and hooks
 */
import { DisplayDemo } from "./components/responsiveness/Display";
import { TextDemo } from "./components/typography/Text";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <div className="Demo">
      <TextDemo />
      <DisplayDemo />
    </div>
  );
};

export default Demo;
