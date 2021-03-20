import { strict as assert } from "assert";
import * as utils from "./utils";

context("utils", () => {
  context("#range", () => {
    context("when (2, 4)", () => {
      it("returns -1, ... 3", () => {
        assert.deepEqual(utils.range(2, 4), [-1, 0, 1, 2, 3]);
      });
    });

    context("when (1, 4)", () => {
      it("returns 0, ..., 3", () => {
        assert.deepEqual(utils.range(1, 4), [0, 1, 2, 3]);
      });
    });

    context.skip("when (-1, 1)", () => {
      it("throws", () => {
        assert.throws(() => utils.range(-1, 1));
      });
    });
  });
});
