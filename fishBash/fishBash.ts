export function fishBash(num: number) {
  for (let i = 1; i <= num; i++) {
    const print =
      i % 3 === 0 && i % 5 === 0
        ? "fish bash"
        : i % 3 === 0
        ? "fish"
        : i % 5 === 0
        ? "bash"
        : i.toString();
    console.log(print);
  }
}

fishBash(20);
