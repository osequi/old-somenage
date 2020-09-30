import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

/**
 * Adds a CSS Reset with `normalize.css`.
 * @see https://gist.github.com/vre2h/4bad1d3b836f6a18c9bd5a8ca68ab1d9
 */
import "normalize.css";

/**
 * Adds further normalization on top of `normalize.css`.
 * @type {Object}
 */
import "./Setup.css";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Font size, in percentage.
   *
   * @see http://metamn.io/mr-ui/?selectedKind=Basics%2FTypography%20%E2%9C%93%2FClassic&selectedStory=Overview&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook-addon-background%2Fbackground-panel&background=beige
   * @type {string}
   */
  fontSize: PropTypes.string,
  /**
   * Line height, unitless.
   * @type {number}
   */
  lineHeight: PropTypes.number,
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontSize: "100%",
  lineHeight: "1.25",
};

/**
 * Sets up the typographic grid in `<body>`
 */
const Setup = (props) => {
  const { fontSize, lineHeight } = props;

  return (
    <Helmet>
      <body
        style={`font-size: ${fontSize}; line-height: ${lineHeight}; --lem: 1.25em`}
      />
    </Helmet>
  );
};

Setup.propTypes = propTypes;
Setup.defaultProps = defaultProps;

export default Setup;
export { propTypes as SetupPropTypes, defaultProps as SetupDefaultProps };
