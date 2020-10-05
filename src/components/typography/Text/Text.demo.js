import React from "react";

/**
 * Imports other components and hooks
 */
import Text from ".";
import useMarkdown from "../../../hooks/use-markdown";
import markdown from "./Text.demo.md";

/**
 * Displays the component.
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
        <Text variant="body">
          <h3>This is the body text</h3>
          <p>This is the body text.</p>
        </Text>
      </p>
      <Text variant="longform">{html}</Text>
    </>
  );
};

export default TextDemo;
