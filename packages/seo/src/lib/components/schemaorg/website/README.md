# JsonLdWebSite

`JsonLdWebSite` component adds a [WebSite] schema.org type to the page header, a navigation element of the page.

## Usage

```html
<script lang="ts">
    import type { SEOWebSite } from '@sveltinio/seotypes.js';
    import { JsonLdWebSite } from '@sveltinio/seo';

    const siteData: SEOWebSite = {
        name: 'example.com',
        baseURL: 'https://example.com',
        language: 'en-GB',
        logo: 'logo.png',
        title: 'example',
        slogan: '',
        description: 'Example.com is your perfect fit.',
        seoDescription: 'Sample enhanced text for SEO purpose',
        favicon: 'favicon.ico',
        copyright: 'MIT License @ 2021-present example.com',
        keywords: ['sveltekit, components, tests, jest'],
        contactEmail: '',
        socials: {
          github: 'https://github.com/examplecom'
        },
        creator: {
          name: 'username',
          email: 'github@example.com',
          url: 'https://yourwebgarder.com',
          jobTitle: 'webmaster',
          address: {
            city: 'City',
            state: 'CI',
            streetAddress: 'somewhere 101'
          }
        }
    }

    <JsonLdWebSite data={siteData} />
</script>
```

**Output**

```html
<script type="application/ld+json" data-testid="jsonld-website">{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://example.com/#website",
  "name": "example.com",
  "url": "https://example.com",
  "description": "Sample enhanced text for SEO purpose",
  "inLanguage": "en-GB",
  "license": "MIT License @ 2021-present example.com",
  "sameAs": [
    "https://github.com/examplecom"
  ],
  "creator": {
    "@type": "Person",
    "name": "username",
    "email": "github@example.com",
    "url": "https://yourwebgarder.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "City",
      "streetAddress": "somewhere 101"
    },
    "jobTitle": "webmaster"
  }
}</script>
```

## Properties

The `JsonLdWebPage` component exposes the following properties:

| Property | Type         | Required |
| :------- | :----------: | :------: |
| data     | `SEOWebPage` | yes      |

```typescript
type SEOWebSite = {
    name: string;
    baseURL: string;
    language: string;
    title: string;
    slogan?: string;
    description: string;
    seoDescription?: string;
    favicon?: string;
    logo?: string;
    copyright?: string;
    keywords?: Array<string>;
    contactEmail?: string;
    socials?: Socials;
    creator?: SEOPerson | SEOOrganization;
};
```

[WebSite]: https://schema.org/WebSite
