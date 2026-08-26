export const dramaticReveal = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Same as dramaticReveal, but accepts a custom index for staggered grids
export const dramaticRevealStagger = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
    filter: "blur(10px)",
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Default viewport settings to pair with the variants above
export const revealViewport = {
  once: true,
  amount: 0.2,
};
