export const rescaleInRange = (val, rangeA, rangeB) => {
  return (val - rangeA[0]) * (rangeB[1] - rangeB[0]) / (rangeA[1] - rangeA[0]) + rangeB[0];
};
