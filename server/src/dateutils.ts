import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import dayjs = require("dayjs");

export function dateDiffString(diff: number): string {
  if (diff == 0) {
    return "today";
  } else if (diff > 0) {
    return `${diff} days after`;
  }
  return `${-diff} days ago`;
}

export function createCompletionItem(
  today: dayjs.Dayjs,
  diff: number,
  dayjsFormat: string
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
