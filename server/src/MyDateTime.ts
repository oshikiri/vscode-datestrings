import * as dayjs from "dayjs";

/**
 * A wrapper around the dayjs library to provide a simplified interface for date manipulation.
 * This wraps dayjs for ease of testing and potential future extensions or replacements.
 */
export class MyDateTime {
  private dayjsInstance: dayjs.Dayjs;

  /**
   * Initializes a new MyDateTime instance.
   *
   * @param date - The date to wrap. Can be:
   *  - a date string
   *  - undefined (which will use the current date and time)
   */
  constructor(date?: string) {
    this.dayjsInstance = dayjs(date);
  }

  add(value: number, unit: string): MyDateTime {
    const newDateTime = new MyDateTime();
    newDateTime.dayjsInstance = this.dayjsInstance.add(
      value,
      convertToDayJsUnit(unit),
    );
    return newDateTime;
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
