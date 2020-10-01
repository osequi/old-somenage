import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const propTypes = {
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
  fonts: [
    {
      /**
       * The default font.
       * Monospace is not suitable for the default font. It breaks the grid because it's smaller than a regular font.
       */
      name: "Inherit",
      familyName: "inherit",
      children: null,
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
