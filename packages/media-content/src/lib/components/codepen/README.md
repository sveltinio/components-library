# CodePen

Easily embed content from CodePen in your pages. The `CodePen` component supports all the [available](https://blog.codepen.io/documentation/embedded-pens/) customization settings through the [settings](#properties) property.

## Usage

### Default Settings

```html
<script>
   import { CodePen } from '@sveltinio/media-content';
</script>

<CodePen user="alipanick" id="YzZYmoJ" />
```

### Custom Settings

```html
<script lang="ts">
    import { CodePen } from '@sveltinio/media-content';
    import type { ICodePenSettings } from '@sveltinio/media-content/types';

    const cpSettings: ICodePenSettings = {
        height: 500,
        defaultTab: 'result',
        borderColor: '#325E83',
        tabBarColor: '#074f66',
        activeTabColor: '#007482'
    };
</script>

<CodePen user="alipanick" id="ExWOeeo" title="Images Carousel" settings="{cpSettings}" />
```

## Properties

The `CodePen` component exposes the following properties:

| Property |       Type       | Required | Default | Description                                           |
| :------- | :--------------: | :------: | :-----: | :---------------------------------------------------- |
| user     |      string      |   yes    |         | The user who created the pen                          |
| id       |      string      |   yes    |         | The id(slug) for the pen to embed                     |
| title    |      string      |   no     |         | The pen title                                         |
| settings | ICodePenSettings |   no     |   `{}`  | To control how the Pen is embedded, looks and behaves |

[ICodePenSettings] helps controlling how the embedded Pen looks and behaves. It defines the properties as per [Embedded Pens] documentation.

```typescript
export interface ICodePenSettings {
    /** html/css/js/result */
    defaultTab?: string;
    /** height in pixels. */
    height?: number;
    /** run/stop-after-5 */
    animation?: string;
    /** none/thin/thick */
    border?: string;
    /** Hex Color Code. */
    borderColor?: string;
    /** Hex Color Code */
    tabBarColor?: string;
    /** Hex Color Code. */
    tabLinkColor?: string;
    /** Hex Color Code. */
    activeTabColor?: string;
    /** Hex Color Code. */
    activeLinkColor?: string;
    /** Hex Color Code. */
    linkLogoColor?: string;
    /** Added to <iframe> of embed. */
    class?: string;
    customCSSUrl?: string;
    preview?: boolean;
    /** Can be 1, 0.5, or 0.25 */
    zoom?: number;
}
```

[ICodePenSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L8-L35
[Embedded Pens]: https://blog.codepen.io/documentation/embedded-pens/
