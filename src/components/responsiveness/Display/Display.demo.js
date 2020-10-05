import React from "react";

/**
 * Imports other components and hooks
 */
import Display from ".";

/**
 * Displays the component.
 */
const DisplayDemo = (props) => {
  return (
    <>
      <h2>Display Demo</h2>
      <p>
        <Display above="mobile">This text is visibe only above mobile.</Display>
      </p>
      <p>
        <Display above="desktop">
          This text is visibe only above desktop.
        </Display>
      </p>
    </>
  );
};

export default DisplayDemo;
