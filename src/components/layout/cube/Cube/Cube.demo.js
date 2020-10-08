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

  extraMargin: {
    marginTop: "10em",
    marginBottom: "10em",
  },
}));

/**
 * Displays the component
 */
const CubeDemo = (props) => {
  const { default: defaultKlass, extraMargin } = useStyles(props);

  const { borders, container, sides } = CubeDefaultProps;

  const content = [
    <p>Side #1</p>,
    <p>Side #2</p>,
    <p>Side #3</p>,
    <p>Side #4</p>,
    <p>Side #5</p>,
    <p>Side #6</p>,
  ];

  const images = [
    <img src="https://placekitten.com/500/500" />,
    <img src="https://placekitten.com/500/500" />,
    <img src="https://placekitten.com/500/500" />,
    <img src="https://placekitten.com/500/500" />,
    <img src="https://placekitten.com/500/500" />,
    <img src="https://placekitten.com/500/500" />,
  ];

  const sidesWithContent = sides.map((item, index) => {
    return { ...item, children: images[index] };
  });

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
          sides={sidesWithContent}
        />
      </Article>
    </Section>
  );
};

export default CubeDemo;
