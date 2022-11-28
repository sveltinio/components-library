# TOC

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
| theme      | string           |   no     | blank             | One of: ["blank", "sveltin"]                      |
| styles     | Object           |   no     | empty object      | Used to pass CSS variables to apply custom styles |

```html
<script>
    import { TOC } from '@sveltinio/widgets';
</script>

<!-- Default -->
<TOC data={tocEntries} />

<!-- Ordered -->
<TOC data={tocEntries} ordered={true} />

<!-- Custom Label -->
<TOC data={tocEntries} label="My TOC" />

<!-- Label only -->
<TOC data={tocEntries} labelOnly={true} />

<!-- Icon only -->
<TOC data={tocEntries} iconOnly={true} />

<!-- Open by default -->
<TOC data={tocEntries} isOpen={true} />

<!-- sveltin theme -->
<TOC theme="sveltin" data={tocEntries} prefixChar="#" />
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

| CSS Variable                 | Default              |                                                              |
| :--------------------------- | -------------------: | :----------------------------------------------------------: |
| `min-height`                 | `45px`               |                                                              |
| `gap`                        | `4px`                |                                                              |
| `font-size`                  | `16px`               |                                                              |
| `font-weight`                | `bold`               |                                                              |
| `line-height`                | `1.75rem`            |                                                              |
| `text-transform`             | `none`               |                                                              |
| `box-bg-color`               | `transparent`        |                                                              |
| `box-border-color`           | `transparent`        |                                                              |
| `box-border-style`           | `none`               |                                                              |
| `box-border-weight`          | `0px`                |                                                              |
| `box-border-radius`          | `30px`               |                                                              |
| `btn-color`                  | `rgb(31, 51, 55)`    | ![#1e293b](https://via.placeholder.com/15/1e293b/1e293b.png) |
| `btn-bg-color`               | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `btn-bg-color-hover`         | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `btn-border-color`           | `transparent`        |                                                              |
| `btn-border-style`           | `none`               |                                                              |
| `btn-border-weight`          | `0px`                |                                                              |
| `btn-border-radius`          | `30px`               |                                                              |
| `btn-pt`                     | `3px`                |                                                              |
| `btn-pr`                     | `6px`                |                                                              |
| `btn-pb`                     | `3px`                |                                                              |
| `btn-pl`                     | `6px`                |                                                              |
| `list-style-type`            | `none`               |                                                              |
| `list-bg-color-hover`        | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `list-pt`                    | `10px`               |                                                              |
| `list-pr`                    | `0`                  |                                                              |
| `list-pb`                    | `0`                  |                                                              |
| `list-pl`                    | `20px`               |                                                              |
| `item-color`                 | `rgb(71, 85, 105)`   | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `item-text-decoration`       | `none`               |                                                              |
| `item-text-decoration-hover` | `none`               |                                                              |
| `item-bg-color-hover`        | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `item-pt`                    | `0.25rem`            |                                                              |
| `item-pr`                    | `0.25rem`            |                                                              |
| `item-pb`                    | `0.25rem`            |                                                              |
| `item-pl`                    | `0.25rem`            |                                                              |

[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props