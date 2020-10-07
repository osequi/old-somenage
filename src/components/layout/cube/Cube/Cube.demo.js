import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import Cube from ".";
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

  return (
    <Section title="CubeDemo">
      <Article title="Default" className={defaultKlass}>
        <Cube />
      </Article>
    </Section>
  );
};

export default CubeDemo;
