/**
 * Defines the rotate animation.
 */
const rotate = (props) => {
  return {
    animationName: `$Rotate`,
    animationDuration: (props = props.duration),
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",

    cursor: "pointer",

    ["&:hover"]: {
      animationPlayState: "paused",
    },
  };
};

/**
 * Defines the keyframes for the rotations
 */
const rotateKeyframes = (props) => {
  return {
    "@keyframes Rotate": {
      "0%": { transform: "rotateY(0deg) rotateX(720deg) rotateZ(0deg)" },
      "100%": { transform: "rotateY(360deg) rotateX(0deg) rotateZ(360deg)" },
    },
  };
};

export { rotate, rotateKeyframes };
