import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import Cube, { CubeDefaultProps } from "../";
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
const CubeDemoSizes = (props) => {
  const { default: defaultKlass, extraMargin } = useStyles(props);

  const { borders, container } = CubeDefaultProps;

  return (
    <Section title="CubeDemo">
      <Article
        title="Container and cube have the same dimensions. No matter the perspective, the cube cannot be displayed well."
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="400px"
          height="400px"
          container={{ ...container, perspective: "1200px" }}
        />
      </Article>
      <Article
        title="Default, with cube  different width (150px) and height (250px)"
        className={defaultKlass}
      >
        <Cube {...props} width="150px" height="250px" />
      </Article>
      <Article
        title="Default, with container different width (950px) and height (200px)"
        className={defaultKlass}
      >
        <Cube
          {...props}
          container={{ ...container, width: "950px", height: "200px" }}
        />
      </Article>
      <Article
        title="The two above combined"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="150px"
          height="250px"
          container={{ ...container, width: "950px", height: "200px" }}
        />
      </Article>
      <Article
        title="The above with normalized borders."
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="150px"
          height="250px"
          container={{ ...container, width: "950px", height: "200px" }}
          borders={{ ...borders, preset: "normalized" }}
        />
      </Article>
      <Article
        title="Default, with container different width (200px) and height (950px)"
        className={defaultKlass}
      >
        <Cube
          {...props}
          container={{ ...container, width: "200px", height: "950px" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 100vw, 100vh, Cube: 10vw, 10vw"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="10vw"
          height="10vw"
          container={{ ...container, width: "100vw", height: "100vh" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 100vmin, 100vmin, Cube: 10em, 10em"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="10em"
          height="10em"
          container={{ ...container, width: "100vmin", height: "100vmin" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 100vmin, 100vmin, Cube: 10vmin, 10vmin"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="10vmin"
          height="10vmin"
          container={{ ...container, width: "100vmin", height: "100vmin" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 50em, 50em, Cube: 10em, 10em"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="10em"
          height="10em"
          container={{ ...container, width: "50em", height: "50em" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 40em, 40em, Cube: 20em, 20em"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="20em"
          height="20em"
          container={{ ...container, width: "40em", height: "40em" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 40em, 40em, Cube: 20em, 20em, Perspective: 80em"
        className={clsx(defaultKlass, extraMargin)}
      >
        <p>
          This seems to be the gold standard. This is how a cube looks realy
          like a cube.
        </p>
        <Cube
          {...props}
          width="20em"
          height="20em"
          container={{
            ...container,
            width: "40em",
            height: "40em",
            perspective: "80em",
          }}
        />
      </Article>
      <Article
        title="Full screen. Container: 900px, 900px, Cube: 450px, 450px, Perspective: 1800px"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="450px"
          height="450px"
          container={{
            ...container,
            width: "900px",
            height: "900px",
            perspective: "1800px",
          }}
        />
      </Article>
      <Article title="Notes">
        <ul>
          <li>
            When the side transforms are fixed (ie 100px) then various
            distortions / glitch effects happen.
          </li>
          <li>
            Normalized borders give us paralelograms on non-equal width and
            height.
          </li>
          <li>Perhaps these transforms slows down the browser.</li>
        </ul>
      </Article>
    </Section>
  );
};

export default CubeDemoSizes;
