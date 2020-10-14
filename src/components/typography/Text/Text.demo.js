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
      <h2>Text Demo</h2>
      <p>
        <Text variant="default">This is the default text.</Text>
      </p>
      <p>
        <Text variant="body" as="article">
          <h3>This is the heading of the body text</h3>
          <p>
            This is the body text of the body text. It should be a standard
            "article" tag.
          </p>
        </Text>
      </p>
      <Text variant="longform">{html}</Text>
    </>
  );
};

export default TextDemo;
