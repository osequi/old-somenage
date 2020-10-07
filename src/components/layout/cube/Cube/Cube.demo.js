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
      <Article
        title="Container and cube have the same dimensions."
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube {...props} width="400px" height="400px" />
      </Article>
      <Article
        title="Container and cube have the same dimensions. No matter the perspective, the cube cannot be displayed"
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
        title="Full screen. Container: 100vw, 100vh, Cube: 80vw, 80vh"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="80vw"
          height="80vh"
          container={{ ...container, width: "100vw", height: "100vh" }}
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
        title="Full screen. Container: 100vw, 100vh, Cube: 10em, 10em"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="10em"
          height="10em"
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
        title="Full screen. Container: 900px, 900px, Cube: 600px, 600px"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="600px"
          height="600px"
          container={{ ...container, width: "900px", height: "900px" }}
        />
      </Article>
      <Article
        title="Full screen. Container: 900px, 900px, Cube: 600px, 600px, Perspective: 1800"
        className={clsx(defaultKlass, extraMargin)}
      >
        <Cube
          {...props}
          width="600px"
          height="600px"
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

export default CubeDemo;
