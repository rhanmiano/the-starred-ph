export const initWindow = (innerWidth = 0, innerHeight = 0) => {
  return {
    mockWindow: {
      innerWidth,
      innerHeight,
    },
  }
}
