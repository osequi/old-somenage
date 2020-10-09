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
const CubeDemoResponsive = (props) => {
  const { default: defaultKlass, extraMargin } = useStyles(props);

  const { borders, container } = CubeDefaultProps;

  return (
    <Section title="CubeDemo">
      <Article
        title="Full screen. Container: 100vmin, 100vmin, Cube: 50vmin, 50vmin, Perspective: 200vmin"
        className={clsx(defaultKlass, extraMargin)}
      >
        <p>Displays well on all screens.</p>
        <Cube
          {...props}
          width="50vmin"
          height="50vmin"
          container={{
            ...container,
            width: "100vmin",
            height: "100vmin",
            perspective: "200vmin",
          }}
          borders={{ ...borders, preset: "normalized" }}
        />
      </Article>
    </Section>
  );
};

export default CubeDemoResponsive;
