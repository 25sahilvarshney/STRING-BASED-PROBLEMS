function permute(str) {
  const result = [];
  function backtrack(chars, curr) {
    if (curr.length === str.length) {
      result.push(curr.join(''));
      return;
    }
    const used = new Set();
    for (let i = 0; i < chars.length; i++) {
      if (used.has(chars[i])) continue;
      used.add(chars[i]);
      chars[i], chars[chars.indexOf(chars[i])];
      const temp = chars[i];
      chars[i] = chars[0];
      chars[0] = temp;
      backtrack(chars.slice(1), curr.concat(chars[0]));
      // backtrack
      chars[0] = chars[i];
      chars[i] = temp;
    }
  }
  backtrack(str.split(''), []);
  return result;
}
console.log