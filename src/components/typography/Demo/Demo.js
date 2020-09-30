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

  return (
    <>
      <Setup />
      <div className={clsx("TypographyDemo", container)}>
        <Grid displayVerticalRhytm={false} displayHorizontalRhytm={true} />
        <Typography variant="title" component={H1}>
          Demo
        </Typography>
      </div>
    </>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
