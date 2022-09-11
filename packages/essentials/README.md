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
- [Tabs](#tabs)
- [ToggleList](#toggle-list)

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

The `Button` component can be used for both `button` and link `a` by adding the _href_ prop. It supports different variants, sizes, shapes and others:

- **types**: `default`, `primary`, `secondary`, `info`, `error`, `success`, `warning`, `light` and `dark`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`
- **variants**: filled (default), `outlined`
- **shapes**: rectangular (default), `rounded` or `circular`
- **focus**: with or without the focus ring
- **icons**: render an Icon either on the left side or the right side. Wrap the Icon with the Button component, then add the slot='leftIcon' or slot='rightIcon' prop to your Icon.

#### Examples

```html
<script>
   import { Button } from '@sveltinio/essentials'
   import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';

   const handleButtonClick = (event) => { alert('button clicked on:' + event.detail); };
<script>

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

### Link

The `Link` component defines a hyperlink used to link an internal or external resource. It accepts and render any child component using the **Svelte slot**.

#### Examples

```html
<script>
   import { Link, Picture } from '@sveltinio/essentials';
   import DummyIcon from './DummyIcon.svelte';
</script>

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
<script>
   import {
      Dropdown,
      DropdownButton,
      DropdownItem,
      DropdownMenu
   } from '@sveltinio/essentials';
<script>

<Dropdown>
 <DropdownButton label="Menu" />
 <DropdownMenu>
  <DropdownItem id="1" label="Item 1" href="#" />
  <DropdownItem id="2" label="Item 2" href="#" />
  <DropdownItem id="3" label="Item 3" href="#" />
 </DropdownMenu>
</Dropdown>
```

##### **WITH ITEMS AS BUTTONS**

```html
<script>
   import {
      Dropdown,
      DropdownButton,
      DropdownItem,
      DropdownMenu
   } from '@sveltinio/essentials';

   const hello = (event) => { alert('clicked on:' + event.detail); };
</script>

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
<script>
   import { Picture } from '@sveltinio/sveltin';
</script>


<Picture src="logo.png" alt="your logo" width="300" webp avif />
```

##### **DEFAULT AND AVIF ONLY**

```html
<script>
   import { Picture } from '@sveltinio/sveltin';
</script>

<Picture src="logo.png" alt="your logo" width="300" avif />
```

##### **DEFAULT AND WEBP ONLY**

```html
<script>
   import { Picture } from '@sveltinio/sveltin';
</script>

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

### Tabs

The `Tabs` component is used to easily includes tabs within the page. It supports different variants and sizes:

- **types**: `default`, `bordered`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`

#### Examples

```html
<script>
   import { Tabs, Tab } '@sveltinio/sveltin';
   import DummyIcon from './_dummyIcon.svelte';
</script>

<Tabs>
   <Tab id="1" title="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
   <Tab id="2" title="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
   <Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</Tabs>

<Tabs activeTab="3" type="bordered">
   <Tab id="3" title="Tab 3" icon={DummyIcon}>Sample content for <strong>Tab 3</strong></Tab>
   <Tab id="4" title="Tab 4" icon={DummyIcon}>Sample content for <strong>Tab 4</strong></Tab>
   <Tab id="5" title="Tab 5" icon={DummyIcon}>Sample content for <strong>Tab 5</strong></Tab>
</Tabs>

```

#### Properties

##### Tabs

| Property  |  Type   | Required | Default | Description                                     |
| :-------- | :-----: | :------: | :-------: | :-------------------------------------------- |
| activeTab | string  |    no    | 1       | The tab to be active (selected) at the startup  |
| type      | string  |    no    | default | Default or bordered)                            |
| size      | string  |    no    | base    | Set the tab title size (xs, sm, base, md or lg) |

##### Tab

| Property |  Type   | Required | Default          | Description                                              |
| :------- | :-----: | :------: | :--------------: | :--------------------------------------------------------|
| id       | string  | yes      |                  | An unique identifier for the tab                         |
| title    | string  | yes      |                  | The title for the tab                                    |
| icon     | any     | no       |                  | The icon placed on the left of the tab title for the tab |

#### Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

| CSS Variable             | Default            | |
| :----------------------- | :----------------- | :----------------------------------------------------------: |
| `tabs-list-border-width` | `1px`              |                                                              |
| `tabs-list-border-style` | `solid`            |                                                              |
| `tabs-list-border-color` | `rgb(226 232 240)` | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |
| `tab-border-width`       | `2px`              |                                                              |
| `tab-border-style`       | `solid`            |                                                              |
| `tab-border-color`       | `rgb(241 245 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `tab-border-color-hover` | `rgb(148 163 184)` | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `tab-bg-color-hover`     | `rgb(248 250 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `content-border-width`   | `1px`              |                                                              |
| `content-border-style`   | `solid`            |                                                              |
| `content-border-color`   | `rgb(226 232 240)` | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |

### ToggleList

The **ToggleList** component is used to includes a toggle list within the page. It supports different sizes for the title text:

- **sizes**: _xs_, _sm_, _base_, _md_, _lg_ (default) and _full_

#### Examples

```html
<script lang="ts">
   import { ToggleList } from '@sveltinio/essentials';
   // Sample Icons
   import LongArrowDownRightIcon from '@indaco/svelte-iconoir/icons/LongArrowDownRightIcon.svelte';
   import LongArrowRightUpIcon from '@indaco/svelte-iconoir/icons/LongArrowRightUpIcon.svelte';
   import CloudUploadIcon from '@indaco/svelte-iconoir/icons/CloudUploadIcon.svelte';
   import BellIcon from '@indaco/svelte-iconoir/icons/BellIcon.svelte';
   // sample data
   const contentForToggleList = [
      { label: 'First', url: '#first', icon: CloudUploadIcon },
      { label: 'Second', url: '#second', icon: BellIcon }
   ];
</script>

<h3>Default</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} />

<h3>Custom Icons</h3>
<ToggleList title="My Toggle List 2" items={contentForToggleList}>
   <LongArrowDownRightIcon slot="whenClosedIcon" />
   <LongArrowRightUpIcon slot="whenOpenIcon" />
</ToggleList>

<h3>No Icons for the Title</h3>
<ToggleList title="My Toggle List 3" items={contentForToggleList} noIcons />
```

#### Properties

| Property  |  Type   | Required | Default | Description                                                   |
| :-------- | :-----: | :------: | :-----: | :------------------------------------------------------------ |
| title     | string  | yes      |         | The title for the List                                        |
| items     | Array   | yes      |         | An array of objects with `label`, `url` and `icon` props      |
| styles    | Object  | no       |         | An object representing the CSS variables you want to override |
| size      | string  | no       | lg      | Set the tab title size (xs, sm, base, md or lg)               |
| noIcons   | boolean | no       | false   | If true no icons will be placed on the next of the title text |

**items** is an array of _ListItem_ objects:

```typescript
export type ListItem = {
   label: string;
   url?: string;
   icon?: any;
};
```

#### Theming

To simplify custom styles on the component, behind the scenes we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

Below is the CSS variables list you can use to apply your own styles to the component.

| CSS Variable              | Default            | |
| :------------------------ | :----------------- | :----------------------------------------------------------: |
| `title-color`             | `rgb(15 23 42)`    | ![#0F172A](https://via.placeholder.com/15/0F172A/0F172A.png) |
| `title-color-hover`       | `rgb(15 23 42)`    | ![#0F172A](https://via.placeholder.com/15/0F172A/0F172A.png) |
| `title-font-weight`       | `600`              | |
| `title-bg-color`          | `rgb(255 255 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `title-bg-color-hover`    | `rgb(248 250 252)` | ![#F8FAFC](https://via.placeholder.com/15/F8FAFC/F8FAFC.png) |
| `item-color`              | `rgb(51 65 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `item-border-width`       | `1px`              | |
| `item-border-style`       | `solid`            | |
| `item-border-color`       | `rgb(241 245 249)` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/F1F5F9.png) |
| `item-color-hover`        | `rgb(51 65 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `item-border-color-hover` | `rgb(241 245 249)` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/F1F5F9.png) |
| `active-color`            | `rgb(15 23 42)`    | ![#0F172A](https://via.placeholder.com/15/0F172A/0F172A.png) |
| `active-border-color`     | `rgb(15 23 42)`    | ![#0F172A](https://via.placeholder.com/15/0F172A/0F172A.png) |

##### Define your own styles

Create an object with the CSS variable name as `key` and the new value as `value` and pass it to the `styles` prop on the component.

```html
<script>
   import { ToggleList } from '$lib';
   // sample data
   const contentForToggleList = [
      { label: 'First', url: '#first', icon: CloudUploadIcon },
      { label: 'Second', url: '#second', icon: BellIcon }
   ];

   const myOwnStyles = {
      'title-color': '#365314',
      'title-color-hover': '#365314',
      'title-bg-color': '#bef264',
      'title-bg-color-hover': '#a3e635',
      'item-border-width': '2px',
      'item-border-style': 'dashed',
      'item-border-color': '#bef264',
      'item-border-color-hover': '#365314',
      'item-color': '#365314'
   };
</script>

<ToggleList title="My Own Styles List" items={contentForToggleList} styles={myownStyles} />
```

## License

Free and open-source software under the [MIT License](LICENSE)
