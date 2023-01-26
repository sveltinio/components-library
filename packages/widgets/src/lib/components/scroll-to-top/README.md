# ScrollToTopButton

ScrollToTopButton components helps to scroll to the top of the page.

## Usage

Ensure to have `id="top"` set on the `body` tag or the main wrapper

```html
<body id="top">
   <div>%sveltekit.body%</div>
</body>
```

```html
<script lang="ts">
   import { ScrollToTopButton } from '@sveltinio/widgets';
   import DummyIcon from '../_DummyIcon.svelte';
</script>

<!-- Default -->
<ScrollToTopButton />

<!-- Set position on page -->
<ScrollToTopButton showOnPx={200} />

<!-- Custom icon-->
<ScrollToTopButton>
    <DummyIcon slot="icon" />
</ScrollToTopButton>
```

## Properties

The `ScrollToTopButton` component exposes the following properties:

| Property  | Type    | Required | Default                                                      | Description                         |
| :-------- | :-----: | :------: | :----------------------------------------------------------: | :---------------------------------- |
| iconColor | string  |    no    | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) |                                     |
| fillColor | string  |    no    | ![#4b5563](https://via.placeholder.com/15/4b5563/4b5563.png) |                                     |
| showOnPx  | number  |    no    | `400px`                                                      | Position of page to show the button |
| bounce    | boolean |   no     | `true`                                                       | bounce animation                    |

### Styles

| Property  | Type   | Required | Default | Description                                       |
| :-------- | :----: | :------: | :-----: | :------------------------------------------------ |
| styles    | Object |    no    |   `{}`  | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md).
