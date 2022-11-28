# ScrollToTopButton

## Properties

The `ScrollToTopButton` component exposes the following properties:

| Property  | Type   | Required | Default                                                      | Description |
| :-------- | :----: | :------: | :----------------------------------------------------------: | :---------- |
| iconColor | string |    no    | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) | |
| fillColor | string |    no    | ![#4b5563](https://via.placeholder.com/15/4b5563/4b5563.png) | |
| showOnPx  | number |    no    | 400                                                          | |

```html
<script lang="ts">
   import { ScrollToTopButton } from '@sveltinio/widgets';
   import DummyIcon from '../_DummyIcon.svelte';
</script>

<ScrollToTopButton />
<ScrollToTopButton showOnPx={200} />
<ScrollToTopButton>
    <DummyIcon slot="icon" />
</ScrollToTopButton>
```
