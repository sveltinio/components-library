# Link

The `Link` component defines a hyperlink used to link an internal or external resource. It accepts and render any child component using the **Svelte slot**.

## Examples

```html
<script>
   import { base } from '$app/paths';
   import { Link } from '@sveltinio/essentials';
   import DummyIcon from './DummyIcon.svelte';
</script>

<Link href="{base}/contact">Contact</Link>

<Link href="https://sveltin.io" external>sveltin</Link>

<Link href="https://sveltin.io" label="sveltin.io" external icon={false}  />

<Link href="https://sveltin.io" external>
   <DummyIcon slot="icon" />
</Link>
```

## Properties

The `Link` component exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component:

| Property   |  Type   | Required | Default  | Description                                                         |
| :--------- | :-----: | :------: | :------- | :------------------------------------------------------------------ |
| label      | string  |    no    |          | The text to display and used for the `aria-label` prop too          |
| href       | string  |   yes    |          | The URL of the page the link goes to                                |
| external   | boolean |    no    | false    | If external, an icon will be apped next to the right of the label   |
| prefetch   | boolean |    no    | yes      | Enable `data-sveltekit-preload-data` when not an external link      |
| icon       | boolean |    no    | true     | Shows an icon next right to the label when external is true         |
| noOpenener | boolean |    no    | true     | Go to the linked resource without granting the new browsing context |
| noReferrer | boolean |    no    | true     | Prevent passing the referrer information to the target website      |
| class      | string  |    no    |          | The css class name used to make a theme variant                     |
| styles     | Object  |    no    | `{}`     | Used to pass CSS variables to apply custom styles                   |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `class` and `styles` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
