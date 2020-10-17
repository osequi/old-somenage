import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";

/**
 * Adds a CSS Reset with `normalize.css`.
 * @see https://gist.github.com/vre2h/4bad1d3b836f6a18c9bd5a8ca68ab1d9
 */
import "normalize.css";

/**
 * Adds further normalization on top of `normalize.css`.
 * It resets all styles. No element should be distinctive from another.
 * Put `Setup.testpage.md` contents on the `<Grid/>` to see if everything is uniform and fits perfectly to the grid.
 */
import "./Setup.css";

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * Font size, in percentage.
   *
   * @see http://metamn.io/mr-ui/?selectedKind=Basics%2FTypography%20%E2%9C%93%2FClassic&selectedStory=Overview&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook-addon-background%2Fbackground-panel&background=beige
   * @type {number}
   */
  fontSize: PropTypes.number,
  /**
   * Line height, unitless.
   * @type {number}
   */
  lineHeight: PropTypes.number,
  /**
   * Responsive font sizes for different breakpoints.
   * @type {array}
   */
  fontSizes: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The breakpoint name.
       * Example: 'tablet'.
       * @type {string}
       */
      breakpoint: PropTypes.string,
      /**
       * The font size for the breakpoint, in percentage.
       * Example: 120
       * @type {number}
       */
      fontSize: PropTypes.number,
    })
  ),
};

/**
 * Defines the default props.
 * Props will be overwritten by the theme.
 */
const defaultProps = {
  fontSize: 100,
  lineHeight: 1.25,
  fontSizes: [
    {
      breakpoint: "tablet",
      fontSize: 110,
    },
    {
      breakpoint: "laptop",
      fontSize: 120,
    },
    {
      breakpoint: "desktop",
      fontSize: 130,
    },
  ],
};

/**
 * Defines the styles.
 */
const container = (theme) => {
  return {
    fontSize: `${theme.typography.setup.fontSize}%`,
    lineHeight: theme.typography.setup.lineHeight,
    //...theme.typography.helpers.responsiveFontSizes,
    "--lem": `${theme.typography.helpers.lem}em`,
  };
};

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = (props) => {
  const theme = useTheme();

  /**
   * Loads the styles.
   */
  const { containerKlass } = useStyles([container], theme);

  return (
    <Helmet>
      <body className={cx("Body", containerKlass)} />
    </Helmet>
  );
};

Setup.propTypes = propTypes;
Setup.defaultProps = defaultProps;

export default Setup;
export { propTypes as SetupPropTypes, defaultProps as SetupDefaultProps };
