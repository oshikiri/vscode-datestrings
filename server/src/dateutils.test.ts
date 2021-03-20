import { strict as assert } from "assert";
import * as dateutils from "./dateutils";

context("dateutils", () => {
  it("#dateDiffString", () => {
    assert.equal(dateutils.dateDiffString(-2), "2 days ago");
    assert.equal(dateutils.dateDiffString(-1), "1 days ago");
    assert.equal(dateutils.dateDiffString(0), "today");
    assert.equal(dateutils.dateDiffString(1), "1 days after");
    assert.equal(dateutils.dateDiffString(2), "2 days after");
  });
});
