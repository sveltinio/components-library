# StackBlitz

Easily embed StackBlitz project in your pages. The `StackBlitz` component supports all the [available](https://developer.stackblitz.com/docs/platform/embedding/) customization settings through the [settings](#properties) property.

#### :warning: Important Note

> StackBlitz only support embedding WebContainer projects in Chromium-based browsers. Read more [here](https://developer.stackblitz.com/docs/platform/browser-support/#embedding).

## Usage

### Default Settings

```html
<script>
    import { StackBlitz } from '@sveltinio/media-content';
</script>

<StackBlitz id="vitejs-vite-z3ukcq" />
```

### Custom Settings

```html
<script>
    import { StackBlitz } from '@sveltinio/media-content';
    import { IStackBlitzSettings } from '@sveltinio/media-content/types';

    const sbSettings: IStackBlitzSettings = {
        ctl: true,
        devtoolsheight: 400
    };
</script>

<StackBlitz id="vitejs-vite-z3ukcq" settings="{sbSettings}" />
```

## Properties

The `StackBlitz` component exposes the following properties:

| Property |        Type         | Required | Default | Description                                                |
| :------- | :-----------------: | :------: | :-----: | :--------------------------------------------------------- |
| id       |       string        |   yes    |         | The id for the project to embed.                           |
| title    |       string        |    no    |         | The project title.                                         |
| settings | IStackBlitzSettings |    no    |   `{}`  | To control how the project is embedded, looks and behaves. |

[IStackBlitzSettings] helps controlling how the embedded project looks and behaves. It defines the properties as per [Embedded Posts] documentation.

```typescript
export interface IStackBlitzSettings {
    /** The default file to have open in the editor. */
    file?: string;
    /** Force embed view regardless of screen size. */
    embed?: boolean;
    /** Hide file explorer pane in embed view. */
    hideExplorer?: boolean;
    /** Hide the browser navigation UI. */
    hideNavigation?: boolean;
    /** Require user to 'click to load' the embed. */
    ctl?: boolean;
    /**
     * Which view to open by default.
     *
     * Supported values: editor and preview.
     */
    view?: string;
    /** Hide the debugging console in the editor preview. */
    hidedevtools?: boolean;
    /** Set the height of the debugging console in the editor preview. */
    devtoolsheight?: number;
    /** The initial URL path (URI encoded) the preview should open. */
    initialpath?: string;
    /**
     * Which theme to show for the embed.
     *
     * Supported values: dark and light.
     * Default value: dark.
     */
    theme?: string;
}
```

[IStackBlitzSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L193-L223
[Embedded Posts]: https://developer.stackblitz.com/docs/platform/embedding/
