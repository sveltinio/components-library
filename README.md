# Sveltin Components Library

## Crafted to be used by Sveltin based projects but definetely usable out of it

### Intro

This repo is a "mono-repo" using [pnpm workspaces](https://pnpm.io/workspaces) for managing the packages and [Turborepo](https://turborepo.org/) as build system with pipelines.

Each package has its own folder and README in the `/packages` directory. All package bundles are handled with the same command: `pnpm package`

### Packages

| Package                                            |                                  Version                                   | Changelog                                     |
| -------------------------------------------------- | :------------------------------------------------------------------------: | --------------------------------------------- |
| [@sveltinio/essentials](packages/essentials)       |    [![essentials]](https://www.npmjs.com/package/@sveltinio/essentials)    | [Changelog](packages/essentials/CHANGELOG.md) |
| [@sveltinio/media-content](packages/media-content) | [![media-content]](https://www.npmjs.com/package/@sveltinio/media-content) | [Changelog](packages/media/CHANGELOG.md)      |
| [@sveltinio/seo](packages/seo)                     |           [![seo]](https://www.npmjs.com/package/@sveltinio/seo)           | [Changelog](packages/seo/CHANGELOG.md)        |
| [@sveltinio/services](packages/services)           |      [![services]](https://www.npmjs.com/package/@sveltinio/services)      | [Changelog](packages/services/CHANGELOG.md)   |
| [@sveltinio/widgets](packages/widgets)             |       [![widgets]](https://www.npmjs.com/package/@sveltinio/widgets)       | [Changelog](packages/widgets/CHANGELOG.md)    |

## Demos & Tests

Clone the repos and install all the dependencies:

```bash
git clone https://github.com/sveltinio/sveltin-components-library.git

cd sveltin-components-library

pnpm install
```

Run the demos:

```bash
pnpm dev
```

Run the tests:

```bash
pnpm test
```

### License

Free and open-source software under the [MIT License](LICENSE)

[essentials]: https://img.shields.io/npm/v/@sveltinio/essentials.svg?style=flat
[media-content]: https://img.shields.io/npm/v/@sveltinio/media-content.svg?style=flat
[seo]: https://img.shields.io/npm/v/@sveltinio/seo.svg?style=flat
[services]: https://img.shields.io/npm/v/@sveltinio/services.svg?style=flat
[widgets]: https://img.shields.io/npm/v/@sveltinio/widgets.svg?style=flat
