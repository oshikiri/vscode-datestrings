import * as dateutils from "./dateutils";

test("dateDiffString", () => {
  expect(dateutils.dateDiffString(-2)).toBe("2 days ago");
  expect(dateutils.dateDiffString(-1)).toBe("1 days ago");
  expect(dateutils.dateDiffString(0)).toBe("today");
  expect(dateutils.dateDiffString(1)).toBe("1 days after");
  expect(dateutils.dateDiffString(2)).toBe("2 days after");
});
