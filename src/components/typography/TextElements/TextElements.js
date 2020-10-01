import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
const textElements = {
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
 * Displays the component
 */
const TextElements = (props) => {
  return <div className="TextElements">TextElements</div>;
};

TextElements.propTypes = propTypes;
TextElements.defaultProps = defaultProps;

export default TextElements;
export {
  propTypes as TextElementsPropTypes,
  defaultProps as TextElementsDefaultProps,
  textElements,
};
