# Sveltin Components Library

This is a monorepo containing Svelte components used by Sveltin CLI. Each repo has it's own readme with more details.

## Packages

| Package                                      | Changelog                                     |
| -------------------------------------------- | --------------------------------------------- |
| [@sveltinio/essentials](packages/essentials) | [Changelog](packages/essentials/CHANGELOG.md) |
| [@sveltinio/seo](packages/seo)               | [Changelog](packages/seo/CHANGELOG.md)        |
| [@sveltinio/services](packages/services)     | [Changelog](packages/services/CHANGELOG.md)   |
| [@sveltinio/widgets](packages/widgets)       | [Changelog](packages/widgets/CHANGELOG.md)    |

## Demos

Run `pnpm dev`

## Tests

Some components make use of SvelteKit's modules like `$app/paths` stored on `.svelte-kit` folder generated running the Vite server.

To execute the test suites, run `pnpm dev` first and then `pnpm test`

## License

Free and open-source software under the [MIT License](LICENSE)
