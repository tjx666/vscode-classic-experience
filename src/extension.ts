import fs from 'fs/promises';
import path from 'path';

import { parse } from 'jsonc-parser';
import vscode from 'vscode';

interface Keybinding {
    key: string;
    mac?: string;
    command: string;
    when?: string;
}

// eslint-disable-next-line unused-imports/no-unused-vars
async function generateKeybindings(extensionPath: string) {
    await vscode.commands.executeCommand('workbench.action.openDefaultKeybindingsFile');

    const keybindings = parse(vscode.window.activeTextEditor!.document.getText()) as Keybinding[];
    const cmdRKeybindings = keybindings.filter((kb) => kb.key.startsWith('cmd+r '));

    // cursor use cmd + r as prefix, we restore to use cmd + k
    // cursor use ctrl + m on windows
    const removedCmdRShortcuts = cmdRKeybindings.map((kb) => {
        return {
            ...kb,
            key: kb.key.replace('cmd+r', 'ctrl+m'),
            mac: kb.key,
            command: `-${kb.command}`,
        };
    });

    // replace cmd + r with cmd + k
    const cmdKKeybindings = cmdRKeybindings.map((kb) => {
        return {
            ...kb,
            key: kb.key.replace('cmd+r', 'ctrl+k'),
            mac: kb.key.replace('cmd+r', 'cmd+k'),
        };
    });

    // cmd + k used as shortcut prefix, remove all 'cmd+k' shortcuts
    // workbench commands is vscode built-in
    const removedCmdKKeybindings = keybindings
        .filter((kb) => kb.key === 'cmd+k' && !kb.command.startsWith('workbench.'))
        .map((kb) => {
            return {
                ...kb,
                key: kb.key.replace('cmd+k', 'ctrl+k'),
                mac: kb.key,
                command: `-${kb.command}`,
            };
        });

    // replace `cmd+k` to `cmd+e`
    const cmdEKeybindings = removedCmdKKeybindings.map((kb) => {
        return {
            ...kb,
            key: 'ctrl+e',
            mac: 'cmd+e',
            command: kb.command.slice(1),
        };
    });

    // extra often used shortcuts in vscode to remove
    const shortcutsToRemoved: Keybinding[] = [
        {
            key: 'shift+ctrl+k',
            mac: 'shift+cmd+k',
            command: '-aipopup.action.modal.generate',
            when: 'editorFocus && !composerBarIsVisible && !composerControlPanelIsVisible',
        },
        {
            key: 'ctrl+l',
            mac: 'cmd+l',
            command: '-aichat.newchataction',
        },
        {
            key: 'shift+ctrl+l',
            mac: 'shift+cmd+l',
            command: '-aichat.insertselectionintochat',
        },
    ];

    const additionalShortcuts = [
        {
            key: 'ctrl+]',
            mac: 'cmd+]',
            command: 'aichat.newchataction',
            when: '!view.workbench.panel.aichat.view.visible',
        },
        {
            key: 'ctrl+]',
            mac: 'cmd+]',
            command: 'aichat.close-sidebar',
            when: 'view.workbench.panel.aichat.view.visible',
        },
        {
            key: 'shift+ctrl+]',
            mac: 'shift+cmd+]',
            command: 'aichat.insertselectionintochat',
        },

        // cursor missing this shortcut
        {
            key: 'ctrl+l',
            mac: 'cmd+l',
            command: 'expandLineSelection',
            when: 'textInputFocus',
        },
    ];

    const keyChordLeader = [
        {
            key: 'ctrl+m',
            mac: 'cmd+r',
            command: '-workbench.action.keychord.leader',
            when: 'false',
        },
    ];

    const resultShortcuts = [
        ...removedCmdRShortcuts,
        ...cmdKKeybindings,
        ...removedCmdKKeybindings,
        ...cmdEKeybindings,
        ...shortcutsToRemoved,
        ...additionalShortcuts,
        ...keyChordLeader,
    ];

    const extensionPackageJsonPath = path.resolve(extensionPath, 'package.json');
    const extensionPackageJson = await fs.readFile(extensionPackageJsonPath, 'utf8');
    const extensionPackageJsonObj = JSON.parse(extensionPackageJson);
    extensionPackageJsonObj.contributes.keybindings = resultShortcuts;
    await fs.writeFile(
        extensionPackageJsonPath,
        JSON.stringify(extensionPackageJsonObj, null, 4),
        'utf8',
    );
}

// eslint-disable-next-line unused-imports/no-unused-vars
export function activate(context: vscode.ExtensionContext) {
    // console.log('Congratulations, your extension "vscode-classic-experience" is now active!');
    // generateKeybindings(context.extensionPath);
}

export function deactivate() {}
