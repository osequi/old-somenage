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
      <Breakpoints values={["mobile"]}>
        1. This text is visibe only on mobiles.
      </Breakpoints>
      <br />
      <Breakpoints values={["tablet"]}>
        2. This text is visibe only on mobiles and tablets.
      </Breakpoints>
      <br />
      <Breakpoints values={["tabletPortrait"]}>
        3. This text is visibe only on mobiles, tablets and tablet portrait.
      </Breakpoints>
      <br />
      <Breakpoints values={["laptop"]}>
        4. This text is visibe only below laptop.
      </Breakpoints>
      <br />
      <Breakpoints values={["desktop"]}>
        5. This text is visibe only below desktop.
      </Breakpoints>
    </>
  );
};

export default BreakpointsDemo;
