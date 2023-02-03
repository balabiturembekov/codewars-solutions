const pigLatinTranslator = (word) => {
  const vowels = "aeiou";
  if (word.length < 2) return word;
  if (!vowels.includes(word[0])) {
    const firstLetter = word.split("").shift();
    const sliceWord = word.slice(1).toLowerCase();
    return `${sliceWord}${firstLetter}ay`;
  }
};

export default pigLatinTranslator;
