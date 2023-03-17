# Link

The `Link` component defines a hyperlink used to link an internal or external resource. It accepts and render any child component using the **Svelte slot**.

## Examples

```html
<script>
   import { base } from '$app/paths';
   import { Link } from '@sveltinio/essentials/link';
   import DummyIcon from './DummyIcon.svelte';
</script>

<Link href="{base}/contact">Contact</Link>

<Link href="https://sveltin.io" external iconSize={14}>sveltin</Link>

<Link href="https://sveltin.io" label="sveltin.io" external icon={false}  />

<Link href="https://sveltin.io" external>
   <DummyIcon slot="icon" />
</Link>
```

## Properties

### Functionals

The `Link` component exposes a set of properties but it does not prevent you to pass any additional props.

| Property   | Type      | Required | Default  | Description                                                         |
| :--------- | :-------: | :------: | :------- | :------------------------------------------------------------------ |
| label      | `string`  |    no    |          | The text to display and used for the `aria-label` prop too          |
| href       | `string`  |   yes    |          | The URL of the page the link goes to                                |
| external   | `boolean` |    no    | `false   | If external, an icon will be apped next to the right of the label   |
| prefetch   | `boolean` |    no    | `false   | Enable `data-sveltekit-preload-data` when not an external link      |
| icon       | `boolean` |    no    | `true`   | Shows an icon next right to the label when external is true         |
| iconSize   | `number`  |    no    | `12`     | if `external` & `icon` are `true`, sets the external icon size      |
| noOpenener | `boolean` |    no    | `true`   | Go to the linked resource without granting the new browsing context |
| noReferrer | `boolean` |    no    | `true`   | Prevent passing the referrer information to the target website      |

## Slots

| Name   | Default | Fallback |
| :----- | :-----: | :------: |
| `icon` | ✗       |    ✓     |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The CSS variables are defined in the [variables.css](./variables.css) file.

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
