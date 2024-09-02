# Lead Programmer Test Project

This project contains various JavaScript and TypeScript implementations, along with unit tests, for common programming challenges. The project includes a custom _"fish bash"_ logic function, sorting array of numbers, and functions for checking palindromes. The code is organized into separate folders, each containing the function implementation and corresponding unit tests.

## Project Purpose

This project was created to answer the first question of the test for the Lead Programmer recruitment process. The test details can be found at the following link:

[Link Test: https://pastebin.com/u78iPNWc](https://pastebin.com/u78iPNWc)

## Project Structure

- **fishBash/**: Contains the `fishBash.ts` file with the function to print numbers or specific strings based on divisibility rules, and `fishBash.test.ts` for unit testing.
- **sort/**: Contains `sort.ts` with functions for sorting arrays in ascending and descending order without using built-in sort functions, and `sort.test.ts` for unit testing.
- **palindrome/**: Contains `palindrome.ts` with functions to check if a string is a palindrome using both standard and manual methods, and `palindrome.test.ts` for unit testing.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:

```bash
git clone <repository-url>
```

2. **Navigate to the project directory**:

```bash
cd lead-programmer-test-1
```

3. **Install the necessary dependencies**:

```bash
npm install
```

### Running the Tests

This project uses Jest for unit testing. To run the tests, use the following command:

```bash
npm test
```

This will execute all the test cases defined in `fishBash.test.ts`, `sort.test.ts`, and `palindrome.test.ts`.

## Project Details

### Fish Bash Function

- **File**: `fishBash/fishBash.ts`
- **Description**: The `fishBash` function prints numbers from 1 to a given number. If a number is divisible by both 3 and 5, it prints "fish bash"; if divisible only by 3, it prints "fish"; if divisible only by 5, it prints "bash". If the number is not divisible by either, it prints the number itself.
  - **`fishBash(num: number): void`**: Takes a single integer `num` as input and loops through all numbers from 1 to `num`, printing a specific string based on divisibility rules.
  - **Logic**: The function uses a series of conditional checks:
    - If the current number is divisible by both 3 and 5, it prints "fish bash".
    - If divisible by only 3, it prints "fish".
    - If divisible by only 5, it prints "bash".
    - Otherwise, it prints the number itself.
- **Example Usage**:
  - `fishBash(20)` would produce the following output:
    ```
    1
    2
    fish
    4
    bash
    fish
    7
    8
    fish
    bash
    11
    fish
    13
    14
    fish bash
    16
    17
    fish
    19
    bash
    ```
- **Tests**: Defined in `fishBash/fishBash.test.ts`.

### Sort Function

- **File**: `sort/sort.ts`
- **Description**: Contains a single function `sort` that sorts an array of numbers. The function can sort in either ascending or descending order based on the `type` parameter:
  - **`sort(arr: number[], type: "asc" | "desc" = "asc"): number[]`**: Takes an array of numbers as input and sorts it in ascending order if `type` is `"asc"` (default) or in descending order if `type` is `"desc"`.
  - **Logic**: Uses a bubble sort algorithm to compare adjacent elements and swap them if they are out of order, depending on the specified sort type.
- **Example Usage**:
  - Sorting in Ascending Order: `sort([5, 2, 9, 1, 7, 6], "asc")` returns `[1, 2, 5, 6, 7, 9]`.
  - Sorting in Descending Order: `sort([5, 2, 9, 1, 7, 6], "desc")` returns `[9, 7, 6, 5, 2, 1]`.
- **Tests**: Defined in `sort/sort.test.ts`.

### Palindrome Function

- **File**: `palindrome/palindrome.ts`
- **Description**: Contains a function `isPalindrome` to check if a given string is a palindrome (a word, phrase, or sequence that reads the same backward as forward). This implementation manually checks the string by iterating over it.
  - **`isPalindrome(str: string): boolean`**: Takes a string as input, removes spaces, converts it to lowercase, and checks if it reads the same backward. Returns `true` if the string is a palindrome, otherwise returns `false`.
  - **Logic**: The function manually constructs a reversed version of the input string by iterating from the end to the beginning. It then compares the original (processed) string with the reversed string to determine if they are the same.
- **Example Usage**:
  - `isPalindrome("madam")` returns `true`.
  - `isPalindrome("A man a plan a canal Panama")` returns `true` (ignores spaces and is case-insensitive).
  - `isPalindrome("hello")` returns `false`.
- **Tests**: Defined in `palindrome/palindrome.test.ts`.
