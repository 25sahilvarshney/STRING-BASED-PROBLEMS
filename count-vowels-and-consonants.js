function VowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).toLowerCase();
        if (char >= 'a' && char <= 'z') {
            if ('aeiou'.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }
    
    return { vowels: vowelsCount, consonants: consonantsCount };
}

console.log(VowelsAndConsonants("Hello World"));