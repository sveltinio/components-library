# Components Library

## Crafted to be used by Sveltin based projects but definetely usable out of them

### Intro

This repo is a "mono-repo" using [pnpm workspaces](https://pnpm.io/workspaces) for managing the packages and [Turborepo](https://turborepo.org/) as build system with pipelines.

Each package has its own folder and README in the `/packages` directory. All package bundles are handled with the same command: `pnpm package`

### Packages

| Package                    | Version                                   | Demos | Changelog                                  |
| -------------------------- | :---------------------------------------: | :---: | ------------------------------------------ |
| [@sveltinio/essentials]    | [![essentials]](https://www.npmjs.com/package/@sveltinio/essentials)      | [View](https://www.sveltelab.dev/fe9w6pw2qs8sgm9) | [Changelog](packages/essentials/CHANGELOG.md)    |
| [@sveltinio/media-content] | [![media-content]](https://www.npmjs.com/package/@sveltinio/media-content)| [View](https://www.sveltelab.dev/h57nt8jpieokw1n) | [Changelog](packages/media-content/CHANGELOG.md) |
| [@sveltinio/seo]           | [![seo]](https://www.npmjs.com/package/@sveltinio/seo)                    | [View](https://www.sveltelab.dev/1omlyex216bwf75) | [Changelog](packages/seo/CHANGELOG.md)           |
| [@sveltinio/services]      | [![services]](https://www.npmjs.com/package/@sveltinio/services)          | [View](https://www.sveltelab.dev/mu01l23m3291k52) | [Changelog](packages/services/CHANGELOG.md)      |
| [@sveltinio/widgets]       | [![widgets]](https://www.npmjs.com/package/@sveltinio/widgets)            | [View](https://www.sveltelab.dev/sw6o1z34sn9bn75) | [Changelog](packages/widgets/CHANGELOG.md)       |

## Demos

Clone the repos and install all the dependencies:

```bash
git clone https://github.com/sveltinio/components-library.git

cd components-library

pnpm install
```

Run the demos:

```bash
pnpm dev # or pnpm turbo run dev
```

## Develop & Build

Clone the repos and install all the dependencies:

```bash
git clone https://github.com/sveltinio/components-library.git

cd components-library

pnpm install
```

Run the tests:

```bash
pnpm test:packages
```

### Create new component

```bash
pnpm plop
```

### Build Packages

```bash
pnpm build:packages
```

### Build the website

```bash
pnpm build:sites
```

## License

Free and open-source software under the [MIT License](LICENSE)

<!-- Resources -->
[essentials]: https://img.shields.io/npm/v/@sveltinio/essentials.svg?style=flat
[media-content]: https://img.shields.io/npm/v/@sveltinio/media-content.svg?style=flat
[seo]: https://img.shields.io/npm/v/@sveltinio/seo.svg?style=flat
[services]: https://img.shields.io/npm/v/@sveltinio/services.svg?style=flat
[widgets]: https://img.shields.io/npm/v/@sveltinio/widgets.svg?style=flat

[@sveltinio/essentials]: packages/essentials
[@sveltinio/media-content]: packages/media-content
[@sveltinio/seo]: packages/seo
[@sveltinio/services]: packages/services
[@sveltinio/widgets]: packages/widgets
