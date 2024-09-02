import { sort } from "./sort";

// Sort Ascending Function Tests
describe("Sort Ascending Test", () => {
  // Case : Sort an array of numbers in ascending order
  it("should sort an array of numbers in ascending order", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const expectedOutput = [1, 2, 5, 5, 6, 9];
    expect(sort(input, "asc")).toEqual(expectedOutput);
  });

  // Case : Handle an empty array
  it("should handle an empty array", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(sort(input, "asc")).toEqual(expectedOutput);
  });

  // Case : Handle an array with one element
  it("should handle an array with one element", () => {
    const input = [1];
    const expectedOutput = [1];
    expect(sort(input, "asc")).toEqual(expectedOutput);
  });

  // Case : Handle an array with all identical elements
  it("should handle an array with all identical elements", () => {
    const input = [4, 4, 4, 4];
    const expectedOutput = [4, 4, 4, 4];
    expect(sort(input, "asc")).toEqual(expectedOutput);
  });
});

// Sort Descending Function Tests
describe("Sort Descending Test", () => {
  // Case : Sort an array of numbers in descending order
  it("should sort an array of numbers in descending order", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const expectedOutput = [9, 6, 5, 5, 2, 1];
    expect(sort(input, "desc")).toEqual(expectedOutput);
  });

  // Case : Handle an empty array
  it("should handle an empty array", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(sort(input, "desc")).toEqual(expectedOutput);
  });

  // Case : Handle an array with one element
  it("should handle an array with one element", () => {
    const input = [1];
    const expectedOutput = [1];
    expect(sort(input, "desc")).toEqual(expectedOutput);
  });

  // Case : Handle an array with all identical elements
  it("should handle an array with all identical elements", () => {
    const input = [4, 4, 4, 4];
    const expectedOutput = [4, 4, 4, 4];
    expect(sort(input, "desc")).toEqual(expectedOutput);
  });
});
