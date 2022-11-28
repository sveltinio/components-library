# Card

## Properties

The `Card` component exposes the following properties:

| Property | Type   | Required | Default      | Description                                       |
| :------- | :----: | :------: | :----------: | :------------------------------------------------ |
| styles   | Object |   no     | empty object | Used to pass CSS variables to apply custom styles |

```html
<script>
   import { base } from '$app/paths';
   import { Card, CardTitle, CardCover, CardContent, CardButton, CardMetadata } from '@sveltinio/widgets';
</script>

<Card>
    <CardTitle>Getting Started</CardTitle>
    <CardCover src="path_to_image_file" alt="text here" />
    <CardContent>Some text here...</CardContent>
    <CardButton label="Read More »" href="{base}/posts/getting-started"/>
</CardCover>

<Card>
    <CardTitle>Getting Started</CardTitle>
    <CardMetadata date="28-Nov-2022" />
    <CardContent>Some text here...</CardContent>
    <CardButton label="Read More »" href="{base}/posts/getting-started"/>
</CardCover>

<Card>
    <CardTitle>Getting Started</CardTitle>
    <CardCover src="path_to_image_file" alt="text here" />
    <CardMetadata date="28-Nov-2022" withCover={true}/>
    <CardContent>Some text here...</CardContent>
    <CardButton label="Read More »" href="{base}/posts/getting-started"/>
</CardCover>
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

| CSS Variable           | Default              |                                                              |
| :--------------------- | -------------------: | :----------------------------------------------------------: |
| `min-height`           | `24rem`              | |
| `border-color`         | `rgb(226, 232, 240)` | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |
| `border-style`         | `solid`              | |
| `border-width`         | `1px`                | |
| `border-radius`        | `0.75rem`            | |
| `title-color`          | `rgb(71, 85, 105)`   | ![#475569](https://via.placeholder.com/15/475569/475569.png) |
| `title-font-size`      | `1.5rem`             | |
| `title-font-weight`    | `700`                | |
| `title-line-height`    | `2rem`               | |
| `title-mt`             | `1.25rem`            | |
| `title-mr`             | `1.75rem`            | |
| `title-mb`             | `0`                  | |
| `title-ml`             | `1.75rem`            | |
| `content-width`        | `100%`               | |
| `content-height`       | `auto`               | |
| `content-color`        | `rgb(71, 85, 105)`   | ![#475569](https://via.placeholder.com/15/475569/475569.png) |
| `content-font-size`    | `1rem`               | |
| `content-line-height`  | `1.75rem`            | |
| `content-bg-color`     | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `content-pt`           | `1.75rem`            | |
| `content-pr`           | `1.75rem`            | |
| `content-pb`           | `0`                  | |
| `content-pl`           | `1.75rem`            | |
| `content-mt`           | `0`                  | |
| `content-mr`           | `0`                  | |
| `content-mb`           | `0.75rem`            | |
| `content-ml`           | `0`                  | |
| `btn-wrapper-width`    | `100%`               | |
| `btn-wrapper-height`   | `auto`               | |
| `btn-wrapper-pt`       | `0.5rem`             | |
| `btn-wrapper-pr`       | `1.75rem`            | |
| `btn-wrapper-pb`       | `1.25rem`            | |
| `btn-wrapper-pl`       | `1.75rem`            | |
| `btn-wrapper-mt`       | `0`                  | |
| `btn-wrapper-mr`       | `0`                  | |
| `btn-wrapper-mb`       | `6px`                | |
| `btn-wrapper-ml`       | `0`                  | |
| `btn-cursor`           | `pointer`            | |
| `btn-color`            | `rgb(255, 255, 255)` | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) |
| `btn-font-size`        | `0.875rem`           | |
| `btn-font-weight`      | `500`                | |
| `btn-line-height`      | `1rem`               | |
| `btn-letter-spacing`   | `0.05em`             | |
| `btn-text-align`       | `center`             | |
| `btn-text-decoration`  | `none`               | |
| `btn-bg-color`         | `rgb(71 85 105)`     | ![#475569](https://via.placeholder.com/15/475569/475569.png) |
| `btn-pt`               | `0.5rem`             | |
| `btn-pr`               | `0.75rem`            | |
| `btn-pb`               | `0.5rem`             | |
| `btn-pl`               | `0.75rem`            | |
| `btn-border-color`     | `rgb(100, 116, 139)` | ![#64748b](https://via.placeholder.com/15/64748b/64748b.png) |
| `btn-border-style`     | `solid`              | |
| `btn-border-width`     | `1px`                | |
| `btn-border-radius`    | `0.375rem`           | |
| `badger-color`         | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `badge-bg-color`       | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `badge-font-size`      | `0.875rem`           | |
| `badge-font-weight`    | `600`                | |
| `badge-line-height`    | `1.25rem`            | |
| `badge-text-transform` | `uppercase`          | |
| `badge-border-radius`  | `9999px`             | |
| `badge-pt`             | `0.5rem`             | |
| `badge-pr`             | `0.1rem`             | |
| `badge-pb`             | `0.5rem`             | |
| `badge-pl`             | `0.1rem`             | |
| `badge-mt`             | `1.25rem`            | |
| `badge-mr`             | `0`                  | |
| `badge-mb`             | `0`                  | |
| `badge-ml`             | `1.85rem`            | |
| `badge-absolute-t`     | `50%`                | |
| `badge-absolute-r`     | `10%`                | |

[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props