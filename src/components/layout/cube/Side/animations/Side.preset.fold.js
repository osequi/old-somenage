/**
 * The 'fold' animation preset
 */
const fold = (props) => {
  return {
    front: {
      animationName: `$FoldFront`,
      animationDuration: "1s",
      animationDelay: "0s",
      animationFillMode: "forwards",
    },

    back: {
      animationName: `$FoldBack`,
      animationDuration: "1s",
      animationDelay: "0s",
      animationFillMode: "forwards",
    },

    left: {
      animationName: `$FoldLeft`,
      animationDuration: "1s",
      animationDelay: "1s",
      animationFillMode: "forwards",
    },

    right: {
      animationName: `$FoldRight`,
      animationDuration: "1s",
      animationDelay: "1s",
      animationFillMode: "forwards",
    },

    top: {
      animationName: `$FoldTop`,
      animationDuration: "1s",
      animationDelay: "2s",
      animationFillMode: "forwards",
    },

    bottom: {
      animationName: `$FoldBottom`,
      animationDuration: "1s",
      animationDelay: "2s",
      animationFillMode: "forwards",
    },
  };
};

/**
 * The keyframes for the animations.
 * They have to be returned outside of the class which is using it.
 */
const foldKeyframes = (props) => {
  return {
    "@keyframes FoldFront": {
      to: {
        transform: `translateZ(calc(${props.parent.width} / 2))`,
      },
    },

    "@keyframes FoldBack": {
      to: {
        transform: `translateZ(calc(-${props.parent.width} / 2))`,
      },
    },

    "@keyframes FoldLeft": {
      to: {
        transform: `rotateY(90deg) translateZ(calc(${props.parent.width} / 2))`,
      },
    },

    "@keyframes FoldRight": {
      to: {
        transform: `rotateY(-90deg) translateZ(calc(${props.parent.width} / 2))`,
      },
    },

    "@keyframes FoldTop": {
      to: {
        transform: `rotateX(90deg) translateZ(calc(${props.parent.width} / 2))`,
      },
    },

    "@keyframes FoldBottom": {
      to: {
        transform: `rotateX(-90deg) translateZ(calc(${props.parent.width} / 2))`,
      },
    },
  };
};

export { fold, foldKeyframes };
