const reverseWordsInSentence = (sentence) => {
    return sentence.split(' ').reverse().join(' ');
};

console.log(reverseWordsInSentence("JAVA IS FUN"));