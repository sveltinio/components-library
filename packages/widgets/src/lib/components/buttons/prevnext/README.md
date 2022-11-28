# PrevNextButtons

## Properties

The `PrevNextButtons` component exposes the following properties:

| Property   | Type   | Required | Default      | Description |
| :--------- | :----: | :------: | :----------: | :---------- |
| prevLabel  | string |    no    |   previous   | |
| prevValue  | string |    yes   |              | |
| prevHref   | string |    yes   |              | |
| prevPrefix | string |    no    |    «         | |
| prevAlt    | string |    no    | `prevLabel`  | |
| nextLabel  | string |    no    |     next     | |
| nextValue  | string |    yes   |              | |
| nextHref   | string |    yes   |              | |
| nextPrefix | string |    no    |    »         | |
| nextAlt    | string |    no    | `nextLabel`  | |
| styles     | Object |    no    | empty object | Used to pass CSS variables to apply custom styles |

```html
<script>
    import { PrevNextButtons } from '@sveltinio/widgets';
</script>

<PrevNextButtons
    prevValue="prev title"
    prevHref="/path_to/previous_slug"
    nextValue="next title"
    nextHref="/path_to/next_slug"
/>
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

| CSS Variable          | Default              |                                                              |
| :-------------------- | -------------------: | :----------------------------------------------------------: |
| `max-width`           | `80rem`              | |
| `text-decoration`     | `none`               | |
| `divider-color`       | `rgb(148, 163, 184)` | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `border-top-color`    | `rgb(100, 116, 139)` | ![#64748b](https://via.placeholder.com/15/64748b/64748b.png) |
| `border-top-style`    | `solid`              | |
| `border-top-width`    | `2px`                | |
| `border-bottom-color` | `transparent`        | |
| `border-bottom-style` | `solid`              | |
| `border-bottom-width` | `0`                  | |
| `link-color`          | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `link-bg-color`       | `transparent`        | |
| `link-bg-color-hover` | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |

### Example

```html
<script>
    import { PrevNextButtons } from '@sveltinio/widgets';
    const customStyles = {
        'border-top-color': '#008C7D',
        'border-top-width': '5px',
        'border-bottom-color': '#A9AD9B',
        'link-color': '#006B70',
        'link-bg-color-hover': '#ECF5CE'
    };
</script>

<PrevNextButtons
    prevValue="prev title"
    prevHref="/path_to/previous_slug"
    nextValue="next title"
    nextHref="/path_to/next_slug"
    styles={customStyles}
/>
```
