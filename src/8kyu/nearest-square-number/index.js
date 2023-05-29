const nearestSquareNumber = (num) => {
  const result = Math.round(Math.sqrt(num));
  return result ** 2;
};

export default nearestSquareNumber;
