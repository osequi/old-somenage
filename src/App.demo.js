import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import { FontDemo } from "./components/typography/Font";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <FontDemo />
    </>
  );
};

export default Demo;
