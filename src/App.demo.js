import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import { FontDemo } from "./components/typography/Font";
import { HeadingsDemo } from "./components/typography/Headings";
import TypographicGrid from "./components/typography/TypographicGrid";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <TypographicGrid />
      <HeadingsDemo />
      <FontDemo />
    </>
  );
};

export default Demo;
