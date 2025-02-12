// Write a javascript function to validate a united states phone number. Retrun true if valid, false otherwise.
// The only valid phone number format is 1234567890. Use a regex to validate the phone number.
function validatePhoneNumber(phoneNumber) {
  return /^\d{10}$/.test(phoneNumber);
}

console.log(validatePhoneNumber("(123) 456-7890")); // false
console.log(validatePhoneNumber("(123)456-7890")); // false
console.log(validatePhoneNumber("123-456-7890")); // false
console.log(validatePhoneNumber("123.456.7890")); // false
console.log(validatePhoneNumber("1234567890")); // true
console.log(validatePhoneNumber("123456789")); // false
console.log(validatePhoneNumber("12345678901")); // false
console.log(validatePhoneNumber("12345678")); // false
console.log(validatePhoneNumber("1234567")); // false
console.log(validatePhoneNumber("123456")); // false
