import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the media queries.
   * Example: ['(min-device-width: 1824px)', '(max-width: 1224px)']
   * @see https://github.com/contra/react-responsive
   * @type {array}
   */
  values: PropTypes.arrayOf(PropTypes.string),
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  values: null,
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the content for the specified media queries.
 */
const MediaQueries = (props) => {
  const { values, children } = props;
  const { container } = useStyles(props);

  const queries = values && values.join(" and ");
  const visible = useMediaQuery({ query: `${queries}` });

  return <>{visible && children}</>;
};

MediaQueries.propTypes = propTypes;
MediaQueries.defaultProps = defaultProps;

export default MediaQueries;
export {
  propTypes as MediaQueriesPropTypes,
  defaultProps as MediaQueriesDefaultProps,
};
