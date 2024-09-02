// FishBash Function
export function fishBash(num: number) {
  // Looping from 1 to num
  for (let i = 1; i <= num; i++) {
    const print =
      i % 3 === 0 && i % 5 === 0 // If number is divisible by both 3 and 5
        ? "fish bash"
        : i % 3 === 0 // If number is divisible by 3
        ? "fish"
        : i % 5 === 0 // If number is divisible by 5
        ? "bash"
        : i.toString(); // If number is not divisible by 3 nor 5
    console.log(print); // Print the result
  }
}

fishBash(20);
