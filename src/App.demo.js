import React from "react";

/**
 * Imports other components and hooks
 */
import { DisplayDemo } from "./components/responsiveness/Display";
import { TextDemo } from "./components/typography/Text";
import { SemanticElementsDemo } from "./components/semantic-elements/SemanticElements";
import { GridDemo } from "./components/layout/Grid";
import Setup from "./components/typography/Setup";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <div className="Demo">
        <GridDemo />
        {/*
      <SemanticElementsDemo />
      <TextDemo />
      <DisplayDemo />
	  */}
      </div>
    </>
  );
};

export default Demo;
