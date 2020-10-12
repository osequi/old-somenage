import React from "react";

/**
 * Imports other components, hooks, helpers.
 */
import Faces from ".";

/**
 * Displays a face of a shape.
 */
const FacesDemo = (props) => {
  const faces = [
    {
      id: "1",
      name: "Face1",
      children: "Face1",
    },
    {
      id: "2",
      name: "Face2",
      children: "Face2",
    },
  ];
  return <Faces faces={faces} />;
};

export default FacesDemo;
