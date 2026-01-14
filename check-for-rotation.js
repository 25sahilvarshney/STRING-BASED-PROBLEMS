const str1="ABCD";
const str2="CDAB";
const checkRotation = (s1,s2)=>{
    if(s1.length !== s2.length){
        return false;
    }
    const concatenated = s1 + s1;
    return concatenated.includes(s2);
}
console.log(checkRotation(str1 ,str2));