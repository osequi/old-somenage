import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import TypographicGrid from "./components/typography/TypographicGrid";
import { TextDemo } from "./components/typography/Text";
import { SemanticElementsDemo } from "./components/semantic-elements/SemanticElements";
import { GridDemo } from "./components/layout/Grid";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <GridDemo />
      {/*
      <SemanticElementsDemo />
      <TypographicGrid />
      <TextDemo />
	  */}
    </>
  );
};

export default Demo;
