/**
 * Draws all borders
 */
const allBorders = (props) => {
  return {
    front: {
      border: props.border,
    },

    back: {
      border: props.border,
    },

    left: {
      border: props.border,
    },

    right: {
      border: props.border,
    },

    top: {
      border: props.border,
    },

    bottom: {
      border: props.border,
    },
  };
};

export { allBorders };
