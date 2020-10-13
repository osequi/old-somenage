import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components, hooks, helpers.
 */
import Face from ".";
import { Section } from "../../semantic-elements/SemanticElements";

/**
 * Defines the styles.
 */
const useStyles = makeStyles(() => ({
  face1: {
    background: "lightgreen",
  },
}));

/**
 * Displays a face of a shape.
 */
const FaceDemo = (props) => {
  const { face1 } = useStyles(props);

  Section.defaultProps.title = "Section";
  Section.defaultProps.display = true;

  return (
    <>
      <Face>Face</Face>
      <hr />
      <Face className="Sisis">Face w. className</Face>
      <hr />
      <Face className={clsx("FaceStyled", face1)}>Face styled</Face>
      <hr />
      <Face as={Section}>Face as Section</Face>
    </>
  );
};

export default FaceDemo;
