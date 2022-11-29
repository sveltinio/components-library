# TOC

## Examples

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

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

Below is the CSS variables list to apply your own styles to the component.

| CSS Variable                 | Default              |                                                              |
| :--------------------------- | -------------------: | :----------------------------------------------------------: |
| `min-height`                 | `45px`               | |
| `gap`                        | `4px`                | |
| `font-size`                  | `16px`               | |
| `font-weight`                | `bold`               | |
| `line-height`                | `1.75rem`            | |
| `text-transform`             | `none`               | |
| `box-bg-color`               | `transparent`        | |
| `box-border-color`           | `transparent`        | |
| `box-border-style`           | `none`               | |
| `box-border-weight`          | `0px`                | |
| `box-border-radius`          | `30px`               | |
| `btn-color`                  | `rgb(31, 51, 55)`    | ![#1e293b](https://via.placeholder.com/15/1e293b/1e293b.png) |
| `btn-bg-color`               | `transparent`        | |
| `btn-bg-color-hover`         | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `btn-border-color`           | `transparent`        | |
| `btn-border-style`           | `none`               | |
| `btn-border-weight`          | `0px`                | |
| `btn-border-radius`          | `30px`               | |
| `btn-pt`                     | `0.375rem`           | |
| `btn-pr`                     | `0.625rem`           | |
| `btn-pb`                     | `0.375rem`           | |
| `btn-pl`                     | `0.625rem`           | |
| `list-style-type`            | `none`               | |
| `list-width`                 | `100%`               | |
| `list-bg-color-hover`        | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `list-pt`                    | `10px`               | |
| `list-pr`                    | `0`                  | |
| `list-pb`                    | `0`                  | |
| `list-pl`                    | `20px`               | |
| `item-color`                 | `rgb(71, 85, 105)`   | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `item-text-decoration`       | `none`               | |
| `item-text-decoration-hover` | `none`               | |
| `item-bg-color-hover`        | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `item-pt`                    | `0.25rem`            | |
| `item-pr`                    | `0.25rem`            | |
| `item-pb`                    | `0.25rem`            | |
| `item-pl`                    | `0.25rem`            | |
| `item-mt`                    | `0`                  | |
| `item-mr`                    | `0`                  | |
| `item-mb`                    | `0`                  | |
| `item-ml`                    | `0`                  | |
| `item-border-t-width`        | `1px`                | |
| `item-border-t-style`        | `solid`              | |
| `item-border-t-color`        | `transparent`        | |
| `item-border-r-width`        | `1px`                | |
| `item-border-r-style`        | `solid`              | |
| `item-border-r-color`        | `transparent`        | |
| `item-border-b-width`        | `1px`                | |
| `item-border-b-style`        | `solid`              | |
| `item-border-b-color`        | `transparent`        | |
| `item-border-l-width`        | `1px`                | |
| `item-border-l-style`        | `solid`              | |
| `item-border-l-color`        | `transparent`        | |
| `item-border-radius`         | `0.375rem`           | |

[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
