function findDuplicates(str) {
  const count = {};
  const duplicates = [];
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] === 2) {
      duplicates.push(char);
    }
  }
  return duplicates;
}
console.log(findDuplicates("programming"));