<div align="center">
    <h1>Essentials Components</h1>
    &nbsp;
    <a href="https://www.npmjs.com/package/@sveltinio/essentials" target="_blank"><img src="https://img.shields.io/npm/v/@sveltinio/essentials.svg?style=flat" alt="sveltinio/essentials NPM version badge" /></a>
</div>

## Description

A collection of essentials Svelte _unstyled_ components.

## Components List

- [Button](#button)
- [ExternalLink](#externallink)
- [Dropdown](#dropdown)
- [Picture](#picture)

## Install

```bash
# pnpm
pnpm install @sveltinio/essentials

# npm
npm install @sveltinio/essentials

# yarn
yarn add @sveltinio/essentials
```

## Demos

```bash
pnpm dev
```

## Usage

### Button

The `Button` component can be used for both `button` and link `a` by adding the _href_ prop. The `Button` component supports different variants, sizes, shapes and others:

- **types**: `default`, `primary`, `secondary`, `info`, `error`, `success`, `warning`, `light` and `dark`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`
- **variants**: filled (default), `outlined`
- **shapes**: rectangular (default), `rounded` or `circular`
- **focus**: with or without the focus ring
- **icons**: render an Icon either on the left side or the right side. Wrap the Icon with the Button component, then add the slot='leftIcon' or slot='rightIcon' prop to your Icon.

<details>
  <summary><strong>Properties</strong></summary>

The `Button` component exposes the following properties:

| Property      |  Type   | Required |   Default   | Description                                                     |
| :------------ | :-----: | :------: | :---------: | :-------------------------------------------------------------- |
| label         | string  |    no    | Button Text | Set the label for the button                                    |
| altText       | string  |    no    |             | Set the alt text property                                       |
| type          | string  |    no    |   default   | Button type (primary, secondary, error, success, ...)           |
| size          | string  |    no    |    base     | Set the button size (xs, sm, base, md or lg)                    |
| border        | string  |    no    |    solid    | Set the border style (solid, dashaed, dotted, ...)              |
| outlined      | boolean |    no    |    false    | White background button with the border                         |
| rounded       | boolean |    no    |    false    | Rounded button                                                  |
| circular      | boolean |    no    |    false    | Full circular button                                            |
| fullSize      | boolean |    no    |    false    | Will take the full width of the container                       |
| withFocusRing | boolean |    no    |    false    | If true, a ring will be displayed when the button has the focus |
| href          | string  |    no    |             | The URL of the page the link goes to                            |
| prefetch      | boolean |    no    |    false    | Enable sveltekit:prefetch for the link                          |
| external      | boolean |    no    |    false    | If true, opens the linked document in a new window or tab       |

</details>

#### Examples

```html
import { Button } from '@sveltinio/essentials'
import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';

const handleButtonClick = (event) => { alert('button clicked on:' + event.detail); };

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
<button type="secondary" href="/posts/welcome" prefetch />
```

#### Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

The `Button` component allows you to pass the following styles as props:

| CSS Variable        |          Default |
| :------------------ | ---------------: |
| `color`             | rgb(255 255 255) |
| `bg-color`          | rgb(228 228 231) |
| `bg-color-hover`    | rgb(244 244 245) |
| `border-color`      | rgb(228 228 231) |
| `outlined-bg-hover` | rgb(244 244 245) |
| `ring-color`        | rgb(212 212 216) |
| `ring-width`        |              2px |
| `ring-offset`       |              2px |
| `ring-style`        |            solid |

```html
import { Button } from '@sveltinio/essentials';

<button
 label="Custom Success"
 type="success"
 rounded
 withFocus
 --color="rgb(54 83 20)"
 --border-color="rgb(236 252 203)"
 --bg-color="rgb(132 204 22)"
 --bg-hover="rgb(163 230 53)"
 --ring-color="rgb(190 242 100)"
 --ring-style="dashed"
/>
```

### ExternalLink

The `ExternalLink` component defines a hyperlink used to link an external page. It accepts and render any children using the **Svelte slot**.

Any class or style can be passed to it.

<details>
  <summary><strong>Properties</strong></summary>

The `ExternalLink` component exposes the following properties:

| Property   |  Type   | Required | Default  | Description                                                         |
| :--------- | :-----: | :------: | :------- | :------------------------------------------------------------------ |
| id         | string  |    no    | empty    | The link identifier                                                 |
| label      | string  |   yes    |          | The text to display                                                 |
| url        | string  |   yes    |          | The URL of the page the link goes to                                |
| altText    | string  |    no    | as label | Alternate text                                                      |
| target     | string  |    no    | \_blank  | Specifies where to open the linked document                         |
| noOpenener | boolean |    no    | true     | Go to the linked resource without granting the new browsing context |
| noReferrer | boolean |    no    | true     | Prevent passing the referrer information to the target website      |

</details>

#### Examples

```html
import { ExternalLink } from '@sveltinio/essentials';

<ExternalLink id="sveltin-link" label="sveltin" url="https://sveltin.io" class="..." style="..." />

<ExternalLink id="sveltin-link" label="sveltin" url="https://sveltin.io">
 <picture image="logo.png" altText="sveltin logo" width="30%" />
</ExternalLink>
```

### Dropdown

`Dropdown` menus are built using a combination of the `Dropdown`, `DropdownButton`, `DropdownMenu`, and `DropdownItem` components.

#### Dropdown

The `Dropdown` component is the main wrapper component.

<details>
  <summary><strong>Properties</strong></summary>

| Property |  Type   | Required | Default | Description         |
| :------- | :-----: | :------: | :-----: | :------------------ |
| isOpen   | boolean |    no    |         | show/hide the items |

</details>

#### DropdownButton

The `DropdownButton` component renders the toggle button.

<details>
  <summary><strong>Properties</strong></summary>

| Property |  Type  | Required | Default | Description |
| :------- | :----: | :------: | :-----: | :---------- |
| label    | string |   yes    |         | Button text |

</details>

#### DropdownItem

The `DropdownItem` renders the dropdown item as `<a>` or `<button>` tags.

<details>
  <summary><strong>Properties</strong></summary>

| Property |  Type   | Required | Default | Description                                 |
| :------- | :-----: | :------: | :-----: | :------------------------------------------ |
| id       | string  |   yes    |         | Item identifier                             |
| label    | string  |   yes    |         | Item text                                   |
| mode     | string  |    no    | button  | Render as button or link                    |
| href     | string  |    no    |  null   | The URL of the page the link goes to        |
| prefetch | boolean |    no    |   yes   | Add sveltekit:prefetch                      |
| target   | string  |    no    | \_self  | Specifies where to open the linked document |

</details>

#### Examples

##### **WITH ITEMS AS LINKS**

```html
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@sveltinio/essentials';

<Dropdown>
 <DropdownButton label="Menu" />
 <DropdownMenu>
  <DropdownItem id="1" label="Item 1" href="/item-1" />
  <DropdownItem id="2" label="Item 2" href="/item-2" />
  <DropdownItem id="3" label="Item 3" href="/item-3" />
 </DropdownMenu>
</Dropdown>
```

##### **WITH ITEMS AS BUTTONS**

```html
import {
 Dropdown,
 DropdownButton,
 DropdownItem,
 DropdownMenu
} from '@sveltinio/essentials';

const hello = (event) => { alert('clicked on:' + event.detail); };

<Dropdown>
 <DropdownButton label="Menu" />
 <DropdownMenu>
  <DropdownItem id="1" label="Item 1" on:click="{hello}" />
  <DropdownItem id="2" label="Item 2" on:click="{hello}" />
  <DropdownItem id="3" label="Item 3" on:click="{hello}" />
 </DropdownMenu>
</Dropdown>
```

### Picture

<details>
  <summary><strong>Properties</strong></summary>

The `Picture` component exposes the following properties:

| Property |  Type   | Required | Default | Description        |
| :------- | :-----: | :------: | :-----: | :----------------- |
| src      | string  |   yes    |         | Put some text here |
| altText  | string  |   yes    |         | Put some text here |
| webp     | boolean |    no    |  false  | Put some text here |
| avif     | boolean |    no    |  false  | Put some text here |
| width    | string  |    no    |  100%   |                    |
| height   | string  |    no    |  100%   |                    |

</details>

#### Examples

##### **DEFAULT WITH AVIF AND WEBP**

```html
import { Picture } from '@sveltinio/sveltin;

<picture src="logo.png" altText="your logo" width="30%" />
```

##### **DEFAULT AND AVIF ONLY**

```html
import { Picture } from '@sveltinio/sveltin;

<picture src="logo.png" avif altText="your logo" width="30%" />
```

##### **DEFAULT AND WEBP ONLY**

```html
import { Picture } from '@sveltinio/sveltin;

<picture src="logo.png" webp altText="your logo" width="30%" />
```

## License

Free and open-source software under the [MIT License](LICENSE)
