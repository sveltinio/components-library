# Button

The `Button` component can be used for both `button` and link `a` by adding the _href_ prop. It supports different variants, sizes, shapes and others:

- **types**: `default`, `primary`, `secondary`, `info`, `error`, `success`, `warning`, `light` and `dark`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`
- **variants**: filled (default), `outlined`
- **shapes**: rectangular (default), `rounded` or `circular`
- **focus**: with or without the focus ring
- **icons**: render an Icon either on the left side or the right side. Wrap the Icon with the Button component, then add the slot='leftIcon' or slot='rightIcon' prop to your Icon.

<img src="./assets/images/showcase.png" alt="Button - Showcase" />

## Examples

```html
<script>
   import { Button } from '@sveltinio/essentials'
   import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';

   const handleButtonClick = (event) => { alert('button clicked on:' + event.detail); };
</script>

<Button type="primary" on:click="{handleButtonClick}" />
<Button label="Click Me" type="secondary" border="dashed" />
<Button label="Click Me" outlined rounded />
<Button label="Click Me" type="success" rounded withFocus />
<Button type="success"><MailIcon slot="leftIcon" /> Button Text</Button>
<Button type="success"><MailIcon slot="rightIcon" /> Button Text</Button>
<Button type="primary" size="lg" circular>
   <PlusIcon />
</Button>
<Button href="https://sveltin.io" />
<Button type="secondary" href="#" prefetch />
```

## Properties

### Functionals

The `Button` component exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component

| Property      |  Type   | Required |   Default   | Description                                                     |
| :------------ | :-----: | :------: | :---------: | :-------------------------------------------------------------- |
| label         | string  |    no    | Button Text | Set the label for the button                                    |
| alt           | string  |    no    |             | Set the alt text property                                       |
| type          | string  |    no    |   default   | Button type (primary, secondary, error, success, ...)           |
| size          | string  |    no    |    base     | Set the button size (xs, sm, base, md or lg)                    |
| border        | string  |    no    |    solid    | Set the border style (solid, dashaed, dotted, ...)              |
| outlined      | boolean |    no    |    false    | White background button with the border                         |
| rounded       | boolean |    no    |    false    | Rounded button                                                  |
| circular      | boolean |    no    |    false    | Full circular button                                            |
| fullSize      | boolean |    no    |    false    | Will take the full width of the container                       |
| withFocusRing | boolean |    no    |    false    | If true, a ring will be displayed when the button has the focus |
| href          | string  |    no    |             | The URL of the page the link goes to                            |
| prefetch      | boolean |    no    |    false    | Enable data-sveltekit-prefetch for the link                     |
| external      | boolean |    no    |    false    | If true, opens the linked document in a new window or tab       |
| class         | string  |    no    |             | The css class name used to make a theme variant                 |
| styles        | Object  |    no    |     `{}`    | Used to pass CSS variables to apply custom styles               |

### Styles

| Property |  Type   | Required |   Default   | Description                                       |
| :------- | :-----: | :------: | :---------: | :------------------------------------------------ |
| class    | string  |    no    |             | The css class name used to make a theme variant   |
| styles   | Object  |    no    |     `{}`    | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `class` and `styles` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
