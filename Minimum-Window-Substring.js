function minWindow(s, t) {
  if (t.length > s.length) return "";
  const countT = {};
  let required = t.length;
  for (let char of t) countT[char] = (countT[char] || 0) + 1;
  
  let formed = 0;
  const windowCounts = {};
  
  let left = 0, right = 0, minLen = Infinity, minWindowSubStr = "";
  
  while (right < s.length) {
    
    let char = s[right];
    windowCounts[char] = (windowCounts[char] || 0) + 1;
    
    if (countT.hasOwnProperty(char) && windowCounts[char] === countT[char]) {
      formed++;
    }
    
    while (left <= right && formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minWindowSubStr = s.substring(left, right + 1);
      }
      
      windowCounts[s[left]]--;
      if (countT.hasOwnProperty(s[left]) && windowCounts[s[left]] < countT[s[left]]) {
        formed--;
      }
      left++;
    }
    
    right++;
  }
  return minWindowSubStr;
}