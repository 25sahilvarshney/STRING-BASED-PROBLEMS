const inputString = "aaabbc";
let encodingString = "";
let count  = 1;
let previousChar =inputString[0];
for(let i = 1 ; i<inputString.length ; i++){
     if(inputString[i]==previousChar){
            count++;
        }
        else{
            encodingString +=previousChar + count;
            previousChar = inputString[i];
            count = 1;
        }

    }
console.log(encodingString + previousChar + count);
    
