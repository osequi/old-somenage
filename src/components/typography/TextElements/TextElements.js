import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {
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
  children: null,
};

/**
 * Defines the styles.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
const textElements = {
  label: "TextElements",
  ["& blockquote"]: {},
  ["& dd"]: {},
  ["& div"]: {},
  ["& dl"]: {},
  ["& dt"]: {},
  ["& figcaption"]: {},
  ["& figure"]: {},
  ["& hr"]: {},
  ["& li"]: {},
  ["& main"]: {},
  ["& ol"]: {},
  ["& p"]: {},
  ["& pre"]: {},
  ["& ul"]: {},
  ["& a "]: { color: "red" },
  ["& abbr"]: {},
  ["& b"]: {},
  ["& bdi"]: {},
  ["& bdo"]: {},
  ["& br"]: {},
  ["& cite"]: {},
  ["& code"]: {},
  ["& data"]: {},
  ["& dfn"]: {},
  ["& em"]: {},
  ["& i"]: {},
  ["& kbd"]: {},
  ["& mark"]: {},
  ["& q"]: {},
  ["& rb"]: {},
  ["& rp"]: {},
  ["& rt"]: {},
  ["& rtc"]: {},
  ["& ruby"]: {},
  ["& s"]: {},
  ["& samp"]: {},
  ["& small"]: {},
  ["& span"]: {},
  ["& strong"]: {},
  ["& sub"]: {},
  ["& sup"]: {},
  ["& time"]: {},
  ["& u"]: {},
  ["& var"]: {},
  ["& wbr"]: {},
  ["& area"]: {},
  ["& audio"]: {},
  ["& img"]: {},
  ["& map"]: {},
  ["& track"]: {},
  ["& video"]: {},
  ["& del"]: {},
  ["& ins"]: {},
  ["& caption"]: {},
  ["& col"]: {},
  ["& colgroup"]: {},
  ["& table"]: {},
  ["& tbody"]: {},
  ["& td"]: {},
  ["& tfoot"]: {},
  ["& th"]: {},
  ["& thead"]: {},
  ["& tr"]: {},
  ["& button"]: {},
  ["& datalist"]: {},
  ["& fieldset"]: {},
  ["& form"]: {},
  ["& input"]: {},
  ["& label"]: {},
  ["& legend"]: {},
  ["& meter"]: {},
  ["& optgroup"]: {},
  ["& option"]: {},
  ["& output"]: {},
  ["& progress"]: {},
  ["& select"]: {},
  ["& textarea"]: {},
  ["& details"]: {},
  ["& dialog"]: {},
  ["& menu"]: {},
  ["& summary"]: {},
};

/**
 * Displays children inside a text elements container.
 * Don't use this component directly. Instead use `<Text>`.
 * @see TextElements.md
 */
const TextElements = (props) => {
  const { children } = props;
  const { textElementsKlass } = useStyles([textElements], props);

  return (
    <div className={cx("TextElements", textElementsKlass)}>{children}</div>
  );
};

TextElements.propTypes = propTypes;
TextElements.defaultProps = defaultProps;

export default TextElements;
export {
  propTypes as TextElementsPropTypes,
  defaultProps as TextElementsDefaultProps,
};
