import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { createCompletionItem } from "./dateutils";
import { range } from "./utils";
import {
  DateStringsConfigurations,
  defaultDateStringsConfigurations,
} from "./configuration";
import { MyDateTime } from "./MyDateTime";

let connection = createConnection(ProposedFeatures.all);
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );

  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
      },
    },
  };
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined,
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders((_event) => {
      connection.console.log("Workspace folder change event received.");
    });
  }
});

let globalSettings: DateStringsConfigurations =
  defaultDateStringsConfigurations;
let documentSettings: Map<
  string,
  Thenable<DateStringsConfigurations>
> = new Map();

function getDocumentSettings(
  resource: string,
): Thenable<DateStringsConfigurations> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "datestrings",
    });
    documentSettings.set(resource, result);
  }
  return result;
}

documents.onDidClose((e) => {
  documentSettings.delete(e.document.uri);
});

async function createSuggestList(uri: string): Promise<CompletionItem[]> {
  const settings = await getDocumentSettings(uri);
  console.log(settings);
  if (settings == undefined) return [] as CompletionItem[];

  const dateDiffRange = range(settings.maxDaysBefore, settings.maxDaysAfter);
  const today = new MyDateTime(
    settings.today === "" ? undefined : settings.today,
  );
  return dateDiffRange.map((diff) =>
    createCompletionItem(today, diff, settings.dateFormat),
  );
}

connection.onCompletion(
  (
    textDocumentPosition: TextDocumentPositionParams,
  ): Promise<CompletionItem[]> =>
    createSuggestList(textDocumentPosition.textDocument.uri),
);

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  return item;
});

documents.listen(connection);
connection.listen();
