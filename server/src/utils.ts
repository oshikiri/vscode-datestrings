export function range(from: number, to: number): number[] {
  if (from < 0 || to < 0) {
    throw new RangeError("Arguments 'from' and 'to' must be non-negative.");
  }

  const result: number[] = [];

  // Add negative numbers
  for (let i = from; i > 0; i--) {
    result.push(-i);
  }

  // Add zero
  result.push(0);

  // Add positive numbers
  for (let i = 1; i <= to; i++) {
    result.push(i);
  }

  return result;
}
