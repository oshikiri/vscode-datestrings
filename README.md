# Autocomplete datestrings

[![Marketplace](https://vsmarketplacebadges.dev/version/oshikiri.datestrings.png)](https://marketplace.visualstudio.com/items?itemName=oshikiri.datestrings) [![Status of test workflow](https://github.com/oshikiri/vscode-datestrings/workflows/test/badge.svg)](https://github.com/oshikiri/vscode-datestrings/actions?query=workflow%3Atest) [![Status of publish workflow](https://github.com/oshikiri/vscode-datestrings/workflows/publish/badge.svg)](https://github.com/oshikiri/vscode-datestrings/actions?query=workflow%3Apublish)

This extension provides completion for recent date strings, such as today, yesterday, and tomorrow, on VS Code.

![Format1: YYYY-MM-DD](./doc/images/YYYY-MM-DD.png)
![Format2: MMMM D, YYYY](./doc/images/MMMM_D_YYYY.png)

## Features

- Autocompletes recent dates, including the past and the future.
- You can configure the range of dates to be suggested (e.g., from 30 days ago to 7 days from now).
- You can customize the date format with any format available in [day.js](https://day.js.org/docs/en/display/format), such as `YYYY-MM-DD` or `MMMM D, YYYY`.

## Configuration

You can configure this extension in your VS Code `settings.json`.

| Setting | Description | Default |
| --- | --- | --- |
| `datestrings.maxDaysBefore` | Specifies how many days ago to include in the completion list. | `27` |
| `datestrings.maxDaysAfter` | Specifies how many days after today to include in the completion list. | `7` |
| `datestrings.dateFormat` | Specifies the date format. See [the day.js documentation](https://day.js.org/docs/en/display/format) for available formats. | `"YYYY/MM/DD"` |

## Installation

1. Launch Visual Studio Code.
2. Open the Extensions view by pressing `Ctrl+Shift+X` (Windows, Linux) or `Cmd+Shift+X` (macOS).
3. Search for `Autocomplete datestrings`.
4. Find the **Autocomplete datestrings** extension and click the **Install** button.

## License

MIT

- This extension is based on [vscode-extension-sample/lsp-sample](https://github.com/microsoft/vscode-extension-samples/tree/master/lsp-sample).
- The icon was taken from [ICOON MONO](https://icooon-mono.com/12572-%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B325/).