# Tweet

Easily embed tweets in your pages. The `Tweet` component supports all the [available](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference) customization settings  through the [settings](#properties) property.

## Usage

### Default Settings

```html
<script>
    import { Tweet } from '@sveltinio/media-content/tweet';
</script>

<Tweet id="1494008909585125381" />
```

### Custom Settings

```html
<script lang="ts">
    import { Tweet } from '@sveltinio/media-content/tweet';
    import type { ITweetSettings } from '@sveltinio/media-content/types';

    const tSettings: ITweetSettings = {
        theme: 'dark'
    };
</script>

<Tweet id="1494008909585125381" settings="{tSettings}" />
```

## Properties

The `Tweet` component exposes the following properties:

| Property | Type             | Required | Default | Description                                              |
| :------- | :--------------: | :------: | :-----: | :------------------------------------------------------- |
| id       | `string`         |   yes    |         | The id for the tweet to embed.                           |
| settings | `ITweetSettings` |    no    |   `{}`  | To control how the tweet is embedded, looks and behaves. |

[ITweetSettings] helps controlling how the embedded tweet looks and behaves. It defines the properties as per [Embed Tweet] documentation.

```typescript
interface ITweetSettings {
    /**
     * When set to hidden, links in a Tweet are not expanded to photo,
     * video, or link previews.
     *
     * Supported values: visible and hidden.
     */
    cards?: string;
    /**
     * When set to none, only the cited Tweet will be displayed even if
     * it is in reply to another Tweet.
     *
     * Supported values: all and none.
     */
    conversation?: string;
    /**
     * When set to dark, displays Tweet with light text over a dark background.
     *
     * Supported values: dark and light.
     */
    theme?: string;
}
```

[ITweetSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L226-L247
[Embed Tweet]: https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
