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

### Codepen

**DEFAULT SETTINGS**

```html
<script>
 import { CodePen } from '@sveltinio/media-content';
</script>

<CodePen user="mveltri" id="YzZYmoJ" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

### CodeSandbox

**DEFAULT SETTINGS**

```html
<script>
 import { CodeSandbox } from '@sveltinio/media-content';
</script>

<CodeSandbox id="j0y0vpz59" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

```html
<script lang="ts">
 import { CodeSandbox } from '@sveltinio/media';
 import type { ICodeSandboxSettings } from '@sveltinio/media-content/types';

 // https://codesandbox.io/docs/embedding#generate-an-embed-url
 const csbSettings: ICodeSandboxSettings = {
    hidedevtools: true,
    theme: 'light'
 };
</script>

<CodeSandbox id="j0y0vpz59" height="{500}" settings={csbSettings} />
```

</details>

### Facebook - Post

**DEFAULT SETTINGS**

```html
<script>
 import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook slug="20531316728/posts/10154009990506729/" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

### Facebook - Video

**DEFAULT SETTINGS**

```html
<script>
 import { Facebook } from '@sveltinio/media-content';
</script>

<Facebook type="video" slug="FacebookDevelopers/videos/10152454700553553/" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

### SlideShare

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

### Twitter

**DEFAULT SETTINGS**

```html
<script>
 import { Tweet } from '@sveltinio/media-content';
</script>

<Tweet id="1494008909585125381" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

### Vimeo

**DEFAULT SETTINGS**

```html
<script>
 import { Vimeo } from '@sveltinio/media-content';
</script>

<Vimeo id="692371260" user="newyorker" title="The Panola Project" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

### YouTube - Single Video

**DEFAULT SETTINGS**

```html
<script>
 import { YouTube } from '@sveltinio/media-content';
</script>

<YouTube id="uQntFkK8Z54" title="The Future of html" />
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

<YouTube id="uQntFkK8Z54" title="The Future of html" settings={ytSettings} />
```

</details>

### YouTube - Playlist

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

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

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

</details>

## License

Free and open-source software under the [MIT License](LICENSE)
