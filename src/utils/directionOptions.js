export const directionVariants = {
  exitToLeft: { x: '-100%', opacity: 0, transition: { duration: 0.2 } },
  exitToRight: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
  exitToMiddle: { opacity: 0, transition: { duration: 0.2 } },
  fromLeft: { opacity: 0, x: '-100%' },
  fromRight: { opacity: 0, x: '100%' },
  fromMiddle: { opacity: 0 },
};
