import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import Cube, { CubeDefaultProps } from ".";
import { Section, Article } from "../../../semantic-elements/SemanticElements";

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  default: {
    background: "lightblue",
  },
}));

/**
 * Displays the component
 */
const CubeDemo = (props) => {
  const { default: defaultKlass } = useStyles(props);

  const { borders } = CubeDefaultProps;

  return (
    <Section title="CubeDemo">
      <Article title="Default" className={defaultKlass}>
        <Cube />
      </Article>
      <Article title="Default, normalized borders" className={defaultKlass}>
        <Cube borders={{ ...borders, preset: "normalized" }} />
      </Article>
      <Article
        title="Default, normalized borders with dotted style in the background"
        className={defaultKlass}
      >
        <Cube borders={{ ...borders, preset: "dottedInTheBackground" }} />
      </Article>
    </Section>
  );
};

export default CubeDemo;
