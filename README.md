# Sveltin Components Library

## Creafted to be used by Sveltin CLI but definetely usable out of it

### Intro

This repo is a "mono-repo" using [pnpm workspaces](https://pnpm.io/workspaces) for managing the packages and [Turborepo](https://turborepo.org/) as build system with pipelines.

Each package has its own folder and README in the `/packages` directory. All package bundles are handled with the same command: `pnpm package`

### Packages

| Package                                      | Description                                                                                              | Changelog                                     |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [@sveltinio/essentials](packages/essentials) | Unstyled components to handle external links or images <br/> using AVIF, WEBP, embed YouTube videos ...                             | [Changelog](packages/essentials/CHANGELOG.md) |
| [@sveltinio/seo](packages/seo)               | All SEO related components for metatags, json-ld ...                                                    | [Changelog](packages/seo/CHANGELOG.md)        |
| [@sveltinio/services](packages/services)     | Components to use GoogleFonts, GoogleAnalytics ...                        | [Changelog](packages/services/CHANGELOG.md)   |
| [@sveltinio/widgets](packages/widgets)       | Styled components ready to be used for page navigation, <br/> TOC, scroll to top, collapsible lists ... | [Changelog](packages/widgets/CHANGELOG.md)    |

### Demos

Run `pnpm dev`

### Tests

Some components make use of SvelteKit's modules like `$app/paths` stored on `.svelte-kit` folder generated running the Vite server.

To execute the test suites, run `pnpm dev` first and then `pnpm test`

### License

Free and open-source software under the [MIT License](LICENSE)
