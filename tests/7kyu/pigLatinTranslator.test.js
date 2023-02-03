import pigLatinTranslator from "../../src/7kyu/pig-latin-translator/index";

describe("Pig latin translator", () => {
  function testWordsLengthLessThan2ReturnWord(word) {
    const expected = "b";
    test("If word length less than 2 return word", () => {
      expect(pigLatinTranslator(word)).toBe(expected);
    });
  }

  function testIfWordBeginsWithConsonant(word) {
    const expected = "illybay";
    test("If a word begins with a consonant, then that first letter is shifted to the end of the word and add 'ay'", () => {
      expect(pigLatinTranslator(word)).toBe(expected);
    });
  }

  testWordsLengthLessThan2ReturnWord("b");
  testIfWordBeginsWithConsonant("billy");
});
