import { strict as assert } from "assert";
import { MyDateTime } from "./MyDateTime";

describe("MyDateTime", () => {
  describe("constructor", () => {
    it("initializes with the given date string", () => {
      const date = new MyDateTime("2024-01-01");
      assert.equal(date.format("YYYY-MM-DD"), "2024-01-01");
    });
  });

  describe("#add", () => {
    context("when unit is 'day'", () => {
      it("adds days", () => {
        const date = new MyDateTime("2024-01-01");
        const newDate = date.add(1, "day");
        assert.equal(newDate.format("YYYY-MM-DD"), "2024-01-02");
      });
    });

    context("when unit is 'month'", () => {
      it("adds months", () => {
        const date = new MyDateTime("2024-01-01");
        const newDate = date.add(1, "month");
        assert.equal(newDate.format("YYYY-MM-DD"), "2024-02-01");
      });
    });

    context("when unit is 'year'", () => {
      it("adds years", () => {
        const date = new MyDateTime("2024-01-01");
        const newDate = date.add(1, "year");
        assert.equal(newDate.format("YYYY-MM-DD"), "2025-01-01");
      });
    });
  });

  describe("#format", () => {
    it("formats the date according to the given pattern", () => {
      const date = new MyDateTime("2024-01-01");
      assert.equal(date.format("YYYY/MM/DD"), "2024/01/01");
    });
  });
});
