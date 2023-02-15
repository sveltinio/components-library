# Facebook

Easily embed Facebook content (posts or videos) in your pages. The `Facebook` component supports all the available customization settings for [posts](https://developers.facebook.com/docs/plugins/embedded-posts) and [videos](https://developers.facebook.com/docs/plugins/embedded-video-player) through the [settings](#properties) property.

## Usage

### Facebook Post with Default Settings

```html
<script>
    import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook slug="20531316728/posts/10154009990506729/" />
```

### Facebook Post with Custom Settings

```html
<script lang="ts">
    import { Facebook } from '@sveltinio/media-content';
    import { IFacebookSettings } from '@sveltinio/media-content/types';

    const fbSettings: IFacebookSettings = {
        lazy: true,
        width: 400,
        showText: true
    };
</script>

<Facebook slug="20531316728/posts/10154009990506729/" settings="{fbSettings}" />
```

### Facebook Video with Default Settings

```html
<script>
    import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook type="video" slug="FacebookDevelopers/videos/10152454700553553/" />
```

### Facebook Video with Custom Settings

```html
<script lang="ts">
    import { Facebook } from '@sveltinio/media-content';
    import { IFacebookVideoSettings } from '@sveltinio/media-content/types';

    const fbSettings: IFacebookVideoSettings = {
        allowfullscreen: false,
        width: 600,
        autoplay: false,
        showCaptions: true
    };
</script>

<Facebook
    type="video"
    slug="FacebookDevelopers/videos/10152454700553553/"
    settings="{fbSettings}"
/>
```

## Properties

The `Facebook` component exposes the following properties:

| Property        | Type                | Required | Default   | Description                                                                             |
| :-------------- | :-----------------: | :------: | :-------: | :-------------------------------------------------------------------------------------- |
| type            | `string`            |    no    |  `video`  | Embedded content type. Supported values are `post` or `video`.                          |
| id              | `string`            |   yes    |           | The id for the post or the video to embed.                                              |
| langCode        | `string`            |    no    |  `en_US`  | To change the language of the Embedded Video Player.                                    |
| fbScriptVersion | `string`            |    no    |  `16.0`   | The facebook script version to load. It is exposed to easily migrate to newer versions. |
| settings        | `IFacebookSettings` <br/>`IFacebookVideoSettings` |    no    |           | To control which post or video is embedded and how it looks and behaves.                |

[IFacebookSettings] and [IFacebookVideoSettings] help controlling how posts and videos are embedded look and behaves. It defines the properties as per [Embedded Posts] and [Embedded Video Player] documentations.

```typescript
interface IFacebookSettings {
    /**
     * The browser does not render the plugin if it's not close to the viewport and might never be seen
     *
     * Default value: 0 (false).
     */
    lazy?: boolean;
    /**
     * The width of the container.
     *
     * For Post: min. 350 pixel; max. 750 pixel. Leave empty to use fluid width.
     * For Videos: min. 220px. Default value: auto.
     */
    width?: number;
    /**
     * Applied to photo post. Set to true to include the text from the Facebook post, if any.
     *
     * Default value: 0 (false).
     * */
    showText?: boolean;
}

export interface IFacebookVideoSettings extends IFacebookSettings {
    /**
     * Allow the video to be played in fullscreen mode.
     *
     * Default value: 0 (false).
     */
    allowfullscreen?: boolean;
    /**
     * Automatically start playing the video when the page loads. The video will be played without sound (muted).
     * People can turn on sound via the video player controls. This setting does not apply to mobile devices.
     *
     * Default value: 0 (false).
     */
    autoplay?: boolean;
    /**
     * To show captions (if available) by default. Captions are only available on desktop.
     *
     * Default value: 0 (false).
     */
    showCaptions?: boolean;
}
```

[IFacebookSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L147-L167
[IFacebookVideoSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L170-L190
[Embedded Posts]: https://developers.facebook.com/docs/plugins/embedded-posts
[Embedded Video Player]: https://developers.facebook.com/docs/plugins/embedded-video-player
