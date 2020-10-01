import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import "./Font.css";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The name of the font to be used.
   * @type {string}
   */
  name: PropTypes.string,
  /**
   * The list of available fonts
   * @type {array}
   */
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      familyName: PropTypes.string,
      children: PropTypes.any,
    })
  ),
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "Default",
  fonts: [
    {
      /**
       * The default font.
       * Monospace is not suitable for the default font. It breaks the grid because it's smaller than a regular font.
       */
      name: "Default",
      familyName: "inherit",
    },
    {
      name: "Galapagos B Trial Black",
      familyName: "GalapagosBTrial-Black",
    },
    {
      name: "Nimbus Sans Regular",
      familyName: "nimbus-sans",
    },
  ],
};

/**
 * Returns the `familyName` CSS value for a font
 * @param  {object} props The props identifying a font familyName
 * @return {string}       The font familyName
 */
const getFontFamily = (props) => {
  const { name } = props;
  const { fonts } = defaultProps;

  const font = fonts.find((item) => item.name === name);

  return font?.familyName ? font.familyName : "inherit";
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {
    fontFamily: (props) => props.fontFamily,
  },
}));

/**
 * Displays children inside a font container.
 * Don't use this component directly. Instead use `<Typography>`.
 */
const Font = (props) => {
  const { children } = props;
  const fontFamily = getFontFamily(props);
  const { container } = useStyles({ fontFamily: fontFamily });

  if (!children) return null;

  return <div className={clsx("Font", container)}>{children}</div>;
};

Font.propTypes = propTypes;
Font.defaultProps = defaultProps;

export default Font;
export {
  propTypes as FontPropTypes,
  defaultProps as FontDefaultProps,
  getFontFamily,
};
