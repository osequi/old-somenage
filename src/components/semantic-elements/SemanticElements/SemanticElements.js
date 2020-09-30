import React, { createElement } from "react";
import PropTypes from "prop-types";
import { isNil, startCase } from "lodash";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The type of the element.
   * Like `nav`, 'article'
   * @type {string}
   */
  type: PropTypes.oneOf([
    "article",
    "aside",
    "footer",
    "header",
    "heading",
    "nav",
    "section",
  ]),
  /**
   * The heading of the element.
   * Used to insert (a mostly hidden_ heading tag like `<nav><h3>Menu</h3>...</nav>`.
   * It can be overwritten by the `title` and `display` props.
   * @type {HeadingsPropTypes}
   */
  heading: PropTypes.shape(HeadingsPropTypes),
  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * It's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   * @type {string}
   */
  title: PropTypes.string,
  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   * @type {bool}
   */
  display: PropTypes.bool,
  /**
   * The content of the element.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The class name of the element.
   * When the element has `className` set it can be styled by the parent
   * @see https://styled-components.com/docs/basics#styling-any-component
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: null,
  heading: HeadingsDefaultProps,
  title: null,
  display: false,
  children: null,
  className: null,
};

/**
 * Checks for all required props to be set
 * @param  {object} props The props object
 * @return {boolean}      true, when all required props are set
 * // NOTE: This can be moved later to logic.js
 */
const requiredPropsAreSet = (props) => {
  const { children } = props;

  return !isNil(children);
};

/**
 * Sets the className to `startCase(type)` when className is empty
 * @param  {object} props The props object
 * @return {string}       The className
 */
const nonEmptyClassname = (props) => {
  const { className, type } = props;

  /**
   * Returns `ClassName` when `className` and `type` is not defined
   */
  if (!className && !type) return "ClassName";

  return className ? className : startCase(type);
};

/**
 * Displays a semantic element.
 * This is a factory component. It's better to use specific components instead like `<Article>` which has their props properly set up.
 */
const SemanticElements = props => {
  const { type, heading, title, children, display } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become the tag name.
   * Like `Section` for `<section>`.
   */
  const className = nonEmptyClassname(props);

  /**
   * Overwrites the `heading` props.
   */
  const heading2 = { ...heading, children: title, display: display };

  /**
   * Prepares props for createElement
   */
  const props2 = { className: className };
  const children2 = (
    <>
      {<Headings {...heading2} />}
      {children}
    </>
  );

  return createElement(type, props2, children2);
};

SemanticElements.propTypes = propTypes;
SemanticElements.defaultProps = defaultProps;

export default SemanticElements;
export {
  propTypes as SemanticElementsPropTypes,
  defaultProps as SemanticElementsDefaultProps
};
