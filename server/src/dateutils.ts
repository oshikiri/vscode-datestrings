import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import * as dayjs from "dayjs";

export function dateDiffString(diff: number): string {
  let dateDescription = "";
  if (diff < -1) {
    dateDescription = `${-diff} days ago`;
  } else if (diff == -1) {
    dateDescription = "yesterday";
  } else if (diff == 0) {
    dateDescription = "today";
  } else if (diff == 1) {
    dateDescription = "tomorrow";
  } else if (diff > 1) {
    dateDescription = `${diff} days after`;
  }
  return dateDescription;
}

export function createCompletionItem(
  today: dayjs.Dayjs,
  diff: number,
  dayjsFormat: string,
): CompletionItem {
  const day = today.add(diff, "day");
  const label = day.format(dayjsFormat);
  const documentation = [day.format("dddd"), dateDiffString(diff)].join("\n");
  return {
    label,
    kind: CompletionItemKind.Text,
    documentation,
    data: 1,
  };
}
