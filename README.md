# VSCode Keybindings for Cursor

<div align="center">

[![Version](https://img.shields.io/visual-studio-marketplace/v/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items/YuTengjing.vscode-classic-experience/changelog) [![Installs](https://img.shields.io/visual-studio-marketplace/i/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience) [![Rating Star](https://img.shields.io/visual-studio-marketplace/stars/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience&ssr=false#review-details) [![Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/YuTengjing.vscode-classic-experience)](https://github.com/tjx666/vscode-classic-experience)

![CI](https://github.com/tjx666/vscode-classic-experience/actions/workflows/ci.yml/badge.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Github Open Issues](https://img.shields.io/github/issues/tjx666/vscode-classic-experience)](https://github.com/tjx666/vscode-classic-experience/issues) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

</div>

![screenshot](https://github.com/tjx666/vscode-classic-experience/blob/main/assets/screenshot.png?raw=true)

## Features

Seamlessly restore the familiar VSCode keybindings in Cursor with a single installation. This extension brings back the keyboard shortcuts you know and love, enhancing your coding experience without any additional configuration.

Key improvements:

- Removes shortcuts prefixed with `⌘ + R`
- Restores the familiar `⌘ + K` prefixed shortcuts from VSCode
- Adjusts frequently used shortcuts modified by Cursor:
  - `⌘ + K`: Restored as VSCode's prefix shortcut (previously "Open Edit" in Cursor, now `⌘ + E`)
  - `⇧ + ⌘ + K`: Restored as "Delete Line" (previously "Open Edit" in Cursor, now `⌘ + E`)
  - `⌘ + L`: Restored as "Expand Line Selection" (previously "Open New Chat" in Cursor, now `⌘ + ]`)
  - `⇧ + ⌘ + L`: Restored as "Select All Occurrences of Find Match" (previously "Insert Selection Into Chat" in Cursor, now `⌘ + ⇧ + ]`)

```jsonc
{
  // this bring back the original vscode activity bar and side bar layout
  "workbench.activityBar.orientation": "vertical",
}
```

## Alternatives

While you can restore the `⌘ + K` keybinding prefix by changing the `workbench.action.keychord.leader` to `⌘ + K`, this approach has some drawbacks:

1. It adds numerous keybindings to your `keybindings.json`, making it harder to manage.
2. It doesn't address other frequently used keybindings modified by Cursor, such as `⌘ + L`.

This extension provides a more comprehensive and manageable solution to restore VSCode-like keybindings in Cursor.

![keychord leader](https://github.com/tjx666/vscode-classic-experience/blob/main/assets/keychored_leader.png?raw=true)

## Known Issues

As this extension has been primarily developed and tested on macOS, compatibility with Windows and Linux systems has not been thoroughly verified. However, it is expected that most keybindings should work across platforms. If you encounter any issues or discrepancies on Windows or Linux, please don't hesitate to open an issue or submit a pull request. Your feedback and contributions are greatly appreciated to help improve cross-platform compatibility.

## My extensions

- [Open in External App](https://github.com/tjx666/open-in-external-app)
- [Package Manager Enhancer](https://github.com/tjx666/package-manager-enhancer)
- [VSCode archive](https://github.com/tjx666/vscode-archive)
- [Neo File Utils](https://github.com/tjx666/vscode-neo-file-utils)
- [VSCode FE Helper](https://github.com/tjx666/vscode-fe-helper)
- [Power Edit](https://github.com/tjx666/power-edit)

Check all here: [publishers/YuTengjing](https://marketplace.visualstudio.com/publishers/YuTengjing)
