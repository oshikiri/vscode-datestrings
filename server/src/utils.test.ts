import * as utils from "./utils";

test("range(2, 4)", () => {
  expect(utils.range(2, 4)).toStrictEqual([-1, 0, 1, 2, 3]);
});

test("range(1, 4)", () => {
  expect(utils.range(1, 4)).toStrictEqual([0, 1, 2, 3]);
});

test.skip("range(-1, 1)", () => {
  expect(utils.range(0, 4)).toThrowError();
});
