import React from "react";

/**
 * Imports other components and hooks.
 */
import Hide from ".";

/**
 * Displays the Hide demo.
 */
const HideDemo = (props) => {
  return (
    <>
      <p>Switch to mobile view.</p>
      <Hide above="tablet">This text is not visible above tablet.</Hide>
    </>
  );
};

export default HideDemo;
