import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * A list of media queries.
   * Please mind the parantheses !!!
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
 * Defines the default props.
 */
const defaultProps = {
  values: null,
  children: null,
};

/**
 * Displays content if the media queries are met.
 * @see MediaQueries.md
 */
const MediaQueries = (props) => {
  const { values, children } = props;

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
