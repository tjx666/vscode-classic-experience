# VSCode Keybindings for Cursor

<div align="center">

[![Version](https://img.shields.io/visual-studio-marketplace/v/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items/YuTengjing.vscode-classic-experience/changelog) [![Installs](https://img.shields.io/visual-studio-marketplace/i/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience) [![Downloads](https://img.shields.io/visual-studio-marketplace/d/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience) [![Rating Star](https://img.shields.io/visual-studio-marketplace/stars/YuTengjing.vscode-classic-experience)](https://marketplace.visualstudio.com/items?itemName=YuTengjing.vscode-classic-experience&ssr=false#review-details) [![Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/YuTengjing.vscode-classic-experience)](https://github.com/tjx666/vscode-classic-experience)

![CI](https://github.com/tjx666/vscode-classic-experience/actions/workflows/ci.yml/badge.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Github Open Issues](https://img.shields.io/github/issues/tjx666/vscode-classic-experience)](https://github.com/tjx666/vscode-classic-experience/issues) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

</div>

![screenshot](https://github.com/tjx666/vscode-classic-experience/blob/main/assets/screenshot.png?raw=true)

## Features

Restore all original VSCode keybindings with a single installation. This extension brings back the familiar keyboard shortcuts you know and love, enhancing your coding experience without any additional configuration.

- remove the shortcuts prefixed with `cmd + r`
- restore the shortcuts prefixed with `cmd + k` which you already learned in vscode
- adjust some often used shortcuts but modified by cursor
  - `cmd + k`: prefix shortcut in vscode, but `Open Edit` in cursor, which changed to `cmd + e`
  - `shift+cmd+k`: `Delete Line` in vscode, but `Open Edit` in cursor, also changed to `cmd + e`
  - `cmd + l`: `Expand Line Selection` in vscode, but `Open New Chat` in cursor, changed to `cmd + ]`
  - `cmd + shift + l`: `Select All Occurrences of Find Match` in vscode, but `Insert Selection Into Chat` in cursor, changed to `cmd + shift + ]`

## Recommended settings

```jsonc
{
  // this bring back the original vscode activity bar and side bar layout
  "workbench.activityBar.orientation": "vertical",
}
```

## My extensions

- [Open in External App](https://github.com/tjx666/open-in-external-app)
- [Package Manager Enhancer](https://github.com/tjx666/package-manager-enhancer)
- [VSCode archive](https://github.com/tjx666/vscode-archive)
- [Neo File Utils](https://github.com/tjx666/vscode-neo-file-utils)
- [VSCode FE Helper](https://github.com/tjx666/vscode-fe-helper)
- [Power Edit](https://github.com/tjx666/power-edit)

Check all here: [publishers/YuTengjing](https://marketplace.visualstudio.com/publishers/YuTengjing)
