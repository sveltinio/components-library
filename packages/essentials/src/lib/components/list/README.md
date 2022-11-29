# ToggleList

The **ToggleList** component is used to includes a toggle list within the page. It supports different sizes for the title text:

- **sizes**: _xs_, _sm_, _base_, _md_, _lg_ (default) and _full_

## Examples

```html
<script lang="ts">
   import { ToggleList } from '@sveltinio/essentials';
   // Sample Icons
   import {
      LongArrowDownRightIcon,
      LongArrowUpRightIcon,
      CloudUploadIcon,
      BellIcon
   } from '@indaco/svelte-iconoir';
   // sample data
   const contentForToggleList = [
      { label: 'First', url: '#first', icon: CloudUploadIcon },
      { label: 'Second', url: '#second', icon: BellIcon }
   ];
</script>

<h3>Default</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} />

<h3>Full Size</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} full />

<h3>Left Side icon</h3>
<ToggleList title="My Toggle List" items={contentForToggleList}>
   <BellIcon size="18" slot="leftSideIcon" />
</ToggleList>

<h3>Custom Icons</h3>
<ToggleList title="My Toggle List" items={contentForToggleList}>
   <LongArrowDownRightIcon slot="whenClosedIcon" />
   <LongArrowUpRightIcon slot="whenOpenIcon" />
</ToggleList>
```

## Properties

| Property  |  Type            | Required | Default | Description                                                                          |
| :-------- | :--------------: | :------: | :-----: | :----------------------------------------------------------------------------------- |
| title     | string           | yes      |         | The title for the List                                                               |
| items     | `Array<ListItem>`| yes      |         | An array of objects with `label`, `url` and `icon` props                             |
| full      | boolean          | no       | `false` | If true, the full size of the container is used. The icons will be placed at the end |
| size      | string           | no       | `base`  | Set the title text size. One of [`xs`, `sm`, `base`, `lg`, `xl]                      |
| styles    | Object           | no       |         | An object representing the CSS variables you want to override                        |

**items** is an array of _ListItem_ objects:

```typescript
export type ListItem = {
   label: string;
   url?: string;
   icon?: any;
};
```

## Theming

To simplify custom styles on the component, behind the scenes we used the built-in solution for component theming using [style-props].

Below is the CSS variables list to apply your own styles to the component.

| CSS Variable               | Default              | |
| :------------------------- | -------------------: | :----------------------------------------------------------: |
| `btn-width`                | `auto`               | |
| `btn-width-full`           | `100%`               | |
| `btn-cursor`               | `pointer`            | |
| `btn-color`                | `rgb(51 65 85)`      | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `btn-color-hover`          | `rgb(15, 23, 42)`    | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) |
| `btn-font-size`            | `1rem`               | |
| `btn-font-weight`          | `600`                | |
| `btn-line-height`          | `1.5rem`             | |
| `btn-letter-spacing`       | `0em`                | |
| `btn-text-decoration`      | `none`               | |
| `btn-pt`                   | `0.5rem`             | |
| `btn-pr`                   | `0.5rem`             | |
| `btn-pb`                   | `0.5rem`             | |
| `btn-pl`                   | `0.5rem`             | |
| `btn-border-width`         | `0`                  | |
| `btn-border-style`         | `solid`              | |
| `btn-border-color`         | `transparent`        | |
| `btn-border-radius`        | `0.25rem`            | |
| `btn-bg-color`             | `rgb(255, 255, 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `btn-bg-color-hover`       | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `item-color`               | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `item-color-hover`         | `rgb(15 23 42)`      | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) |
| `item-font-size`           | `1rem`               | |
| `item-font-weight`         | `600`                | |
| `item-line-height`         | `1.5rem`             | |
| `item-letter-spacing`      | `0em`                | |
| `item-text-decoration`     | `none`               | |
| `item-mt`                  | `0.5rem`             | |
| `item-mr`                  | `0`                  | |
| `item-mb`                  | `0.5rem`             | |
| `item-ml`                  | `1rem`               | |
| `item-pt`                  | `0`                  | |
| `item-pr`                  | `0`                  | |
| `item-pb`                  | `0`                  | |
| `item-pl`                  | `0`                  | |
| `item-border-width`        | `1px`                | |
| `item-border-style`        | `solid`              | |
| `item-border-color`        | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `item-border-color-hover`  | `rgb(148 163 184)` . | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `item-bg-color             | `transparent`        | |
| `item-bg-color-hover`      | `transparent`        | |
| `active-item-color`        | `rgb(15, 23, 42)` ); | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) |
| `active-item-border-color` | `rgb(15, 23, 42)`);  | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) |

[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props

### Define your own styles

Create an object with the CSS variable name as `key` and the new value as `value` and pass it to the `styles` prop on the component.

```html
<script>
   import { ToggleList } from '@sveltinio/essentials';
   // sample data
   const contentForToggleList = [
      { label: 'First', url: '#first', icon: CloudUploadIcon },
      { label: 'Second', url: '#second', icon: BellIcon }
   ];

   const customStyles = {
      'btn-color': '#365314',
      'btn-color-hover': '#365314',
      'btn-bg-color': '#bef264',
      'btn-bg-color-hover': '#a3e635',
      'item-border-width': '2px',
      'item-border-style': 'dashed',
      'item-border-color': '#bef264',
      'item-border-color-hover': '#365314',
      'item-color': '#365314',
      'item-bg-color-hover': '#bef264'
   };
</script>

<ToggleList title="My Toggle List" items={contentForToggleList} styles={customStyles} full />
```
