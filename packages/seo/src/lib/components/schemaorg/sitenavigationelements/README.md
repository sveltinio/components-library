# JsonLdSiteNavigationElement

`JsonLdSiteNavigationElement` component adds a [SiteNavigationElement] schema.org type to the page header, a navigation element of the page.

## Usage

```html
<script lang="ts">
    import type { SEOMenuItem } from '@sveltinio/seo/types.js';
    import { JsonLdSiteNavigationElement } from '@sveltinio/seo/schemaorg';

    const menu: Array<SEOMenuItem> = [
    {
        identifier: 'home',
        name: 'Home',
        url: '/',
        weight: 1
    },
    {
        identifier: 'about',
        name: 'About',
        url: '/about',
        weight: 2
    }
];

    <JsonLdSiteNavigationElement baseURL="https://example.com" data={menu} />
</script>
```

**Output**

```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "home",
      "url": "https://example.com/"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "about",
      "url": "https://example.com/about"
    }
  ]
}</script>
```

## Properties

The `JsonLdSiteNavigationElement` component exposes the following properties:

| Property | Type                 | Required |
| :------- | :------------------: | :------: |
| baseURL  | `string`             | yes      |
| data     | `Array<SEOMenuItem>` | yes      |

```typescript
type SEOMenuItem = {
    identifier: string;
    name: string;
    url: string;
    weight: number;
    external?: boolean;
    children?: Array<SEOMenuItem>;
}
```

[SiteNavigationElement]: https://schema.org/SiteNavigationElement
