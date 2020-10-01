import React, { createElement } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import ms from "modularscale-js";

/**
 * Imports other components and hooks
 */
import { getFont, getFontCss } from "../Fonts";

/**
 * Sets up the Modular Scale
 * @type {object}
 * @see https://github.com/modularscale/modularscale-js
 */
const scale = { base: [1], ratio: 1.333 };

/**
 * Defines the text types.
 * Each text type is standalone an unique, defined by a font face, scale, colors etc.
 * Onlye these text types will be accessible from the app.
 * Accessing and styling directly standard tags like '<H1>' is not recommended.
 * @type {Array}
 */
const variants = ["default", "body", "title"];

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
    fontSize: `${ms(0, props.scale)}em`,
    ...getFontCss(getFont("Nimbus Sans Light")),
  }),

  body: (props) => ({
    fontSize: `${ms(0, props.scale)}em`,
    ...getFontCss(getFont("Nimbus Sans Light")),
    maxWidth: `calc(35*var(--lem))`,
    ["& * + *"]: {
      marginTop: `var(--lem)`,
    },
  }),

  title: {
    fontSize: (props) => `${ms(1, props.scale)}em`,
  },
}));

/**
 * Displays the component
 */
const Typography = (props) => {
  const { variant, component, children } = props;
  const { default: defaultKlass, body, title } = useStyles({
    ...props,
    scale: scale,
  });

  const klasses = [defaultKlass, body, title];
  const index = variants.findIndex((item) => item === variant);
  const props2 = { className: clsx(klasses[index]) };

  return createElement(component, props2, children);
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
export {
  propTypes as TypographyPropTypes,
  defaultProps as TypographyDefaultProps,
};
