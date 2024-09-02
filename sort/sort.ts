// Sort Ascending Function
export function sort(arr: number[], type: "asc" | "desc" = "asc"): number[] {
  // Get the length of the array
  let n = arr.length;

  // Loop through the array
  for (let i = 0; i < n - 1; i++) {
    // Loop through the array again with the next index
    for (let j = 0; j < n - 1 - i; j++) {
      // Check if the type is "asc"
      if (type === "asc") {
        // If the current element is greater than the next element
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else {
        // If the current element is less than the next element
        if (arr[j] < arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}

const numArray = [5, 2, 9, 1, 7, 6];

// Call the sort function in Ascending order
console.log(sort(numArray, "asc"));
// Call the sort function in Descending order
console.log(sort(numArray, "desc"));
