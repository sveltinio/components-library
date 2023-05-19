# @sveltinio/essentials

## 0.7.5

### Patch Changes

- fix: `@sveltinio/ts-utils` set as dependency

## 0.7.4

### Patch Changes

- fix(**list**): external link handler
- chore(**list**): remove `console.log` call
- chore: dev deps updated
- docs(**tabs**): fix typo in README.md

## 0.7.3

### Patch Changes

- fix(**button**): allow additional props with `restProps`
- fix(**buttongroup**): declaration-property-value-no-unknown
- fix(**link**): rel and target attributes when external
- refactor: use svelte action for keyboard interaction in `Dropdown`, `ToggleList` and `Tabs`
- style(color): set `aspect-ratio: 1;`
- chore: dev deps updated
- docs(**tabs**): fix typo in markdown table for properties
- docs: add Keyboard Interaction section for each component in the package

## 0.7.2

### Patch Changes

- refactor(**link**): `prefetch` as prop to set `data-sveltekit-preload-data` on links
- chore: dev deps updated
- docs(**link**): update README

## 0.7.1

### Patch Changes

- fix(dropdown/DropdownContent.svelte): A11Y non-interactive element <ul> cannot have interactive role 'menu'
- fix: remove utils.js from the exports map on package.json
- chore: dev deps updated
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

- `iconSize` added as prop to the `Link` to set the external icon size

#### Fixes

- `Link` when external with icon not properly styled

#### Chores

- deps updated

## 0.5.2

### Patch Changes

- fix: re-exporting components as they are instead of 'as default'

## 0.5.1

### Patch Changes

#### Fixes

- use relative paths instead of the `$lib` alias to import `utils.js` on components

## 0.5.0

### Minor Changes

#### Features

- all components are now accessibles implementing relative WAI-ARIA Accessibility Reference
- accessibility tested against WCAG2AAA with `pa11y` (`axe-core` and `htmlcs` as runners)

#### Fixes

- exclude files when building to reduce package size
- css files are all minified when building

#### Docs

- README and THEMING files updated and more consistent across components

#### Chores

- chore: deps updated
- make use of `vitePreprocess` insted of `svelte-preprocess`
- `publint` added to check packaging errors and ensure compatibility across environments.

## 0.4.0

### Minor Changes

- components refactored
- styling capabilities improved
- deps updated
- fix `prefetch` when using with SvelteKit

## 0.3.0

### Minor Changes

The following components have been added to the package:

- `Button`
- `ButtonGroup`
- `ColorViewer`
- `Dropdown`
- `ToggleList`
- `Tabs`

**Deleted Components:**

`ModernImage`

**Renamed/Refactored Components:**

`ExternaLink` is now `Link` and works for both internal and external link

#### Docs

README file per component.

## 0.2.1

### Patch Changes

- Bump version to update the github repo link on npm

## 0.2.0

### Minor Changes

- YouTube component dropped out. It is now part of the @sveltinio/media-content package

## 0.1.2

### Patch Changes

- demox fixed

## 0.1.1

### Patch Changes

- fix ts classes

## 0.1.0

### Minor Changes

- ready for v0.1.0
