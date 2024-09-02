// Palindrome Function without Javascript reverse function
export function isPalindrome(str: string): boolean {
  // Remove all spaces and convert the string to lowercase
  str = str.toLowerCase().replace(/\s/g, "");

  // Define a variable to store the reversed string
  let reversedStr = "";

  // Loop through the string and add each character to the reversed string
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversedStr += str[i];
  }

  // Return true if the string is equal to the reversed string
  return str === reversedStr;
}

// Call the Palindrome function
console.log(isPalindrome("madam"));
