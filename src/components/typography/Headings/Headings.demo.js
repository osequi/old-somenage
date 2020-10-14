import React from "react";

/**
 * Imports other components and hooks.
 */
import Headings from ".";

/**
 * Displays the Headings demo.
 */
const HeadingsDemo = (props) => {
  return (
    <Headings>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </Headings>
  );
};

export default HeadingsDemo;
