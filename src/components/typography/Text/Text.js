import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { startCase } from "lodash";

/**
 * Imports other components and hooks
 */
import { headings } from "../Headings";
import { spacingMarginTop } from "../Spacing";
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
 * Defines the prop types
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
 * Defines the default props
 */
const defaultProps = {
  variant: "default",
  as: "div",
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  default: (props) => ({
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Light"),
  }),

  body: (props) => ({
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...theme.typography.maxWidth("Nimbus Sans Regular"),
    ...spacingMarginTop,
    ...headings({
      font: "Nimbus Sans Medium",
      scale: 0,
      theme: theme,
    }),
  }),

  longform: (props) => ({
    ...theme.typography.scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...theme.typography.maxWidth("Nimbus Sans Regular"),
    ...spacingMarginTop,
    ...headings({
      font: "Nimbus Sans Regular",
      lineHeight: 1,
      theme: theme,
    }),
    ...textElements,
  }),

  title: {
    ...theme.typography.scale(1),
  },
}));

/**
 * Displays the component
 */
const Text = (props) => {
  const { variant, as, children } = props;

  const {
    default: defaultKlass,
    body: bodyKlass,
    title: titleKlass,
    longform: longformKlass,
  } = useStyles(props);

  /**
   * Finds the required class.
   */
  const klasses = [defaultKlass, bodyKlass, longformKlass, titleKlass];
  const index = variants.findIndex((item) => item === variant);
  const props2 = {
    className: clsx(klasses[index], `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
export { propTypes as TextPropTypes, defaultProps as TextDefaultProps };
