# JsonLdWebPage

`JsonLdWebPage` component adds a [WebPage] schema.org type to the page header, a navigation element of the page.

## Usage

```html
<script lang="ts">
    import type { SEOWebPage } from '@sveltinio/seotypes.js';
    import { JsonLdWebPage } from '@sveltinio/seo/schemaorg';

    const pageData: SEOWebPage = {
        url: website.baseURL,
        title: 'Home Page',
        description: 'This is the description for the Home Page',
        keywords: 'sveltekit, components, tests, jest',
        opengraph: {
            type: OpenGraphType.Website
        },
        twitter: {
            type: TwitterCardType.Summary
        }
    }

    <JsonLdWebPage data={pageData} />
</script>
```

**Output**

```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Home Page",
  "description": "This is the description for the Home Page",
  "keywords": "sveltekit, components, tests, jest"
}
</script>
```

## Properties

The `JsonLdWebPage` component exposes the following properties:

| Property | Type         | Required |
| :------- | :----------: | :------: |
| data     | `SEOWebPage` | yes      |

```typescript
type SEOWebPage = {
    url: string;
    title: string;
    description?: string;
    author?: string;
    keywords?: Array<string>;
    image?: string;
    imageAlt?: string;
    opengraph?: OpenGraph;
    twitter?: TwitterCard;
};
```

[WebPage]: https://schema.org/WebPage
