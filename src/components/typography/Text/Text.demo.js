import React from "react";

/**
 * Imports other components and hooks.
 */
import Text from ".";
import { useMarkdown } from "../../../hooks";
import markdown from "./demos/Text.demo.md";

/**
 * Displays the Text demo.
 */
const TextDemo = (props) => {
  const { html } = useMarkdown(markdown);

  return (
    <>
      <Text variant="longform">{html}</Text>
    </>
  );
};

export default TextDemo;
