# Breadcrumbs

Breadcrumbs is an accessible ([WAI-ARIA Accessibility Reference]) component helping users to navigate through the website.

## Examples

<img src="./assets/images/default.png" alt="Breadcrumbs - Default" />

## Usage

```html
<script>
    import { page } from '$app/stores';
    import { Breadcrumbs } from '@sveltinio/widgets/breadcrumbs';
<script>

<Breadcrumbs url="http://example.com/blog/posts/welcome" />

<!-- SvelteKit example -->
<Breadcrumbs url={$page.url.href} />
```

## Properties

The `Breadcrumbs` component exposes the following properties:

### Functionals

| Property     | Type      | Required | Default | Description                                         |
| :----------- | :-------: | :------: | :-----: | :-------------------------------------------------- |
| url          | `string`  |    yes   |         | An absolute or relative URL string                  |
| homeAsIcon   | `boolean` |    no    | `true`  | if `false` Home as text insteaf of the home icon    |

### Styles

| Property    | Type      | Required | Default | Description                                         |
| :---------- | :-------: | :------: | :-----: | :-------------------------------------------------- |
| class       | `string`  |    no    |         | The css class name used to make a theme variant     |
| styles      | `object`  |    no    | `{}`    | Used to pass CSS variables to apply custom styles   |

## Slots

| Name          | Default | Fallback |
| :------------ | :-----: | :------: |
| `homeIcon`    | ✗       |    ✓     |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[WAI-ARIA Accessibility Reference]: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
