/**
 * Draws dashed borders on the invisible sides.
 */
const dashedInTheBackground = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
      borderLeftStyle: "dashed",
      borderBottomStyle: "dashed",
    },

    left: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomWidth: `${props.width * 2}${props.unit}`,
    },

    right: {
      borderTop: props.border,
      borderBottom: props.border,
      borderBottomStyle: "dashed",
    },

    top: {},
    bottom: {},
  };
};

export { dashedInTheBackground };
