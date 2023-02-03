function sumOfIntegersInString(str) {
  let sum = 0;
  let currentNumber = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(char) && char !== " ") {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      sum += currentNumber;
      currentNumber = 0;
    }
  }

  sum += currentNumber;
  return sum;
}

export default sumOfIntegersInString;
