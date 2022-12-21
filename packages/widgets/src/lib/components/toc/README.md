# TOC

## Examples

### Default

<img src="./assets/images/default.gif" alt="TOC - Default Styles" />

<details><summary>Source Code</summary>

```html
<script>
    import { TOC } from '@sveltinio/widgets';
</script>

<TOC data={tocEntries} />
```

</details>

### Ordered

<img src="./assets/images/ordered.gif" alt="TOC - Ordered List" />

<details><summary>Source Code</summary>

```html
<script>
    import { TOC } from '@sveltinio/widgets';
</script>

<TOC data={tocEntries} ordered />
```

</details>

### Icon Only

<img src="./assets/images/icon-only.gif" alt="TOC - Icon Only" />

<details><summary>Source Code</summary>

```html
<script>
    import { TOC } from '@sveltinio/widgets';
</script>

<TOC data={tocEntries} iconOnly />
```

</details>

## Properties

The `TOC` component exposes the following properties:

| Property   | Type             | Required | Default           | Description                                       |
| :--------- | :--------------: | :------: | :---------------: | :------------------------------------------------ |
| data       | `Array<TocEntry>`|   yes    |                   | The data tree to be rendered                      |
| label      | string           |   no     | Table of Contents | The text to be showed on the button               |
| full       | boolean          |   no     | true              | If false, only level 1 and 2 will be rendered     |
| iconOnly   | boolean          |   no     | false             | If true, the label is not rendered                |
| labelOnly  | boolean          |   no     | false             | If true, the icon is not rendered                 |
| prefixChar | string           |   no     | #                 | Prepend char to the list items                    |
| ordered    | boolean          |   no     | false             | If true, on ordered list will be used             |
| theme      | string           |   no     |                   | The css class name used to make a theme variant   |
| styles     | Object           |   no     | `{}`              | Used to pass CSS variables to apply custom styles |

**data** is an array of `TocEntry` objects:

```typescript
type TocEntry = {
   id?: string;
   depth: number;
   value?: string;
   children?: Array<TocEntry>;
};
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md).

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
