export interface DateSuggestConfigurations {
  maxDaysBefore: number;
  maxDaysAfter: number;
  dateFormat: string;
  today: string;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
export const defaultDateSuggestConfigurations: DateSuggestConfigurations = {
  maxDaysBefore: 27,
  maxDaysAfter: 7,
  dateFormat: "YYYY/MM/DD",
  today: "",
};
