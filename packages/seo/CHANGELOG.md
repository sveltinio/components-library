# @sveltinio/seo

## 0.4.4

### Patch Changes

- add support to svelte 5

## 0.4.3

### Patch Changes

- add support to svelte 4

## 0.4.2

### Patch Changes

- refactor: use `@sveltinio/ts-utils`
- chore: dev deps updated

## 0.4.1

### Patch Changes

- fix: remove utils.js from the exports map on package.json
- chore: deps updated
- docs: updated to reflect changes on how to properly import and use the components

## 0.4.0

### Minor Changes

- migration to @sveltejs/package v2

## 0.3.5

### Patch Changes

- fix(JsonLdWebSite): description
- cleanup SEOWebSite type

## 0.3.4

### Patch Changes

- fix(JsonLdBreadcrumbs): avoid duplicated entries when current is empty

## 0.3.3

### Patch Changes

- fix(PageMetaTags): duplicated `svelte:head` in `OpenGraph` and `TwitterCard`

## 0.3.2

### Patch Changes

- fix: ensure passed data is array before looping it when JS

## 0.3.1

### Patch Changes

- fix package dir

## 0.3.0

### Minor Changes

#### Features

- OpenGraph [types](https://github.com/sveltinio/components-library/blob/64eeb74d520495e31f408136dc4c78b36cf3c4d2/packages/seo/src/lib/types.ts#L88-L103) `Business`, `Product`, `Music` and `Video` added.

#### Refactor

`JsonLdBreadcrumbs` now has just `url` as prop.

#### Documentation

- documentation per component added

#### Chores

- deps updates

## 0.2.1

### Patch Changes

- fix: re-exporting components as they are instead of 'as default'

## 0.2.0

### Minor Changes

- refactor types and fixed json-ld components

## 0.1.7

### Patch Changes

- fixed an issue where the `type` attribute for script tag was dropped out during packaging"

## 0.1.6

### Patch Changes

- Bump version to update the github repo link on npm

## 0.1.5

### Patch Changes

- fix url to home

## 0.1.4

### Patch Changes

- json-ld breadcrumbs fixed

## 0.1.3

### Patch Changes

- SEO components refactored as well as interfaces to be more consistent

## 0.1.2

### Patch Changes

- demos fixed

## 0.1.1

### Patch Changes

- fix ts classes

## 0.1.0

### Minor Changes

- ready for v0.1.0
