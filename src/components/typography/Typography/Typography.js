import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { startCase } from "lodash";

/**
 * Imports other components and hooks
 */
import { font } from "../Fonts";
import { scale } from "../Scale";
import { spacingMarginTop } from "../Spacing";
import { maxWidth } from "../MaxWidth";
import { headings } from "../Headings";
import { textElements } from "../TextElements";

/**
 * Defines the text types.
 * Each text type is standalone an unique, defined by a font face, scale, colors etc.
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
   * Preferably inside a Semantic Element
   * @type {func}
   */
  component: PropTypes.func,
  /**
   * What to display
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  variant: "default",
  component: "div",
  children: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  default: (props) => ({
    ...scale(0),
    ...font("Nimbus Sans Light"),
  }),

  body: (props) => ({
    ...scale(0),
    ...font("Nimbus Sans Regular"),
    ...maxWidth({ fontName: "Nimbus Sans Regular" }),
    ...spacingMarginTop,
    ...headings({ fontName: "Nimbus Sans Medium", scale: 0 }),
  }),

  longform: (props) => ({
    ...scale(0),
    ...font("Nimbus Sans Regular"),
    ...maxWidth({ fontName: "Nimbus Sans Regular" }),
    ...spacingMarginTop,
    ...headings({ fontName: "Nimbus Sans Regular", modularScale: {} }),
    ...textElements,
  }),

  title: {
    ...scale(1),
  },
}));

/**
 * Displays the component
 */
const Typography = (props) => {
  const { variant, component, children } = props;
  const { default: defaultKlass, body, title, longform } = useStyles({
    ...props,
    scale: scale,
  });

  const klasses = [defaultKlass, body, longform, title];
  const index = variants.findIndex((item) => item === variant);
  const props2 = {
    className: clsx(klasses[index], `Typography${startCase(variant)}`),
  };

  return createElement(component, props2, children);
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
export {
  propTypes as TypographyPropTypes,
  defaultProps as TypographyDefaultProps,
};
