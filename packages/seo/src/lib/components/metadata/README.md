# PageMetaTags

Easily add metadata (title, canonical url, description, keywords) to your pages as well as attach [OpenGraph] and [TwitterCard] to let pages become rich objects.

## Usage

### Article Example

```html
<script lang="ts">
    import type { SEOWebPageMetadata } from '@sveltinio/seo/types';
    import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
    import { PageMetaTags } from '@sveltinio/seo';

    const sampleArticle: SEOWebPageMetadata = {
        url: 'https://example.com/posts/getting-started',
        title: 'Getting Started Article',
        description: 'This is the description for the Getting Started Article',
        author: 'Your Name',
        keywords: 'sveltekit, components, tests, jest',
        opengraph: {
            type: OpenGraphType.Article,
            article: {
                published_at: new Date('23-01-2022'),
                modified_at: new Date('24-01-2022')
            }
        },
        twitter: {
            type: TwitterCardType.Large,
            site: '@username'
        }
};
<script>

<PageMetaTags data={myPage} />
```

### Music Album Example

```html
<script>
    import type { SEOWebPageMetadata } from '@sveltinio/seo/types';
    import { OpenGraphType } from '@sveltinio/seo/types';
    import { PageMetaTags } from '@sveltinio/seo';

    const sampleMusicAlbum: SEOWebPageMetadata = {
        url: 'https://www.dgmlive.com/',
        title: 'In the Court of the Crimson King',
        description: 'Description for the album',
        keywords: 'progressive rock, jazz rock, rock',
        opengraph: {
            type: OpenGraphType.MusicAlbum,
            album: {
                url: 'https://open.spotify.com/album/6tVg2Wl9hVKMpHYcAl2V2M?si=dJtzXM7ATvmLOn9NfdDnbg',
                musicians: [
                    {
                        url: 'https://open.spotify.com/artist/7M1FPw29m5FbicYzS2xdpi?si=w9MGJ88-S3O7tiG5IheXAw'
                    }
                ],
                songs: [
                    {
                        url: 'https://open.spotify.com/track/5L7VBYoosmkmiiDlzumdCe?si=aa49699b95604f8d'
                    },
                    {
                        url: 'https://open.spotify.com/track/4QbpagjMCqSECj6IimTL2n?si=65e9458fe8454eea'
                    }
                ],
                release_date: new Date('10-10-1969')
            }
        }
    };
<script>

<PageMetaTags data={sampleMusicAlbum} />
```

## Properties

### PageMetags

The `PageMetatags` component exposes the following properties:

| Property    | Type         | Required | Default |
| :---------- | :----------: | :------: | :-----: |
| data        | `SEOWebPage` | yes      |         |

```typescript
type SEOWebPage = {
    url: string;
    title: string;
    description?: string;
    author?: string;
    keywords?: string;
    image?: string;
    imageAlt?: string;
    opengraph?: OpenGraph;
    twitter?: TwitterCard;
};
```

[OpenGraph]: https://ogp.me/
[TwitterCard]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
