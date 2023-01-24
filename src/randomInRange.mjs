export const randomInRange = (min, max, integer = false) => {
  const number = Math.random() * (max - min) + min
  return integer ? Math.floor(number) : number;
};
