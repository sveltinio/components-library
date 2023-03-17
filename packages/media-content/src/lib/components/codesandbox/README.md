# CodeSandbox

Easily embed CodeSandbox in your pages. The `CodeSandbox` component supports all the [available](https://codesandbox.io/docs/embedding#generate-an-embed-url) customization settings through the [settings](#properties) property.

## Usage

### Default Settings

```html
<script>
    import { CodeSandbox } from '@sveltinio/media-content/codesandbox';
</script>

<CodeSandbox id="j0y0vpz59" />
```

### Custom Settings

```html
<script lang="ts">
    import { CodeSandbox } from '@sveltinio/media-content/codesandbox';
    import type { ICodeSandboxSettings } from '@sveltinio/media-content/types';

    const csbSettings: ICodeSandboxSettings = {
        hidedevtools: true,
        theme: 'light'
    };
</script>

<CodeSandbox id="j0y0vpz59" height="{500}" settings="{csbSettings}" />
```

## Properties

The `CodeSandbox` component exposes the following properties:

| Property | Type                   | Required | Default | Description                                                |
| :------- | :--------------------: | :------: | :-----: | :--------------------------------------------------------- |
| id       | `string`               |   yes    |         | The id for the sandbox to embed.                           |
| height   | `number`               |    no    |  `400`  | The height of the container.                               |
| settings | `ICodeSandboxSettings` |    no    |  `{}`   | To control how the sandbox is embedded, looks and behaves. |

[ICodeSandboxSettings] helps controlling how the embedded Pen looks and behaves. It defines the properties as per [Embedded CodeSandbox] documentation.

```typescript
interface ICodeSandboxSettings {
    /**
     * Automatically resize the embed to the content (only works on Medium).
     *
     * Default value: 0 (false).
     */
    autoresize?: boolean;
    /**
     * Use CodeMirror editor instead of Monaco (decreases embed size significantly).
     *
     * Default value: 0 (false).
     */
    codemirror?: boolean;
    /**
     * Size in percentage of editor.
     *
     * Default value: 50.
     */
    editorsize?: number;
    /**
     * Use eslint (increases embed size significantly).
     *
     * Default value: 0 (false).
     */
    eslint?: boolean;
    /**
     * Start with the devtools (console) open.
     *
     * Default value: 0 (false).
     */
    expanddevtools?: boolean;
    /**
     * Hide the DevTools bar of the preview.
     *
     * Default value: 0 (false).
     */
    hidedevtools?: boolean;
    /**
     * Font size (in px) of editor.
     *
     * Default value: 0 (false).
     */
    fontsize?: number;
    /**
     * Force a full refresh of frame after every edit.
     *
     * Default value: 0 (false).
     */
    forcerefresh?: boolean;
    /**
     * Hide the navigation bar of the preview.
     *
     * Default value: 0 (false).
     */
    hidenavigation?: boolean;
    /**
     * Which lines to highlight (only works in CodeMirror).
     * Comma separated list of line numbers.
     */
    highlights?: string;
    /**
     * Which url to initially load in address bar.
     *
     * Default value: 0 (false).
     */
    initialpath?: string;
    /**
     * Which module to open by default. Multiple paths comma separated are allowed,
     * in that case we show them as tabs.
     *
     * Default value: entry path.
     */
    module?: string;
    /**
     * Evaluate the file that is open in the editor.
     *
     * The default value is 0 (false).
     */
    moduleview?: boolean;
    /**
     * Which preview window to open by default.
     *
     * Supported values are console, test or browser.
     * Default value: browser.
     */
    previewwindow?: string;
    /**
     * Only load the preview when the user says so.
     *
     * Default value: 0 (false).
     */
    runonclick?: boolean;
    /**
     * Which view to open by default.
     *
     * Supported values: editor, split and preview.
     * Default value: split (preview for small screens).
     */
    view?: string;
    /**
     * Which theme to show for the embed.
     *
     * Supported values: dark and light.
     * Default value: dark.
     */
    theme?: string;
}
```

[ICodeSandboxSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L38-L144
[Embedded CodeSandbox]: https://codesandbox.io/docs/embedding#generate-an-embed-url
