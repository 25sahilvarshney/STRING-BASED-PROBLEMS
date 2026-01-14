function FirstNonrepeatingcharacter(str){
    for(let i=0;i<str.length;i++){
        let count=0;
        for(let j=0 ; j<str.length;j++){
            if(str[i]===str[j] && i!==j){
                count++;
            }
            else{
                continue;
            }
        }
        if(count == 0){
            return str[i];
        }
        else{
            continue;
        }

    }
}
console.log(FirstNonrepeatingcharacter("swiss"));