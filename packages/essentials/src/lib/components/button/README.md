# Button

The `Button` component can be used for both `button` and link `a` by adding the _href_ prop. It supports different variants, sizes, shapes and others:

- **types**: `default`, `primary`, `secondary`, `info`, `error`, `success`, `warning`, `light` and `dark`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`
- **variants**: filled (default), `outlined`
- **shapes**: rectangular (default), `rounded` or `circular`
- **focus**: with or without the focus ring
- **icons**: render an Icon either on the left side or the right side. Wrap the Icon with the Button component, then add the slot='leftIcon' or slot='rightIcon' prop to your Icon.

## Examples

```html
<script>
   import { Button } from '@sveltinio/essentials'
   import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';

   const handleButtonClick = (event) => { alert('button clicked on:' + event.detail); };
</script>

<button type="primary" on:click="{handleButtonClick}" />
<button label="Click Me" type="secondary" border="dashed" />
<button label="Click Me" outlined rounded />
<button label="Click Me" type="success" rounded withFocus />
<button type="success"><MailIcon slot="leftIcon" /> Button Text</button>
<button type="success"><MailIcon slot="rightIcon" /> Button Text</button>
<button type="primary" size="lg" circular>
   <PlusIcon />
</button>
<button href="https://sveltin.io" />
<button type="secondary" href="#" prefetch />
```

## Properties

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

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

The `Button` component allows you to pass the following styles as props:

| CSS Variable        | Default            | |
| :------------------ | ------------------:| :----------------------------------------------------------: |
| `color`             | `rgb(255 255 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `border-color`      | `rgb(228 228 231)` | ![#E4E4E7](https://via.placeholder.com/15/E4E4E7/E4E4E7.png) |
| `border-width`      | `1px`              | ![#E4E4E7](https://via.placeholder.com/15/E4E4E7/E4E4E7.png) |
| `bg-color`          | `rgb(228 228 231)` | ![#E4E4E4](https://via.placeholder.com/15/E4E4E4/E4E4E4.png) |
| `bg-color-hover`    | `rgb(244 244 245)` | ![#F4F4F5](https://via.placeholder.com/15/F4F4F5/F4F4F5.png) |
| `outlined-bg-hover` | `rgb(244 244 245)` | ![#F4F4F5](https://via.placeholder.com/15/F4F4F5/F4F4F5.png) |
| `pt`                | `0.5rem`           | |
| `pr`                | `1rem`             | |
| `pb`                | `0.5rem`           | |
| `pl`                | `1rem`             | |
| `ring-width`        | `2px`              | |
| `ring-offset`       | `2px`              | |
| `ring-style`        | `solid`            | |

### Example

```html
<script>
   import { Button } from '@sveltinio/essentials';

   const myStyles = {
      color: "rgb(54 83 20)",
      "border-color": "rgb(236 252 203)",
      "bg-color": "rgb(132 204 22)",
      "bg-hover": "rgb(163 230 53)",
      "ring-color": "rgb(190 242 100)",
      "ring-style": "dashed"
   }
</script>

<Button
   label="Custom Success"
   type="success"
   rounded
   withFocus
   styles={myStyles}
/>
```
