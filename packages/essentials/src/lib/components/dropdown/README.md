# Dropdown

`Dropdown` menus are built using a combination of the `Dropdown`, `DropdownButton`, `DropdownMenu`, and `DropdownItem` components.

## Examples

### **WITH ITEMS AS LINKS**

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

### **WITH ITEMS AS BUTTONS**

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

## Properties

The Dropdown components set exposes a set of properties but it does not prevent you to pass any additional props.

The following are the ones exposed by the component

### Dropdown

The `Dropdown` component is the main wrapper component.

| Property | Type     | Required | Default  | Description         |
| :------- | :------: | :------: | :------: |:------------------- |
| isOpen   | boolean  | no       |          | show/hide the items |

### DropdownButton

The `DropdownButton` component exposes the following properties:

| Property | Type    | Required | Default  | Description |
| :------- | :-----: | :------: | :------: |:----------- |
| label    | string  | yes      |          | Button text |

### DropdownItem

The `DropdownItem` component exposes the following properties:

| Property | Type    | Required | Default  | Description                                 |
| :------- | :-----: | :------: | :------: |:------------------------------------------- |
| id       | string  | yes      |          | Item identifier                             |
| label    | string  | yes      |          | Item text                                   |
| mode     | string  | no       | button   | Render as button or link                    |
| href     | string  | no       | null     | The URL of the page the link goes to        |
| prefetch | boolean | no       | yes      | Enable `data-sveltekit-preload-data`        |
| target   | string  | no       | _self    | Specifies where to open the linked document |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

| CSS Variable           | Default              | |
| :--------------------- | -------------------: | :----------------------------------------------------------: |
| `btn-cursor`           | `pointer`            | |
| `btn-color`            | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `btn-font-size`        | `1rem`               | |
| `btn-font-weight`      | `400`                | |
| `btn-line-height`      | `1rem`               | |
| `btn-bg-color`         | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `btn-bg-color-hover`   | `rgb(241, 245, 249)` | ![#E2E8F0](https://via.placeholder.com/15/E2E8F0/E2E8F0.png) |
| `btn-pt`               | `0.5rem`             | |
| `btn-pr`               | `1rem`               | |
| `btn-pb`               | `0.5rem`             | |
| `btn-pl`               | `1rem`               | |
| `btn-border-color`     | `rgb(241, 245, 249)` | ![#CBD5E1](https://via.placeholder.com/15/CBD5E1/CBD5E1.png) |
| `btn-border-style`     | solid`               | |
| `btn-border-width`     |`1px`                 | |
| `btn-border-radius`    | `0.25rem`            | |
| `btn-ring-color`       | `transparent`        | |
| `btn-ring-width`       | `2px`                | |
| `btn-ring-style`       | `solid`              | |
| `btn-ring-offset`      | `2px`                | |
| `content-max-w`        | `24rem`              | |
| `content-width`        | `14rem`              | |
| `content-color`        | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `content-bg-color`     | `rgb(255, 255, 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `content-mt`           | `0.5rem`             | |
| `content-mr`           | `0`                  | |
| `content-mb`           | `0`                  | |
| `content-ml`           | `0`                  | |
| `content-z-index`      | `10`                 | |
| `item-cursor`          | `pointer`            | |
| `item-color`           | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png)  |
| `item-font-size`       | `1rem`               | |
| `item-font-weight`     | `400`                | |
| `item-text-decoration` | `none`               | |
| `item-bg-color-hover`  | `rgb(241, 245, 249)` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/F1F5F9.png)  |
| `item-pt`              | `0.5rem`             | |
| `item-pr`              | `1rem`               | |
| `item-pb`              | `0.5rem`             | |
| `item-pl`              | `1rem`               | |


[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
