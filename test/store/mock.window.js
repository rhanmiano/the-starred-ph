export const initState = (innerWidth = 0, innerHeight = 0) => {
  return {
    state: {
      window: {
        innerWidth,
        innerHeight,
      },
    },
  }
}
