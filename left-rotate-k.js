function leftRotate(str, k) {
  const n = str.length;
  if (n === 0) return str;
  k = k % n;
  return str.slice(k) + str.slice(0, k);
}

console.log(leftRotate("abcde", 2)); 
