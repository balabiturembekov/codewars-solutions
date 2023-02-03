import nearestSquareNumber from "../../src/8kyu/nearest-square-number/index";

describe("Find nearest square number", () => {
  function testNearestSquareNumber(num) {
    const expected = Math.round(Math.sqrt(num)) ** 2;
    test(`Nearest square number of ${num} is ${expected}`, () => {
      expect(nearestSquareNumber(num)).toBe(expected);
    });
  }

  for (let i = 0; i < 100; i++) {
    testNearestSquareNumber(i);
  }
});
