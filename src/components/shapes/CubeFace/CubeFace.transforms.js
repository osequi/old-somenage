/**
 * Defines the default transforms for the cuba faces.
 */
const transforms = (props) => {
  return {
    front: {
      transform: `translateZ(calc(${props.width} * 2))`,
    },

    back: {
      transform: `translateZ(calc(-${props.width} * 2))`,
    },

    left: {
      transform: `rotateY(90deg) translateZ(calc(${props.width} * 2))`,
    },

    right: {
      transform: `rotateY(-90deg) translateZ(calc(${props.width} * 2))`,
    },

    top: {
      transform: `rotateX(90deg) translateZ(calc(${props.width} * 2))`,
    },

    bottom: {
      transform: `rotateX(-90deg) translateZ(calc(${props.width} * 2))`,
    },
  };
};

/**
 * Returns a transform for a cube face.
 */
const transform = (props) => {
  const { faceName } = props;

  return transforms(props)[faceName];
};

export default transform;
