import React from "react";

/**
 * Imports other components and hooks
 */
import Text from ".";
import useMarkdown from "../../../hooks/use-markdown";
import markdown from "./demos/Text.demo.md";
import { Article } from "../../semantic-elements/SemanticElements";
import Setup from "../Setup";
import Grid from "../Grid";

/**
 * Displays the component.
 */
const TextDemo = (props) => {
  const { html } = useMarkdown(markdown);

  Article.defaultProps.title = "This is Article from Semantic Elements";

  return (
    <>
      <Setup />
      <Grid />
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
      <Text variant="longform" as={Article}>
        {html}
      </Text>
    </>
  );
};

export default TextDemo;
