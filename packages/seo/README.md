<div align="center">
    <h1>Sveltin SEO Components</h1>
    <a href="https://www.npmjs.com/package/@sveltinio/seo" target="_blank"><img src="https://img.shields.io/npm/v/@sveltinio/seo.svg?style=flat" alt="sveltinio/seo NPM version badge" /></a>
</div>

## Description

A collection of SEO related Svelte components for metatags, json-ld.

## Components List

### [Meta](#meta)

- [PageMetatags](#pagemetags)
- [OpenGraph](#opengraph)
- [TwitterCard](#twittercard)

### [SchemaOrg](#schemaorg)

- [JsonLdWebSite](#jsonldwebsite)
- [JsonLdWebPage](#jsonldwebpage)
- [JsonLdBreadcrumbs](#jsonldbreadcrumbs)
- [JsonLdSiteNavigationElement](#jsonldsitenavigationelement)

## Install

```bash
# pnpm
pnpm install @sveltinio/seo

# npm
npm install @sveltinio/seo

# yarn
yarn add @sveltinio/seo
```

## Demos

```bash
pnpm dev
```

## Properties

### PageMetags

The `PageMetatags` component exposes the following properties:

| Property | Type                 | Required |
| :------- | :------------------: | :------: |
| `data`   | [SEOWebPageMetadata] | yes      |

### OpenGraph

The `OpenGraph` component exposes the following properties:

| Property | Type                 | Required |
| :------- | :------------------: | :------: |
| `data`   | [SEOWebPageMetadata] | yes      |

### TwitterCard

The `TwitterCard` component exposes the following properties:

| Property | Type                 | Required |
| :------- | :------------------: | :------: |
| `data`   | [SEOWebPageMetadata] | yes      |

### JsonLdWebSite

The `JsonLdWebSite` component exposes the following properties:

| Property | Type         | Required |
| :------- | :----------: | :------: |
| `data`   | [SEOWebPage] | yes      |

### JsonLdWebPage

The `JsonLdWebPage` component exposes the following properties:

| Property | Type                 | Required |
| :------- | :------------------: | :------: |
| `data`   | [SEOWebPageMetadata] | yes      |

### JsonLdBreadcrumbs

The `JsonLdBreadcrumbs` component exposes the following properties:

| Property  | Type     | Required |
| :-------- | :------: | :------: |
| `baseURL` | `string` | yes      |
| `parent`  | `string` | yes      |
| `current` | `string` | yes      |

### JsonLdSiteNavigationElement

The `JsonLdSiteNavigationElement` component exposes the following properties:

| Property   | Type                 | Required |
| :--------- | :------------------: | :------: |
| `data`     | [SEOWebSite]         | yes      |
| `menuData` | Array<[SEOMenuItem]> | yes      |

## License

Free and open-source software under the [MIT License](LICENSE)

[SEOWebSite]: https://github.com/sveltinio/components-library/blob/main/packages/seo/src/lib/types.ts
[SEOWebPage]: https://github.com/sveltinio/components-library/blob/main/packages/seo/src/lib/types.ts
[SEOWebPageMetadata]: https://github.com/sveltinio/components-library/blob/main/packages/seo/src/lib/types.ts
[SEOMenuItem]: https://github.com/sveltinio/components-library/blob/main/packages/seo/src/lib/types.ts
