import React from "react";

/**
 * Imports other components and hooks.
 */
import Text from ".";
import { useMarkdown } from "../../../hooks";
import markdown from "./demos/Text.demo.md";
import markdown1 from "./demos/Text.demo.1.md";
import markdown2 from "./demos/Text.demo.2.md";

/**
 * Displays the Text demo.
 */
const TextDemo = (props) => {
  const { html } = useMarkdown(markdown1);

  return (
    <>
      <Text variant="longform">{html}</Text>
    </>
  );
};

export default TextDemo;
