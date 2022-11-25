# ToggleList

The **ToggleList** component is used to includes a toggle list within the page. It supports different sizes for the title text:

- **sizes**: _xs_, _sm_, _base_, _md_, _lg_ (default) and _full_

## Examples

```html
<script lang="ts">
   import { ToggleList } from '@sveltinio/essentials';
   // Sample Icons
   import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/icons/LongArrowDownRightIcon';
   import { LongArrowRightUpIcon } from '@indaco/svelte-iconoir/icons/LongArrowRightUpIcon';
   import { CloudUploadIcon } from '@indaco/svelte-iconoir/icons/CloudUploadIcon';
   import { BellIcon } from '@indaco/svelte-iconoir/icons/BellIcon';
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

## Properties

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

## Theming

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

### Define your own styles

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
