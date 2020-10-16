import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import TypographicGrid from "./components/typography/TypographicGrid";
import { TextDemo } from "./components/typography/Text";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <TypographicGrid />
      <TextDemo />
    </>
  );
};

export default Demo;
