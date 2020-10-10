/**
 * Draws a set of normalized borders.
 * Overlapping borders are not displayed.
 */
const normalized = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
    },

    left: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomWidth: `${props.width * 3}${props.unit}`,
    },

    right: {
      borderTop: props.border,
      borderBottom: props.border,
    },

    top: {},
    bottom: {},
  };
};

export { normalized };
