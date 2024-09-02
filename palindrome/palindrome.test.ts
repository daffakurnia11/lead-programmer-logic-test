import { isPalindrome } from "./palindrome";

// Palindrome Function Tests
describe("Palindrome", () => {
  // Case : Simple Palindrome
  it("should return true for a simple palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  // Case : Complex Palindrome
  it("should return true for a complex palindrome with spaces and uppercase", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  // Case : Non-Palindrome
  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  // Case : Single Character
  it("should return true for a single character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  // Case : Empty String
  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
