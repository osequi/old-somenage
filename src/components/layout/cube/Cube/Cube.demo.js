import React from "react";

import Cube from ".";
import { Section, Article } from "../../../semantic-elements/SemanticElements";

/**
 * Displays the component
 */
const CubeDemo = (props) => {
  return (
    <Section title="CubeDemo">
      <Article title="Default">
        <Cube />
      </Article>
    </Section>
  );
};

export default CubeDemo;
