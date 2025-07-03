import * as dayjs from "dayjs";

export class MyDateTime {
  private dayjsInstance: dayjs.Dayjs;

  /**
   * Initializes a new MyDateTime instance.
   *
   * @param date - The date to wrap. Can be:
   *   - a date string
   *
   *   If omitted, the current date and time will be used.
   */
  constructor(date?: string | number | Date | dayjs.Dayjs) {
    this.dayjsInstance = dayjs(date);
  }

  add(value: number, unit: string): MyDateTime {
    return new MyDateTime(
      this.dayjsInstance.add(value, convertToDayJsUnit(unit)),
    );
  }

  format(formatString: string): string {
    return this.dayjsInstance.format(formatString);
  }
}

/**
 * Converts a string unit to a dayjs ManipulateType.
 * @param unit - The unit string (e.g., 'day', 'month', 'year').
 * @returns The corresponding dayjs ManipulateType.
 * @throws Error if the unit is unsupported.
 */
/**
 * Converts a string unit to a dayjs ManipulateType.
 * @param unit - The unit string (e.g., 'day', 'month', 'year').
 * @returns The corresponding dayjs ManipulateType.
 * @throws Error if the unit is unsupported.
 */
function convertToDayJsUnit(unit: string): dayjs.ManipulateType {
  switch (unit) {
    case "day":
      return "day";
    case "month":
      return "month";
    case "year":
      return "year";
    default:
      throw new Error(`Unsupported unit: ${unit}`);
  }
}
