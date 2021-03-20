import { strict as assert } from "assert";
import * as dateutils from "./dateutils";

context("dateutils", () => {
  it("#dateDiffString", () => {
    assert.equal(dateutils.dateDiffString(-2), "2 days ago");
    assert.equal(dateutils.dateDiffString(-1), "yesterday");
    assert.equal(dateutils.dateDiffString(0), "today");
    assert.equal(dateutils.dateDiffString(1), "tomorrow");
    assert.equal(dateutils.dateDiffString(2), "2 days after");
  });
});
