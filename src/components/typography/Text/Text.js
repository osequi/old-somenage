import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { startCase } from "lodash";

/**
 * Imports other components and hooks
 */
import { scale } from "../Scale";
import { spacingMarginTop } from "../Spacing";
import { maxWidth } from "../MaxWidth";
import { headings } from "../Headings";
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
    ...scale(0),
    ...theme.typography.font("Nimbus Sans Light"),
  }),

  body: (props) => ({
    ...scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...maxWidth({ fontName: "Nimbus Sans Regular" }),
    ...spacingMarginTop,
    ...headings({
      fontName: "Nimbus Sans Medium",
      scale: 0,
      theme: theme,
    }),
  }),

  longform: (props) => ({
    ...scale(0),
    ...theme.typography.font("Nimbus Sans Regular"),
    ...maxWidth({ fontName: "Nimbus Sans Regular" }),
    ...spacingMarginTop,
    ...headings({
      fontName: "Nimbus Sans Regular",
      lineHeight: 1,
      theme: theme,
    }),
    ...textElements,
  }),

  title: {
    ...scale(1),
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
  } = useStyles({
    ...props,
    scale: scale,
  });

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
