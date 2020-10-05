import React from "react";

/**
 * Imports other components and hooks
 */
import Breakpoints from ".";

/**
 * Displays the content for the specified breakpoints.
 */
const BreakpointsDemo = (props) => {
  return (
    <>
      <p>0. This text is always visible.</p>
      <Breakpoints values={["mobile"]}>
        1. This text is visibe from mobile up.
      </Breakpoints>
      <br />
      <Breakpoints values={["tablet"]}>
        2. This text is visibe from tablet up.
      </Breakpoints>
      <br />
      <Breakpoints values={["laptop"]}>
        3. This text is visibe from laptop up.
      </Breakpoints>
      <br />
      <Breakpoints values={["desktop"]}>
        4. This text is visibe from desktop up.
      </Breakpoints>
    </>
  );
};

export default BreakpointsDemo;
