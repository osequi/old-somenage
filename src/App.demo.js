import React from "react";

/**
 * Imports other components and hooks
 */
import Setup from "./components/typography/Setup";
import TypographicGrid from "./components/typography/TypographicGrid";
import { TextDemo } from "./components/typography/Text";
import { SemanticElementsDemo } from "./components/semantic-elements/SemanticElements";
import { GridDemo } from "./components/layout/Grid";
import { MediaQueriesDemo } from "./components/responsiveness/MediaQueries";
import { HideDemo } from "./components/responsiveness/Hide";
import { CssAnimationDemo } from "./components/animations/CssAnimation";

/**
 * Displays the demo
 */
const Demo = (props) => {
  return (
    <>
      <Setup />
      <CssAnimationDemo />
      <TextDemo />
      {/*
	  <HideDemo />
	  <GridDemo />
	  <MediaQueriesDemo />
      <SemanticElementsDemo />
      <TypographicGrid />
      <TextDemo />
	  */}
    </>
  );
};

export default Demo;
