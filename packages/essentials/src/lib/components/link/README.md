# Link

The `Link` component defines a hyperlink used to link an internal or external resource. It accepts and render any child component using the **Svelte slot**.

## Examples

```html
<script>
   import { base } from '$app/paths';
   import { Link } from '@sveltinio/essentials';
   import DummyIcon from './DummyIcon.svelte';
</script>

<Link url={base} alt="link to the homepage">Home</Link>

<Link external url="https://sveltin.io" alt="link to sveltin homepage">sveltin</Link>

<Link external icon={false} label="sveltin.io" url="https://sveltin.io" alt="link to sveltin homepage" />

<Link external url="https://sveltin.io" alt="link to sveltin homepage">
   <DummyIcon slot="icon" />
</Link>
```

## Properties

The `Link` component exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component:

| Property   |  Type   | Required | Default  | Description                                                         |
| :--------- | :-----: | :------: | :------- | :------------------------------------------------------------------ |
| label      | string  |    no    |          | If present, it will be the text to display                          |
| url        | string  |   yes    |          | The URL of the page the link goes to                                |
| underline  | boolean |    no    | false    | Underlined label text                                               |
| alt        | string  |    yes   |          | The text description of the link                                    |
| external   | boolean |    no    | false    | If external, an icon will be apped next to the right of the label   |
| icon       | boolean |    no    | true     | Shows an icon next right to the label when external id true         |
| noOpenener | boolean |    no    | true     | Go to the linked resource without granting the new browsing context |
| noReferrer | boolean |    no    | true     | Prevent passing the referrer information to the target website      |
| styles     | object  |    no    |          | Object to pass styles as css variables. Check the theming section   |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props].

### Link

| CSS Variable            | Default            | |
| :---------------------- | :----------------- | :----------------------------------------------------------: |
| `color`                 | `rgb(30 41 59)`    | ![#1E293B](https://via.placeholder.com/15/1E293B/1E293B.png) |
| `text-decoration`       |       none         | |
| `color-hover`           | `rgb(30, 41, 59)`  | ![#1E293B](https://via.placeholder.com/15/1E293B/1E293B.png) |
| `text-decoration-hover` |       none         | |

[style props]: https://svelte.dev/docs#template-syntax-component-directives---style-props