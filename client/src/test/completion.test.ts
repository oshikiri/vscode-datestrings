import * as vscode from "vscode";
import * as assert from "assert";
import { getDocUri, activate } from "./helper";

describe("when completion is enabled in a ledger file", () => {
  const docUri = getDocUri("completion.ledger");

  context("when dateFormat = undefined (default)", () => {
    it.skip("should return completion list", async () => {
      const settingsUpdate = {
        "datestrings.maxDaysBefore": 2,
        "datestrings.maxDaysAfter": 1,
        "datestrings.today": "2016-01-01",
        "datestrings.dateFormat": "YYYY/MM/DD", // FIXME
      };

      await testCompletion(
        docUri,
        new vscode.Position(0, 0),
        {
          items: [
            {
              label: "2015/12/30",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Wednesday\n2 days ago",
            },
            {
              label: "2015/12/31",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Thursday\nyesterday",
            },
            {
              label: "2016/01/01",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Friday\ntoday",
            },
            {
              label: "2016/01/02",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Saturday\ntomorrow",
            },
          ],
        },
        settingsUpdate,
      );
    });
  });
  context('when dateFormat = "MMMM D, YYYY"', () => {
    it("should return completion list", async () => {
      const settingsUpdate = {
        "datestrings.maxDaysBefore": 2,
        "datestrings.maxDaysAfter": 1,
        "datestrings.today": "2016-01-01",
        "datestrings.dateFormat": "MMMM D, YYYY",
      };

      await testCompletion(
        docUri,
        new vscode.Position(0, 0),
        {
          items: [
            {
              label: "December 30, 2015",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Wednesday\n2 days ago",
            },
            {
              label: "December 31, 2015",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Thursday\nyesterday",
            },
            {
              label: "January 1, 2016",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Friday\ntoday",
            },
            {
              label: "January 2, 2016",
              kind: vscode.CompletionItemKind.Text,
              documentation: "Saturday\ntomorrow",
            },
          ],
        },
        settingsUpdate,
      );
    });
  });
});

async function testCompletion(
  docUri: vscode.Uri,
  position: vscode.Position,
  expectedCompletionList: vscode.CompletionList,
  settingsUpdate: Object,
) {
  await activate(docUri);

  const settings = vscode.workspace.getConfiguration();
  for (const key in settingsUpdate) {
    await settings.update(key, settingsUpdate[key], true);
  }

  // Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
  const actualCompletionList = (await vscode.commands.executeCommand(
    "vscode.executeCompletionItemProvider",
    docUri,
    position,
  )) as vscode.CompletionList;

  assert.strictEqual(
    actualCompletionList.items.length,
    expectedCompletionList.items.length,
  );
  expectedCompletionList.items.forEach((expectedItem, i) => {
    const actualItem = actualCompletionList.items[i];
    assert.strictEqual(actualItem.label, expectedItem.label);
    assert.strictEqual(actualItem.kind, expectedItem.kind);
    assert.strictEqual(actualItem.documentation, expectedItem.documentation);
  });
}
