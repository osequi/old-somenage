import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import { DisplayDemo } from "./components/responsiveness/Display";
import { TextDemo } from "./components/typography/Text";
import { SemanticElementsDemo } from "./components/semantic-elements/SemanticElements";
import { GridDemo } from "./components/layout/Grid";
import { CubeDemo } from "./components/layout/cube/Cube";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <div className="Demo">
        <GridDemo />

        {/*<CubeDemo />
      <SemanticElementsDemo />
      <TextDemo />
      <DisplayDemo />
	  */}
      </div>
    </>
  );
};

export default Demo;
