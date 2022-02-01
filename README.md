# Sveltin Components Library

## Crafted to be used by Sveltin based projects but definetely usable out of it

### Intro

This repo is a "mono-repo" using [pnpm workspaces](https://pnpm.io/workspaces) for managing the packages and [Turborepo](https://turborepo.org/) as build system with pipelines.

Each package has its own folder and README in the `/packages` directory. All package bundles are handled with the same command: `pnpm package`

### Packages

| Package                                      | Changelog                                     |
| -------------------------------------------- | --------------------------------------------- |
| [@sveltinio/essentials](packages/essentials) | [Changelog](packages/essentials/CHANGELOG.md) |
| [@sveltinio/seo](packages/seo)               | [Changelog](packages/seo/CHANGELOG.md)        |
| [@sveltinio/services](packages/services)     | [Changelog](packages/services/CHANGELOG.md)   |
| [@sveltinio/widgets](packages/widgets)       | [Changelog](packages/widgets/CHANGELOG.md)    |

### Demos

Run `pnpm dev`

### Tests

Some components make use of SvelteKit's modules like `$app/paths` stored on `.svelte-kit` folder generated running the Vite server.

To execute the test suites, run `pnpm dev` first and then `pnpm test`

### License

Free and open-source software under the [MIT License](LICENSE)
