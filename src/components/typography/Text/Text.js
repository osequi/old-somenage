import React, { createElement } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";
import { startCase } from "lodash";

/**
 * Imports other components and hooks.
 */
import { headings } from "../Headings";
// NOTE: Perhaps <TextElements/> should be used instead...
import { textElements } from "../TextElements";

/**
 * Defines the text types.
 * Each text type is standalone and unique, defined by a font face, scale, colors etc.
 * Onlye these text types will be accessible from the app.
 * Accessing and styling directly standard tags like '<H1>' is not recommended.
 * @type {Array}
 */
const variants = ["default", "body", "longform", "title"];

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * What kind of text to display.
   * It's like the `text-style()` mixin from the old framework.
   * Tries to follow the Material UI syntax.
   * @type {string}
   * @see https://github.com/metamn/beat/blob/master/code/framework/design/typography/text-style/text-style.json
   * @see https://material-ui.com/components/typography/#typography
   */
  variant: PropTypes.oneOf(variants),
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.func,
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
  variant: "default",
  as: "div",
  children: null,
};

/**
 * Defines the styles.
 */
const defaultText = (props, theme) => {
  return {
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Light"),
  };
};

const bodyText = (props, theme) => {
  return {
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...theme.typography.maxWidth("Nimbus Sans Regular"),
    ...theme.typography.spacing("Adjacent siblings margin top"),
    ...headings({
      font: "Nimbus Sans Medium",
      scale: 0,
      theme: theme,
    }),
  };
};

const longformText = (props, theme) => {
  return {
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...theme.typography.maxWidth("Nimbus Sans Regular"),
    ...theme.typography.spacing("Adjacent siblings margin top"),
    ...headings({
      font: "Nimbus Sans Regular",
      lineHeight: 1,
      theme: theme,
    }),
    ...textElements,
  };
};

const titleText = (props, theme) => {
  return {
    ...theme.typography.scale(1),
  };
};

/**
 * Displays content inside a Text container.
 * @see Text.md
 */
const Text = (props) => {
  const { variant, as, children } = props;
  const theme = useTheme();

  const {
    defaultTextKlass,
    bodyTextKlass,
    longformTextKlass,
    titleTextKlass,
  } = useStyles([bodyText, longformText, titleText], props, theme);

  /**
   * Finds the required class.
   */
  const klasses = [
    defaultTextKlass,
    bodyTextKlass,
    longformTextKlass,
    titleTextKlass,
  ];
  const index = variants.findIndex((item) => item === variant);
  const props2 = {
    className: cx(klasses[index], `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
export { propTypes as TextPropTypes, defaultProps as TextDefaultProps };
