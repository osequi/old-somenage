import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import TypographicGrid from "./components/typography/TypographicGrid";
import { FontDemo } from "./components/typography/Font";
import { HeadingsDemo } from "./components/typography/Headings";
import { TextElementsDemo } from "./components/typography/TextElements";
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
      <TextElementsDemo />
      <HeadingsDemo />
      <FontDemo />
    </>
  );
};

export default Demo;
