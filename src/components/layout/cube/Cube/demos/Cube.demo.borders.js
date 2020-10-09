import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import Cube, { CubeDefaultProps } from "../";
import {
  Section,
  Article,
} from "../../../../semantic-elements/SemanticElements";

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  default: {
    background: "lightblue",
  },

  extraMargin: {
    marginTop: "10em",
    marginBottom: "10em",
  },
}));

/**
 * Displays the component
 */
const CubeDemoBorders = (props) => {
  const { default: defaultKlass, extraMargin } = useStyles(props);

  const { borders, container } = CubeDefaultProps;

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
      <Article
        title="The same as above with thicker borders. As borders get thicker the harder is to make them look uniform."
        className={defaultKlass}
      >
        <Cube
          borders={{
            ...borders,
            preset: "dottedInTheBackground",
            unit: "vmin",
          }}
        />
      </Article>
      <Article
        title="The same as above with dashed borders."
        className={defaultKlass}
      >
        <Cube
          borders={{
            ...borders,
            preset: "dottedInTheBackground",
            unit: "vmin",
            style: "dashed",
          }}
        />
      </Article>
    </Section>
  );
};

export default CubeDemoBorders;
