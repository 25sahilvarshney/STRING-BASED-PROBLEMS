function reverseWordsKeepPunctuation(str) {
  const wordRegex = /[A-Za-z]+/g;
  const words = str.match(wordRegex) || [];
  let wordIndex = words.length - 1;

  return str.replace(wordRegex, () => words[wordIndex--]);
}

console.log(reverseWordsKeepPunctuation("Hello, world!"));

