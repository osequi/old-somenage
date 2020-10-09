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
const CubeDemoContent = (props) => {
  const {
    default: defaultKlass,
    extraMargin,
    content: contentKlass,
  } = useStyles(props);

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

  const imagesWithPadding = [
    <div className={clsx(contentKlass, "ContentKlass")}>
      <img src="https://placekitten.com/500/500" />
    </div>,
    <div className={contentKlass}>
      <img src="https://placekitten.com/500/500" />
    </div>,
    <div className={contentKlass}>
      <img src="https://placekitten.com/500/500" />
    </div>,
    <div className={contentKlass}>
      <img src="https://placekitten.com/500/500" />
    </div>,
    <div className={contentKlass}>
      <img src="https://placekitten.com/500/500" />
    </div>,
    <div className={contentKlass}>
      <img src="https://placekitten.com/500/500" />
    </div>,
  ];

  const contentWithPadding = [
    <div className={contentKlass}>
      <p>Side #1</p>
    </div>,
    <div className={contentKlass}>
      <p>Side #2</p>
    </div>,
    <div className={contentKlass}>
      <p>Side #3</p>
    </div>,
    <div className={contentKlass}>
      <p>Side #4</p>
    </div>,
    <div className={contentKlass}>
      <p>Side #5</p>
    </div>,
    <div className={contentKlass}>
      <p>Side #6</p>
    </div>,
  ];

  return (
    <Section title="CubeDemo">
      <Article
        title="Simple content."
        className={clsx(defaultKlass, extraMargin)}
      >
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
      <Article title="Images" className={clsx(defaultKlass, extraMargin)}>
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
            return { ...item, children: images[index] };
          })}
        />
      </Article>
      <Article
        title="Content with padding."
        className={clsx(defaultKlass, extraMargin)}
      >
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
            return { ...item, children: contentWithPadding[index] };
          })}
        />
      </Article>
      <Article
        title="Images with padding."
        className={clsx(defaultKlass, extraMargin)}
      >
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
            return { ...item, children: imagesWithPadding[index] };
          })}
        />
      </Article>
    </Section>
  );
};

export default CubeDemoContent;
