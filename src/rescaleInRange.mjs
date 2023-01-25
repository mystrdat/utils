export const rescaleInRange = (val, aMin, aMax, bMin, bMax) => {
  return (val - aMin) * (bMax - bMin) / (aMax - aMin) + bMin;
};
