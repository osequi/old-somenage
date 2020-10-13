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
import { CubeDemo as CubeDemo2 } from "./components/shapes/Cube";
import { CubeFaceDemo } from "./components/shapes/CubeFace";
import { FaceDemo } from "./components/shapes/Face";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <div className="Demo">
        <CssAnimationsDemo />
        <CubeFaceDemo />
        {/*<FaceDemo />
			<CubeDemo2 />
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
