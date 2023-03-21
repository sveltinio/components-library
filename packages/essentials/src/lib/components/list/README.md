# ToggleList

The **ToggleList** is an accessible component used to includes a toggle list within the page.

## Examples

<img src="./assets/images/showcase.png" alt="ToggleList - Default Styles" />

## Usage

```html
<script lang="ts">
   import { ToggleList } from '@sveltinio/essentials/list';
   // Sample Icons
   import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/long-arrow-down-right';
   import { CloudUploadIcon } from '@indaco/svelte-iconoir/cloud-upload';
   import { BellIcon } from '@indaco/svelte-iconoir/bell';
   // sample data
   const contentForToggleList = [
      { label: 'First', url: '#first', icon: CloudUploadIcon },
      { label: 'Second', url: '#second', icon: BellIcon }
   ];
</script>

<h3>Default</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} />

```

## Properties

The `ToggleList` component exposes a set of properties but it does not prevent you to pass any additional props.

### Functionals

| Property  | Type             | Required | Default | Description                                                                          |
| :-------- | :--------------: | :------: | :-----: | :----------------------------------------------------------------------------------- |
| title     | `string`         | yes      |         | The title for the List                                                               |
| items     | `Array<ListItem>`| yes      |         | An array of objects with `label`, `url` and `icon` props                             |
| full      | `boolean`        | no       | `false` | If true, the full size of the container is used. The icons will be placed at the end |

**items** is an array of [ListItem] objects:

```typescript
export type ListItem = {
   label: string;
   url?: string;
   icon?: any;
   external?: boolean;
};
```

### Styles

| Property | Type     | Required | Default | Description                                       |
| :------- | :------: | :------: | :-----: | :------------------------------------------------ |
| class    | `string` |    no    |         | The css class name used to make a theme variant   |
| styles   | `object` |    no    | `{}`    | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Slots

| Name            | Default | Fallback |
| :-------------- | :-----: | :------: |
| `leftSideIcon`  | ✗       |    ✗     |
| `rightSideIcon` | ✗       |    ✓     |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[ListItem]: https://github.com/sveltinio/components-library/blob/358ffd124face5e321b67b528260ee646c60fc30/packages/essentials/src/lib/components/list/types.ts#L1
