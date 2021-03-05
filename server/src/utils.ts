// FIXME: assertion to negative args
export function range(from: number, to: number): number[] {
  const negatives = Array.from(Array(from).keys())
    .slice(1)
    .map((x) => -x)
    .reverse();
  const positives = Array.from(Array(to).keys()).slice(1);
  return [...negatives, 0, ...positives];
}
