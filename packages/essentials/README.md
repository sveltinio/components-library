<div align="center">
    <h1>Essentials Components</h1>
    &nbsp;
    <a href="https://www.npmjs.com/package/@sveltinio/essentials" target="_blank"><img src="https://img.shields.io/npm/v/@sveltinio/essentials.svg?style=flat" alt="sveltinio/essentials NPM version badge" /></a>
</div>

## Description

A collection of essentials Svelte _unstyled_ components.

## Components List

- [Button](#button)
- [Link](#link)
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

#### Properties

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
| prefetch      | boolean |    no    |    false    | Enable sveltekit:prefetch for the link                          |
| external      | boolean |    no    |    false    | If true, opens the linked document in a new window or tab       |

#### Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

The `Button` component allows you to pass the following styles as props:

| CSS Variable        | Default            | Default (HEX) | |
| :------------------ | ------------------:| ------------: | :----------------------------------------------------------: |
| `color`             | `rgb(255 255 255)` | `#FFFFFF`     | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `bg-color`          | `rgb(228 228 231)` | `#E4E4E4`     | ![#E4E4E4](https://via.placeholder.com/15/E4E4E4/E4E4E4.png) |
| `bg-color-hover`    | `rgb(244 244 245)` | `#F4F4F5`     | ![#F4F4F5](https://via.placeholder.com/15/F4F4F5/F4F4F5.png) |
| `border-color`      | `rgb(228 228 231)` | `#E4E4E7`     | ![#E4E4E7](https://via.placeholder.com/15/E4E4E7/E4E4E7.png) |
| `outlined-bg-hover` | `rgb(244 244 245)` | `#F4F4F5`     | ![#F4F4F5](https://via.placeholder.com/15/F4F4F5/F4F4F5.png) |
| `ring-color`        | `rgb(212 212 216)` | `#D4D4D8`     | ![#D4D4D8](https://via.placeholder.com/15/D4D4D8/D4D4D8.png) |
| `ring-width`        |              `2px` |               |                                                              |
| `ring-offset`       |              `2px` |               |                                                              |
| `ring-style`        |            `solid` |               |                                                              |

##### Example

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

### Link

The `Link` component defines a hyperlink used to link an internal or external resource. It accepts and render any child component using the **Svelte slot**.

#### Examples

```html
import { Link, Picture } from '@sveltinio/essentials';
import DummyIcon from './DummyIcon.svelte';

<Link label="sveltin" url="https://sveltin.io" />

<Link id="sveltin-logo-link" label="sveltin" url="https://sveltin.io" icon={false}>
   <Picture image="logo.png" alt="sveltin logo" width="30%" />
</Link>

<Link label="sveltin.io" url="https://sveltin.io" style>
   <DummyIcon slot="icon" />
</Link>
```

#### Properties

The `Link` component exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component:

| Property   |  Type   | Required | Default  | Description                                                         |
| :--------- | :-----: | :------: | :------- | :------------------------------------------------------------------ |
| label      | string  |   yes    |          | The text to display                                                 |
| url        | string  |   yes    |          | The URL of the page the link goes to                                |
| underline  | boolean |    no    | false    | Underlined label text                                               |
| alt        | string  |    no    | as label | The text description of the link                                    |
| external   | boolean |    no    | false    | If external, an icon will be apped next to the right of the label   |
| noOpenener | boolean |    no    | true     | Go to the linked resource without granting the new browsing context |
| noReferrer | boolean |    no    | true     | Prevent passing the referrer information to the target website      |
| icon       | boolean |    no    | true     | Shows an icon next right to the label                               |

#### Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

##### Link

| CSS Variable        | Default            | |
| :------------------ | :----------------- | :----------------------------------------------------------: |
| `color`             | `rgb(30 41 59)`    | ![#1E293B](https://via.placeholder.com/15/1E293B/1E293B.png) |

##### ExternalLinkIcon

| CSS Variable | Default            | |
| :----------- | :----------------- | :----------------------------------------------------------: |
| `color`      | `rgb(148 163 184)` | ![#94A3B8](https://via.placeholder.com/15/94A3B8/94A3B8.png) |
| `width`      | `1.2rem`           |  |
| `color`      | `1.2rem`           |  |

### Dropdown

`Dropdown` menus are built using a combination of the `Dropdown`, `DropdownButton`, `DropdownMenu`, and `DropdownItem` components.

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

#### Properties

The Dropdown components set exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component

##### Dropdown

The `Dropdown` component is the main wrapper component.

| Property | Type     | Required | Default  | Description         |
| :------- | :------: | :------: | :------: |:------------------- |
| isOpen   | boolean  | no       |          | show/hide the items |

##### DropdownButton

The `DropdownButton` component exposes the following properties:

| Property | Type    | Required | Default  | Description |
| :------- | :-----: | :------: | :------: |:----------- |
| label    | string  | yes      |          | Button text |

##### DropdownItem

The `DropdownItem` component exposes the following properties:

| Property | Type    | Required | Default  | Description                                 |
| :------- | :-----: | :------: | :------: |:------------------------------------------- |
| id       | string  | yes      |          | Item identifier                             |
| label    | string  | yes      |          | Item text                                   |
| mode     | string  | no       | button   | Render as button or link                    |
| href     | string  | no       | null     | The URL of the page the link goes to        |
| prefetch | boolean | no       | yes      | Add sveltekit:prefetch                      |
| target   | string  | no       | _self    | Specifies where to open the linked document |

#### Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

##### DropdownButton

| CSS Variable        | Default            | |
| :------------------ | :----------------- | :----------------------------------------------------------: |
| `color`             | `rgb(51 65 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `bg-color`          | `rgb(241 245 249)` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/F1F5F9.png) |
| `bg-color-hover`    | `rgb(226 232 240)` | ![#E2E8F0](https://via.placeholder.com/15/E2E8F0/E2E8F0.png) |
| `border-color`      | `rgb(203 213 225)` | ![#CBD5E1](https://via.placeholder.com/15/CBD5E1/CBD5E1.png) |

##### ArrowDownIcon & ArrowUpIcon

| CSS Variable | Default           | |
| :----------- | :---------------- | :----------------------------------------------------------: |
| `color`      | `rgb(14 116 144)` | ![#0E7490](https://via.placeholder.com/15/0E7490/0E7490.png) |

##### DropdownMenu

| CSS Variable | Default            | |
| :----------- | :----------------- | :----------------------------------------------------------: |
| `bg-color`   | `rgb(255 255 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |

##### DropdownItem

| CSS Variable     | Default            | |
| :--------------- | :----------------- | :-----------------------------------------------------------: |
| `color`          | `rgb(51 65 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png)  |
| `bg-color-hover` | `rgb(241 245 249)` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/F1F5F9.png)  |
| `font-size`      | `1rem`             |                                                               |
| `font-weight`    | `400`              |                                                               |

### Picture

The `Picture` component allows you to easily insert a [`picture` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) within the HTML document to use alternative image formats like AVIF or WEBP.

**Note:** WEBP and AVIF versions must be located at _the same path_ of your original one.

#### Examples

##### **DEFAULT WITH AVIF AND WEBP**

```html
import { Picture } from '@sveltinio/sveltin;

<Picture src="logo.png" alt="your logo" width="300" webp avif />
```

##### **DEFAULT AND AVIF ONLY**

```html
import { Picture } from '@sveltinio/sveltin;

<Picture src="logo.png" alt="your logo" width="300" avif />
```

##### **DEFAULT AND WEBP ONLY**

```html
import { Picture } from '@sveltinio/sveltin;

<Picture src="logo.png" alt="your logo" width="300" webp />
```

#### Properties

The `Picture` component exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component:

| Property |  Type   | Required | Default          | Description                                       |
| :------- | :-----: | :------: | :--------------: | :------------------------------------------------ |
| src      | string  |   yes    |                  | The path to the image you want to embed           |
| alt      | string  |    no    | as src filename  | The text description of the image                 |
| webp     | boolean |    no    |  false           | if true, will load the webp version for the image |
| avif     | boolean |    no    |  false           | if true, will load the avif version for the image |

## License

Free and open-source software under the [MIT License](LICENSE)
