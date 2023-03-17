# YouTube

Easily embed YouTube content (videos and playlist) in your pages. The `YouTube` component supports all [the available](https://developers.google.com/youtube/player_parameters) customization settings through the [settings](#properties) property.

To load your pages faster, a clickable and responsive thumbnail for the video is embedded (when no `autoplay` setting is provided or it is set to `false`). Upon clicking, it loads the iframe and play the video.

## Usage

### Single Video with Default Settings

```html
<script>
    import { YouTube } from '@sveltinio/media-content/youtube';
</script>

<YouTube id="uQntFkK8Z54" title="The Future of html" />
```

### Single Video with Custom Settings

```html
<script lang="ts">
    import { YouTube } from '@sveltinio/media-content/youtube';
    import type { IYouTubeSettings } from '@sveltinio/media-content/types';

    const ytSettings: IYouTubeSettings = {
        autoplay: true,
        fs: true
    };
</script>

<YouTube id="uQntFkK8Z54" title="The Future of html" settings="{ytSettings}" />
```

### Playlist with Default Settings

```html
<script>
    import { YouTube } from '@sveltinio/media-content/youtube';
</script>

<YouTube
    type="playlist"
    id="PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
    title="html Tutorial for Beginners"
/>
```

### Playlist with Custom Settings

```html
<script lang="ts">
    import { YouTube } from '@sveltinio/media-content/youtube';
    import type { IYouTubeSettings } from '@sveltinio/media-content/types';

    const ytSettings: IYouTubeSettings = {
        autoplay: true,
        fs: true
    };
</script>

<YouTube
    type="playlist"
    id="PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
    title="html Tutorial for Beginners"
    settings="{ytSettings}"
/>
```

## Properties

The `YouTube` component exposes the following properties:

| Property | Type               | Required | Default | Description                                                                        |
| :------- | :----------------: | :------: | :-----: | :--------------------------------------------------------------------------------- |
| type     | `string`           |    no    | `video` | Embedded content type. Supported values are `video`, `playlist` or `user_uploads`. |
| id       | `string`           |   yes    |         | The id for the video or playlist to embed.                                         |
| title    | `string`           |   yes    |         | The content title.                                                                 |
| username | `string`           |    no    |         | The user who published the content.                                                |
| settings | `IYouTubeSettings` |    no    |   `{}`  | To control how the video is embedded and how it looks and behaves.                 |

[IYouTubeSettings] helps controlling how the embedded video looks and behaves. It defines the properties as per [Player parameters] documentation.

```typescript
interface IYouTubeSettings {
    /**
     * This parameter specifies whether the initial video will automatically start
     * to play when the player loads.
     *
     * Default value: 0.
     */
    autoplay?: boolean;

    /**
     * This parameter specifies the default language that the player will use to
     * display captions. Set the parameter's value to an ISO 639-1 two-letter language code.
     */
    ccLangPref?: string;

    /**
     * Setting the parameter's value to 1 causes closed captions to be shown by default,
     * even if the user has turned captions off. The default behavior is based on user preference.
     */
    ccLoadPolicy?: boolean;

    /**
     * This parameter specifies the color that will be used in the player's video
     * progress bar to highlight the amount of the video that the viewer has already
     * seen.
     *
     * Supported values are red and white.
     * Default value: red.
     */
    color?: string;

    /**
     * This parameter indicates whether the video player controls are displayed.
     *
     * controls=0 – Player controls do not display in the player.
     * controls=1 (default) – Player controls display in the player.
     */
    controls?: boolean;
    /**
     * Setting the parameter's value to 1 causes the player to not respond to
     * keyboard controls.
     *
     *Default value: 0. It means keyboard controls enabled.
     */
    disablekb?: boolean;
    /**
     * This parameter specifies the time, measured in seconds from the start
     * of the video, when the player should stop playing the video.
     * The parameter value is a positive integer.
     */
    end?: number;
    /**
     * Setting this parameter to 0 prevents the fullscreen button from displaying
     * in the player.
     *
     * Default value: 1. It means fullscreen button in the player.
     */
    fs?: boolean;
    /**
     * Sets the player's interface language.
     * The parameter value is an ISO 639-1 two-letter language code or a fully specified locale.
     */
    hl?: string;
    /**
     * Setting the parameter's value to 1 causes video annotations to be shown by default,
     * whereas setting to 3 causes video annotations to not be shown by default.
     *
     *Default value: 1.
     */
    ivLoadPolicy?: number;
    /** Play the video again when it reaches the end, infinitely. */
    loop?: boolean;
    /**
     * This parameter lets you use a YouTube player that does not show a YouTube logo.
     * Set the parameter value to 1 to prevent the YouTube logo from displaying in the control bar.
     *
     * Note that a small YouTube text label will still display in the upper-right corner of a paused
     * video when the user's mouse pointer hovers over the player.
     */
    modestbranding?: boolean;
    /**
     * This parameter provides an extra security measure for the IFrame API and is only supported for IFrame embeds.
     */
    origin?: string;
    /**
     * This parameter specifies a comma-separated list of video IDs to play.
     * If you specify a value, the first video that plays will be the VIDEO_ID specified in the URL
     * path, and the videos specified in the playlist parameter will play thereafter.
     */
    playlist?: string;
    /**
     * This parameter controls whether videos play inline or fullscreen on iOS.
     *
     * - 0: Results in fullscreen playback. This is currently the default value, though the default is subject to change.
     * - 1: Results in inline playback for mobile browsers and for WebViews created with the allowsInlineMediaPlayback property set to YES.
     */
    playsinline?: boolean;
    /**
     * Show related videos when playback of the initial video ends.
     *
     * - 0: related videos will come from the same channel as the video that was just played.
     * - 1: the player does show related videos.
     *
     * Default value: 1.
     */
    rel?: boolean;
    /**
     * This parameter causes the player to begin playing the video at the given
     * number of seconds from the start of the video.
     * The parameter value is a positive integer.
     */
    start?: boolean;
    /**
     * This parameter identifies the URL where the player is embedded. This value is used in YouTube Analytics reporting
     * when the YouTube player is embedded in a widget, and that widget is then embedded in a web page or application.
     *
     * In that scenario, the origin parameter identifies the widget provider's domain, but YouTube Analytics should not
     * identify the widget provider as the actual traffic source. Instead, YouTube Analytics uses the widget_referrer
     * parameter value to identify the domain associated with the traffic source.
     */
    widgetReferrer?: string;
}
```

[IYouTubeSettings]: https://github.com/sveltinio/components-library/blob/18ede68676db0841baf0a122d20845f9ff3279b6/packages/media-content/src/lib/types.ts#L319-L440
[PLayer parameters]: https://developers.google.com/youtube/player_parameters
