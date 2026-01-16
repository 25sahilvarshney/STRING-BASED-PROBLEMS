function isValidEmail(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("someone@example.com")); 
console.log(isValidEmail("wrong-email@"));        
console.log(isValidEmail("abc@xyz"));            
