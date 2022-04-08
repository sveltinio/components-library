<div align="center">
    <h1>Media Content Components</h1>
    &nbsp;
    <a href="https://www.npmjs.com/package/@sveltinio/media-content" target="_blank"><img src="https://img.shields.io/npm/v/@sveltinio/media-content.svg?style=flat" alt="sveltinio/media.content NPM version badge" /></a>
</div>

## Description

A collection of typed Svelte components to easily embed media contents in your pages.

### Components List

- CodePen
- CodeSandbox
- Facebook
- SlideShare
- StackBlitz
- Tweet
- Vimeo
- YouTube

## Install

```bash
# pnpm
pnpm install @sveltinio/media-content

# npm
npm install @sveltinio/media-content

# yarn
yarn add @sveltinio/media-content
```

## Demos

```bash
pnpm dev
```

## Usage

### CodePen

Easily embed content from CodePen in your pages. The `CodePen` component supports all the customization settings available [here](https://blog.codepen.io/documentation/embedded-pens/) through the `settings` property.

#### Properties

The `CodePen` component exposes the following properties:

| Property | Type              | Required | Default  | Description                                             |
| :------- | :---------------: | :------: | :------: |:------------------------------------------------------- |
| user     | String            |    Yes   |          | The user who created the pen.                           |
| id       | String            |    Yes   |          | The id(slug) for the pen to embed.                      |
| title    | String            |    No    |   empty  | The pen title.                                          |
| settings | ICodePenSettings  |    No    |   empty  | To control how the Pen is embedded, looks and behaves. |

**DEFAULT SETTINGS**

```html
<script>
 import { CodePen } from '@sveltinio/media-content';
</script>

<CodePen user="mveltri" id="YzZYmoJ" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { CodePen } from '@sveltinio/media-content';
 import type { ICodePenSettings } from '@sveltinio/media-content/types';

 // https://blog.codepen.io/documentation/embedded-pens/
 const cpSettings: ICodePenSettings = {
    height: 500,
    defaultTab: 'result',
    borderColor: '#325E83',
    tabBarColor: '#074f66',
    activeTabColor: '#007482'
 };
</script>

<CodePen user="mveltri" id="ExWOeeo" title="Images Carousel" settings={cpSettings} />
```

### CodeSandbox

Easily embed CodeSandbox in your pages. The `CodeSandbox` component supports all the customization settings available [here](https://codesandbox.io/docs/embedding#generate-an-embed-url) through the `settings` property.

#### Properties

The `CodeSandbox` component exposes the following properties:

| Property | Type                  | Required | Default  | Description                                                |
| :------- | :-------------------: | :------: | :------: |:---------------------------------------------------------- |
| id       | String                |    Yes   |          | The id for the sandbox to embed.                           |
| height   | Number                |    No    |   400    | The height of the container.                               |
| settings | ICodeSandboxSettings  |    No    |   empty  | To control how the sandbox is embedded, looks and behaves. |

**DEFAULT SETTINGS**

```html
<script>
 import { CodeSandbox } from '@sveltinio/media-content';
</script>

<CodeSandbox id="j0y0vpz59" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { CodeSandbox } from '@sveltinio/media-content';
 import type { ICodeSandboxSettings } from '@sveltinio/media-content/types';

 // https://codesandbox.io/docs/embedding#generate-an-embed-url
 const csbSettings: ICodeSandboxSettings = {
    hidedevtools: true,
    theme: 'light'
 };
</script>

<CodeSandbox id="j0y0vpz59" height="{500}" settings={csbSettings} />
```

### Facebook

Easily embed Facebook content (posts or videos) in your pages. The `Facebook` component supports all the customization settings available both on [posts](https://developers.facebook.com/docs/plugins/embedded-posts) and [videos](https://developers.facebook.com/docs/plugins/embedded-video-player) through the `settings` property.

#### Properties

The `Facebook` component exposes the following properties:

| Property        | Type               | Required | Default  | Description                                                                             |
| :-------------- | :----------------: | :------: | :------: |:--------------------------------------------------------------------------------------- |
| type            | String             |    No    |  video   | Embedded content type. Supported values are `post` or `video`.                          |
| id              | String             |    Yes   |          | The id for the post or the video to embed.                                              |
| langCode        | String             |    No    |  en_US   | To change the language of the Embedded Video Player.                                    |
| fbScriptVersion | String             |    No    |  13.0    | The facebook script version to load. It is exposed to easily migrate to newer versions. |
| settings        | IFacebookSettings  |    No    |  empty   | To control which post or video is embedded and how it looks and behaves.                |

#### Post

**DEFAULT SETTINGS**

```html
<script>
 import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook slug="20531316728/posts/10154009990506729/" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { Facebook } from '@sveltinio/media-content';
 import { IFacebookSettings } from '@sveltinio/media-content/types';

 // https://developers.facebook.com/docs/plugins/embedded-posts
 const fbSettings: IFacebookSettings = {
    lazy: true,
    width: 400,
    showText: true
 };
</script>

<Facebook slug="20531316728/posts/10154009990506729/" settings={fbSettings} />
```

#### Video

**DEFAULT SETTINGS**

```html
<script>
 import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook type="video" slug="FacebookDevelopers/videos/10152454700553553/" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { Facebook } from '@sveltinio/media-content';
 import { IFacebookVideoSettings } from '@sveltinio/media-content/types';

 // https://developers.facebook.com/docs/plugins/embedded-video-player
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
   settings={fbSettings}
/>
```

### SlideShare

Easily embed SlideShare content in your pages.

#### Properties

The `SlideShare` component exposes the following properties:

| Property        | Type               | Required | Default  | Description                                              |
| :-------------- | :----------------: | :------: | :------: |:-------------------------------------------------------- |
| id              | String             |    Yes   |          | The id for the content to be embed.                      |
| title           | String             |    Yes   |          | The content title.                                       |
| user            | String             |    Yes   |          | The user who published the content.                      |
| width           | Number             |    No    |   595    | The width of the container.                              |
| height          | Number             |    No    |   485    | The height of the container.                             |
| withText        | Boolean            |    No    |   true   | To control the visibility of the text below the content. |

```html
<script>
 import { SlideShare } from '@sveltinio/media-content';
</script>

<SlideShare
   id="exvMftSyV7yRQR"
   user="DataReportal"
   title="Digital 2020 Global Digital Overview (January 2020) v01"
/>
```

### StackBlitz

Easily embed StackBlitz project in your pages. The `StackBlitz` component supports all the customization settings available [here](https://developer.stackblitz.com/docs/platform/embedding/) through the `settings` property.

#### :warning: Important Note

> StackBlitz only support embedding WebContainer projects in Chromium-based browsers. Read more [here](https://developer.stackblitz.com/docs/platform/browser-support/#embedding).

#### Properties

The `StackBlitz` component exposes the following properties:

| Property | Type                 | Required | Default  | Description                                                |
| :------- | :------------------: | :------: | :------: |:---------------------------------------------------------- |
| id       | String               |    Yes   |          | The id for the project to embed.                           |
| title    | String               |    No    |   empty  | The project title.                                         |
| settings | IStackBlitzSettings  |    No    |   empty  | To control how the project is embedded, looks and behaves. |

**DEFAULT SETTINGS**

```html
<script>
 import { StackBlitz } from '@sveltinio/media-content';
</script>

<StackBlitz id="vitejs-vite-z3ukcq" />
```

**WITH CUSTOM SETTINGS**

```html
<script>
 import { StackBlitz } from '@sveltinio/media-content';
 import { IStackBlitzSettings } from '@sveltinio/media-content/types';

 // https://developer.stackblitz.com/docs/platform/embedding/
 const sbSettings: IStackBlitzSettings = {
    ctl: true,
    devtoolsheight: 400
 }
</script>

<StackBlitz id="vitejs-vite-z3ukcq" settings={sbSettings} />
```

### Tweet

Easily embed tweets in your pages. The `Tweet` component supports all the customization settings available [here](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference) through the `settings` property.

#### Properties

The `Tweet` component exposes the following properties:

| Property | Type            | Required | Default  | Description                                              |
| :------- | :-------------: | :------: | :------: |:-------------------------------------------------------- |
| id       | String          |    Yes   |          | The id for the tweet to embed.                           |
| settings | ITweetSettings  |    No    |   empty  | To control how the tweet is embedded, looks and behaves. |

**DEFAULT SETTINGS**

```html
<script>
 import { Tweet } from '@sveltinio/media-content';
</script>

<Tweet id="1494008909585125381" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { Tweet } from '@sveltinio/media-content';
 import type { ITweetSettings } from '@sveltinio/media-content/types';

 // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
 const tSettings: ITweetSettings = {
    theme: 'dark'
 };
</script>

<Tweet id="1494008909585125381" settings={tSettings} />
```

### Vimeo

Easily embed Vimeo content in your pages. The `Vimeo` component supports all the customization settings available [here](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview) through the `settings` property.

To load your pages faster, a clickable and responsibe thumbnail for the video is embedded (when no `autoplay` setting is provided or it is set to `false`). Upon clicking, it loads the iframe and play the video.

#### Properties

The `Vimeo` component exposes the following properties:

| Property        | Type               | Required | Default  | Description                                                                                                                   |
| :-------------- | :----------------: | :------: | :------: |:----------------------------------------------------------------------------------------------------------------------------- |
| id              | String             |    Yes   |          | The id for the content to be embed.                                                                                           |
| user            | String             |    No    |   empty  | The user who published the content. If provided, the text with a link to Vimeo just below the video player will be displayed. |
| title           | String             |    No    |   empty  | The content title. If provided, the text with a link to Vimeo just below the video player will be displayed.                  |
| description     | String             |    No    |   empty  | The content description. If provided, the text just below the video player will be displayed.                                 |
| settings        | IVimeoSettings     |    No    |   empty  | To control how the video is embedded, looks and behaves.                                                                      |

**DEFAULT SETTINGS**

```html
<script>
 import { Vimeo } from '@sveltinio/media-content';
</script>

<Vimeo id="692371260" user="newyorker" title="The Panola Project" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { Vimeo } from '@sveltinio/media-content';
 import type { IVimeoSettings } from '@sveltinio/media-content/types';

 // https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview
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
   settings={vSettings}
/>
```

### YouTube

Easily embed YouTube content (videos and playlist) in your pages. The `YouTube` component supports all the customization settings available [here](https://developers.google.com/youtube/player_parameters) through the `settings` property.

To load your pages faster, a clickable and responsibe thumbnail for the video is embedded (when no `autoplay` setting is provided or it is set to `false`). Upon clicking, it loads the iframe and play the video.

#### Properties

The `YouTube` component exposes the following properties:

| Property        | Type               | Required | Default  | Description                                                                        |
| :-------------- | :----------------: | :------: | :------: |:---------------------------------------------------------------------------------- |
| type            | String             |    No    |  video   | Embedded content type. Supported values are `video`, `playlist` or `user_uploads`. |
| id              | String             |    Yes   |          | The id for the video or playlist to embed.                                         |
| title           | String             |    Yes   |          | The content title.                                                                 |
| username        | String             |    No    |  empty   | The user who published the content.                                                |
| settings        | IYouTubeSettings   |    No    |  empty   | To control how the video is embedded and how it looks and behaves.                 |

#### Single Video

**DEFAULT SETTINGS**

```html
<script>
 import { YouTube } from '@sveltinio/media-content';
</script>

<YouTube id="uQntFkK8Z54" title="The Future of html" />
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { YouTube } from '@sveltinio/media-content';
 import type { IYouTubeSettings } from '@sveltinio/media-content/types';

 // https://developers.google.com/youtube/player_parameters
 const ytSettings: IYouTubeSettings = {
    autoplay: true,
    fs: true
 };
</script>

<YouTube id="uQntFkK8Z54" title="The Future of html" settings={ytSettings} />
```

#### Playlist

**DEFAULT SETTINGS**

```html
<script>
 import { YouTube } from '@sveltinio/media-content';
</script>

<YouTube
   type="playlist"
   id="PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
   title="html Tutorial for Beginners"
/>
```

**WITH CUSTOM SETTINGS**

```html
<script lang="ts">
 import { YouTube } from '@sveltinio/media-content';
 import type { IYouTubeSettings } from '@sveltinio/media-content/types';

 // https://developers.google.com/youtube/player_parameters const
 const ytSettings: IYouTubeSettings = {
    autoplay: true,
    fs: true
 };
</script>

<YouTube
   type="playlist"
   id="PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
   title="html Tutorial for Beginners"
   settings={ytSettings}
/>
```

## License

Free and open-source software under the [MIT License](LICENSE)
