import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import { FontDemo } from "./components/typography/Font";
import { HeadingsDemo } from "./components/typography/Headings";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <HeadingsDemo />
      <FontDemo />
    </>
  );
};

export default Demo;
