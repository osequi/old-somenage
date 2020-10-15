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
const container = (props) => {
  return {
    fontSize: `${props.fontSize}%`,
    lineHeight: props.lineHeight,
    "--lem": props.lem,
    //...props.responsiveFontSizes,
  };
};

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = (props) => {
  const { fontSize, fontSizes, lineHeight } = props;
  const theme = useTheme();

  /**
   * Calculates the basic spacing unit, the grid size, in `em`
   * Example: {fontSize: 100%, lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
   */
  const lem = `${(fontSize * lineHeight) / 100}em`;

  /**
   * Prepares the responsive font sizes.
   */
  let responsiveFontSizes = [];
  fontSizes &&
    fontSizes.map((item) => {
      const { breakpoint, fontSize } = item;
      const query = theme.breakpoint(breakpoint);
      responsiveFontSizes[`${query}`] = { fontSize: `${fontSize}%` };
    });

  /**
   * Loads the styles.
   */
  const { containerKlass } = useStyles([container], {
    ...props,
    lem: lem,
    responsiveFontSizes: responsiveFontSizes,
  });

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
