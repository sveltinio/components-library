# Link

The `Link` is an accessible Svelte component implementing the [WAI-ARIA Link Pattern]. It provides an interactive reference to an internal or external resource. It accepts and render any child component using the **Svelte slot**.

## Examples

```html
<script>
   import { base } from '$app/paths';
   import { Link } from '@sveltinio/essentials/link';
   import DummyIcon from './DummyIcon.svelte';
</script>

<!-- same result -->
<Link href="{base}/contact">Contact</Link>
<Link href="{base}/contact" label="Contact" />

<!-- left icon -->
<Link href="{base}/contact" label="Contact">
   <DummyIcon slot="leftIcon" />
</Link>

<Link href="{base}/contact">
   <DummyIcon slot="leftIcon" />
   Contact
</Link>

<!-- external link without the right icon -->
<Link href="https://sveltin.io" label="sveltin.io" external externalIcon={false} />

<!-- set the right icon size -->
<Link href="https://sveltin.io" external externalIconSize={14}>sveltin</Link>

<!-- set a custom icon for the external link -->
<Link href="https://sveltin.io" external>
   <DummyIcon slot="rightIcon" />
</Link>
```

## Properties

### Functionals

The `Link` component exposes a set of properties but it does not prevent you to pass any additional props.

| Property         | Type      | Required | Default  | Description                                                         |
| :--------------- | :-------: | :------: | :------- | :------------------------------------------------------------------ |
| label            | `string`  |    no    |          | The text to display and used for the `aria-label` prop too          |
| href             | `string`  |   yes    |          | The URL of the page the link goes to                                |
| prefetch         |           |    no    | `off`    | Set `data-sveltekit-preload-data` when not an external link         |
| external         | `boolean` |    no    | `false   | If external, an icon will be apped next to the right of the label   |
| externalIcon     | `boolean` |    no    | `true`   | Shows an icon next right to the label when external is true         |
| externalIconSize | `number`  |    no    | `12`     | if `external` & `icon` are `true`, sets the external icon size      |
| noOpenener       | `boolean` |    no    | `true`   | Go to the linked resource without granting the new browsing context |
| noReferrer       | `boolean` |    no    | `true`   | Prevent passing the referrer information to the target website      |

## Slots

| Name        | Default | Fallback |
| :---------- | :-----: | :------: |
| `leftIcon`  | ✗       |    ✗     |
| `rightIcon` | ✗       |    ✓     |

## Keyboard Interaction

See the [Keyboard Interaction] section for the [WAI-ARIA Link Pattern].

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The CSS variables are defined in the [variables.css](./variables.css) file.

<!-- Resources -->
[WAI-ARIA Link Pattern]: https://www.w3.org/WAI/ARIA/apg/patterns/link/
[Keyboard Interaction]: https://www.w3.org/WAI/ARIA/apg/patterns/link/#keyboardinteraction
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
