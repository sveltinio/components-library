# @sveltinio/media-content

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

## 0.3.8

### Patch Changes

- fix package dir

## 0.3.7

### Patch Changes

This release is to updated the components documentation

#### Chores

- deps updated

## 0.3.6

### Patch Changes

- fix: re-exporting components as they are instead of 'as default'

## 0.3.5

### Patch Changes

#### Fixes

- `svelte:component` props for `Vimeo` and `YouTube`
- sandbox on iframe for `StackBlitz`
- remove a11y warning for alt prop on `<a>` tag for `SlideShare`

#### Chores

- chore: deps updated
- make use of `vitePreprocess` instead of `svelte-preprocess`
- `publint` added to check packaging errors and ensure compatibility across environments.

## 0.3.4

### Patch Changes

- fix exports

## 0.3.3

### Patch Changes

- fix(SlideShare): a11y warning on external link

## 0.3.2

### Patch Changes

- unused dependency removed (@types/jest)

## 0.3.1

### Patch Changes

- Bump version to update the github repo link on npm

## 0.3.0

### Minor Changes

- To load pages faster, a clickable and responsible thumbnail for the video (YouTube and Vimeo) is embedded when no `autoplay` setting is provided or it is set to `false`.

## 0.2.0

### Minor Changes

- StackBlitz added

## 0.1.0

### Minor Changes

- initial release
