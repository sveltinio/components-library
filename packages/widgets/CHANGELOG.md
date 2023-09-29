# @sveltinio/widgets

## 0.7.7

### Patch Changes

- fix: missing exports. Closes #254
- chore: dev deps updated

## 0.7.6

### Patch Changes

- fix: resolve `@sveltinio/essentials` dependency

## 0.7.5

### Patch Changes

- fix(**card**): check if `src` prop in `CardImage` is a valid URL or an image file
- fix(**reponsive-card**): check if `src` prop in `CardImage` is a valid URL or an image file
- fix: add `@sveltinio/ts-utils` as dependency
- fix: remove useless entries from the exports map
- refactor(**toc**): restructure the component folder and move utilities functions to `utils.ts`
- refactor(**pages-navigator**): restructure the component folder
- docs(**README.md**): add link to the [demos](https://www.sveltelab.dev/sw6o1z34sn9bn75) on SvelteLab
- chore: update routes folder structure
- chore: dev deps updated

## 0.7.4

### Patch Changes

- **breadcrumbs**: add `showRootOnly` boolean prop to show/hide root icon when base url only.
- chore: deps updated

## 0.7.3

### Patch Changes

- fix(**breadcrumbs**): hide separator when base url only

## 0.7.2

### Patch Changes

- **card**: add `prefetch` as prop to set `data-sveltekit-preload-data` on links
- **pages-navigator**: add `prefetch` as prop to set `data-sveltekit-preload-data` on links
- **responsive-card**: add `prefetch` as prop to set `data-sveltekit-preload-data` on links
- chore: dev deps updated
- docs: READMEs updated

## 0.7.1

### Patch Changes

- fix: remove utils.js from the exports map on package.json
- chore: deps updated
- docs: updated to reflect changes on how to properly import and use the components

## 0.7.0

### Minor Changes

- migration to @sveltejs/package v2

## 0.6.1

### Patch Changes

- fix package dir

## 0.6.0

### Minor Changes

#### Features

- `shape` prop added to `ScrollToTopButton` component. One of: [`circle`, `square`, `rounded`]

#### Chores

- deps updated

## 0.5.1

### Patch Changes

- fix: re-exporting components as they are instead of 'as default'

## 0.5.0

### Minor Changes

#### Features

- all components are now accessibles implementing relative WAI-ARIA Accessibility Reference
- accessibility tested against WCAG2AAA with `pa11y` (`axe-core` and `htmlcs` as runners)

#### Fixes

- exclude files when building to reduce package size
- references to the right css variables

#### Refactor

- **TOC**: TocList component `each` block loop simplified
- **Card**: CardAction as an `<a>` tag

#### Docs

- README and THEMING files updated and more consistent across components

#### Chores

- chore: deps updated
- css files are all minified when building
- make use of `vitePreprocess` instead of `svelte-preprocess`
- `publint` added to check packaging errors and ensure compatibility across environments.

## 0.4.0

### Minor Changes

- refactor(breadcrumbs): it is now really usable
- refactor: colors and css class names
- fix: `package` on `svelte.config.js` to exclude files when building and make the package size smaller

## 0.3.0

### Minor Changes

- all components refactored
- styling with PostCSS
- component diagrams added
- docs about styling
- screenshots added

## 0.2.2

### Patch Changes

- make TOC component more costumizable via new variables

## 0.2.1

### Patch Changes

- fix exports

## 0.2.0

### Minor Changes

- componentes refactored to be usable easily out of sveltin projects
- components theming support added.

## 0.1.7

### Patch Changes

- Bump version to update the github repo link on npm

## 0.1.6

### Patch Changes

- fix: path to the static folder for the Card component to properly display images and usage of content specific assets

## 0.1.5

### Patch Changes

- chore: shadow added to the Card component
- feat: Breadcrumbs component added

## 0.1.4

### Patch Changes

- support to use custom colors for PrevNextButton added

## 0.1.3

### Patch Changes

- components styles updated and more responsive
- Card component: link to the cover image fixed. It now looks into `static/resources/<resource_name>/<content_name>`
- deps updated: svelte v3.46.2 and sveltekit v1.0.0-next.231

## 0.1.2

### Patch Changes

- fixing package version

## 0.1.1

### Patch Changes

- ResourceContent and ContentMetadata classes refactored
- ResourceContentMaker classe name fixed

## 0.1.0

### Minor Changes

- ready for v0.1.0
