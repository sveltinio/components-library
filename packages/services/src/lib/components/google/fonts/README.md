# GoogleFonts

Type-safe Svelte component to easily use Google Fonts in your Svelte and SvelteKit pages.

## Usage

```html
<script lang="ts">
    import { GoogleFonts } from '@sveltinio/services/google';
    import type { IGoogleFont } from '@sveltinio/services/types';

    const googleFonts: Array<IGoogleFont> = [
        {
            name: 'IBM+Plex+Sans',
            weights: [200, 300, 400, 500, 600, 700]
        },
        {
            name: 'IBM+Plex+Mono',
            weights: [100, 200, 300, 400]
        }
    ];
</script>

<GoogleFonts fonts="{googleFonts}" />
```

## Properties

The `GoogleFonts` component exposes the following properties:

| Property | Type                 | Required | Default | Description           |
| :------- | :------------------: | :------: | :-----: | :-------------------- |
| fonts    | `Array<IGoogleFont>` | yes      |         | Font name and weights |

```typescript
interface IGoogleFont {
    name: string;
    weights: Array<number>;
}
```
