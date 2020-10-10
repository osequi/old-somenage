/**
 * Defines the rotate animation.
 */
const rotate = (props) => {
  return {
    animation: `$rotate infinite linear`,
    animationDuration: (props = props.duration),

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
    "@keyframes rotate": {
      "0%": { transform: "rotateY(0deg) rotateX(720deg) rotateZ(0deg)" },
      "100%": { transform: "rotateY(360deg) rotateX(0deg) rotateZ(360deg)" },
    },
  };
};

export { rotate, rotateKeyframes };
