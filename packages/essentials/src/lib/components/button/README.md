# Button

The `Button` is an interactive and accessible ([WAI-ARIA Accessibility Reference]) component activated by a user to perform an action. It can be a pure `button` or a link `a`.

It supports different:

- **types**: `default`, `primary`, `secondary`, `info`, `error`, `success`, `warning`, `light` and `dark`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`
- **variants**: filled (default), `outlined`
- **shapes**: rectangular (default), `rounded` or `circular`
- **focus**: with or without the focus ring
- **icons**: to render an Icon either on the left side or the right side.

## Examples

<img src="./assets/images/showcase.png" alt="Button - Showcase" />

## Usage

```html
<script>
   import { Button } from '@sveltinio/essentials'
   import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';

   const handleButtonClick = (event) => {
      alert('button clicked on:' + event.detail.eventDetails);
   };
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

The `Button` component exposes a set of properties to allow its configuration.

### Functionals

| Property      |  Type     | Required | Default       | Description                                                                              |
| :------------ | :-------: | :------: | :-----------: | :--------------------------------------------------------------------------------------- |
| label         | `string`  |    no    | `Button Text` | Set the label for the button                                                             |
| alt           | `string`  |    no    | `label` value | Set the `aria-label` attribute                                                           |
| type          | `string`  |    no    | `default`     | Button type (primary, secondary, error, success, ...)                                    |
| size          | `string`  |    no    | `base`        | Set the button size (xs, sm, base, md or lg)                                             |
| border        | `string`  |    no    | `solid`       | Set the border style (solid, dashaed, dotted, ...)                                       |
| disabled      | `boolean` |    no    | `false`       | If true, the `button` is unusable and un-clickable. <br/>Set `aria-disabled` accordingly |
| outlined      | `boolean` |    no    | `false`       | White background button with the border                                                  |
| rounded       | `boolean` |    no    | `false`       | Rounded button                                                                           |
| circular      | `boolean` |    no    | `false`       | Full circular button                                                                     |
| fullSize      | `boolean` |    no    | `false`       | Will take the full width of the container                                                |
| withFocusRing | `boolean` |    no    | `false`       | If true, a ring will be displayed when the button has the focus                          |
| href          | `string`  |    no    |               | If set, the component renders an `a` alement and link's destination                      |
| prefetch      | `boolean` |    no    | `false`       | Enable data-sveltekit-prefetch for the link                                              |
| external      | `boolean` |    no    | `false`       | If true, opens the linked document in a new window or tab                                |

### Styles

| Property |  Type     | Required | Default | Description                                       |
| :------- | :-------: | :------: | :-----: | :------------------------------------------------ |
| class    | `string`  |    no    |         | The css class name used to make a theme variant   |
| styles   | `Object`  |    no    |  `{}`   | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Slots

| Name        | Default | Fallback | Description                                       |
| :---------- | :-----: | :------: | :------------------------------------------------ |
| `leftIcon`  | ✗       |    ✗     | The css class name used to make a theme variant   |
| `rightIcon` | ✗       |    ✗     | The css class name used to make a theme variant   |

## Events

| Name         |  Type      | Element                | Keyboard         | Response          | Description          |
| :----------- | :--------: | :--------------------: | :--------------: | :---------------- | :------------------- |
| `on:click`   | dispatched | `<button>`             |                  | `{ event }`       | Activates the button |
| `on:keydown` | dispatched | `<a>` <br/> `<button>` | `Enter`, `Space` | <br/> `{ event }` | Activates the button |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[WAI-ARIA Accessibility Reference]: https://www.w3.org/WAI/ARIA/apg/patterns/button/
