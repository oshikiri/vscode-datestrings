import { strict as assert } from "assert";

export function range(from: number, to: number): number[] {
  assert.ok(from >= 0, "Argument 'from' is negative");
  assert.ok(to >= 0, "Argument 'to' is negative");

  const negatives = Array.from(Array(from + 1).keys())
    .slice(1)
    .map((x) => -x)
    .reverse();
  const positives = Array.from(Array(to + 1).keys()).slice(1);
  return [...negatives, 0, ...positives];
}
