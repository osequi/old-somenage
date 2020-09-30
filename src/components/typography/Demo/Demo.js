import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Setup from "../Setup";
import Grid from "../Grid";
import Typography from "../Typography";
import { H1 } from "../../semantic-elements/SemanticElements";
import useMarkdown from "../../../hooks/use-markdown";

import markdown from "./Demo.md";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Demo = (props) => {
  const { container } = useStyles(props);
  const { html } = useMarkdown(markdown);

  return (
    <>
      <Setup />
      <div className={clsx("TypographyDemo", container)}>
        <Grid displayVerticalRhytm={true} displayHorizontalRhytm={true} />
        <Typography variant="body">{html}</Typography>
      </div>
    </>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
