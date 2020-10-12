import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import { DisplayDemo } from "./components/responsiveness/Display";
import { TextDemo } from "./components/typography/Text";
import { SemanticElementsDemo } from "./components/semantic-elements/SemanticElements";
import { GridDemo } from "./components/layout/Grid";
import { CubeDemo } from "./components/decorations/Cube";
import { CssAnimationsDemo } from "./components/animations/CssAnimations";
//import { CubeDemo as CubeDemo2 } from "./components/shapes/Cube";
import { FaceDemo } from "./components/shapes/Face";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <div className="Demo">
        <FaceDemo />
        {/*
		<CssAnimationsDemo />
		<CubeDemo />
		<GridDemo />
      	<SemanticElementsDemo />
      	<TextDemo />
      	<DisplayDemo />
	  */}
      </div>
    </>
  );
};

export default Demo;
