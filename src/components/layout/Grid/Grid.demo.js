import React from "react";

/**
 * Imports other components and hooks
 */
import Grid from ".";

/**
 * Displays the Layout demo
 */
const GridDemo = (props) => {
  const items = Array(10)
    .fill("")
    .map((item, index) => {
      return <div key={index}>Item {index + 1}</div>;
    });

  return (
    <>
      <Grid columns={3} gap={3} fauxLines="both">
        {items}
      </Grid>
    </>
  );
};

export default GridDemo;
