# Vimeo

Easily embed Vimeo content in your pages. The `Vimeo` component supports all the [available](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview) customization settings through the [settings](#properties) property.

To load your pages faster, a clickable and responsive thumbnail for the video is embedded (when no `autoplay` setting is provided or it is set to `false`). Upon clicking, it loads the iframe and play the video.

## Usage

### Default Settings

```html
<script>
    import { Vimeo } from '@sveltinio/media-content';
</script>

<Vimeo id="692371260" user="newyorker" title="The Panola Project" />
```

### Custom Settings

```html
<script lang="ts">
    import { Vimeo } from '@sveltinio/media-content';
    import type { IVimeoSettings } from '@sveltinio/media-content/types';

    const vSettings: IVimeoSettings = {
        autoplay: false,
        muted: true,
        portrait: false
    };
</script>

<Vimeo
    id="692371260"
    user="newyorker"
    title="The Panola Project"
    description="Some text here"
    settings="{vSettings}"
/>
```

## Properties

The `Vimeo` component exposes the following properties:

| Property    |      Type      | Required | Default | Description                                                                                                                   |
| :---------- | :------------: | :------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------- |
| id          |     string     |   yes    |         | The id for the content to be embed.                                                                                           |
| user        |     string     |    no    |         | The user who published the content. If provided, the text with a link to Vimeo just below the video player will be displayed. |
| title       |     string     |    no    |         | The content title. If provided, the text with a link to Vimeo just below the video player will be displayed.                  |
| description |     string     |    no    |         | The content description. If provided, the text just below the video player will be displayed.                                 |
| settings    | IVimeoSettings |    no    |  `{}`   | To control how the video is embedded, looks and behaves.                                                                      |

[IVimeoSettings] helps controlling how the embedded video looks and behaves. It defines the properties as per [Player parameters] documentation.

```typescript
export interface IVimeoSettings {
    /** The Vimeo player is designed to play only one Vimeo video at a time. */
    autopause?: boolean;
    /** Automatically start playback of the video. */
    autoplay?: boolean;
    /** Show the author of the video. only if video owner allows. */
    byline?: boolean;
    /**
     * Specify the color of the video controls. Colors may be overridden
     * by the embed settings of the video.
     * Video must be hosted by a Plus account or higher.
     */
    color?: string;
    /**
     * This parameter will hide all elements in the player
     * (play bar, sharing buttons, etc) for a chromeless experience.
     * Video must be hosted by a Plus account or higher.
     */
    controls?: boolean;
    /**
     * Setting this parameter to "true" will block the player from
     * tracking any session data, including all cookies and analytics.
     */
    dnt?: boolean;
    /**
     * Allows for keyboard input to trigger player events.
     * If false, the player will ignore keyboard input.
     * Tabbing will still be supported in either mode.
     */
    keyboard?: boolean;
    /** Play the video again when it reaches the end, infinitely. */
    loop?: boolean;
    /**
     * Set video to mute on load.
     * Viewers can still adjust the volume preferences in the player.
     */
    muted?: boolean;
    /**
     * Show the picture-in-picture button in the control bar and enable the
     * picture-in-picture API.
     */
    pip?: boolean;
    /**
     * Play video inline on mobile devices instead of automatically going
     * into fullscreen mode.
     * Inline playback is enabled for all videos by default.
     */
    playsinline?: boolean;
    /** Show the author’s profile image (portrait) */
    portrait?: boolean;
    /**
     * 240p, 360p, 540p, 720p, 1080p, 2k, 4k, auto.
     * By default, the Vimeo player is set to "Auto" mode, which means it
     * chooses the highest video quality possible, depending on the viewer's
     * bandwidth and other factors in the playback environment.
     * */
    quality?: string;
    /**
     * Show speed controls in the preference menu of the player and enable
     * playback rate API. Video must be hosted by a PRO account or higher.
     * */
    speed?: boolean;
    /** Show the video’s title, only if video owner allows. */
    title?: boolean;
    /** By default, the background of the player iframe is transparent on Vimeo. */
    transparent?: boolean;
}
```

[IVimeoSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L250-L316
[Player parameters]: https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview
