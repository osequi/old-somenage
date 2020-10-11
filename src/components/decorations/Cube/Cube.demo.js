import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import Cube, { CubeDefaultProps } from ".";
import { Section, Article } from "../../semantic-elements/SemanticElements";

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

  content: {
    padding: "10em",

    ["& p"]: {
      background: "red",
    },

    ["& img"]: {
      width: "100%",
      height: "auto",
    },
  },
}));

/**
 * Displays the component
 */
const CubeDemo = (props) => {
  const {
    default: defaultKlass,
    extraMargin,
    content: contentKlass,
  } = useStyles(props);

  const { borders, container, sides } = CubeDefaultProps;

  const content = [
    <p>Front</p>,
    <p>Back</p>,
    <p>Left</p>,
    <p>Right</p>,
    <p>Top</p>,
    <p>Bottom</p>,
  ];

  return (
    <Section title="CubeDemo">
      <Article title="Simple content." className={clsx(defaultKlass)}>
        <p>Styling, positioning content is done here.</p>
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
          sides={sides.map((item, index) => {
            return { ...item, children: content[index] };
          })}
        />
      </Article>
    </Section>
  );
};

export default CubeDemo;
