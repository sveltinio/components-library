# PagesNavigator

PagesNavigator components to help users navigating throught the pages.

## Examples

<img src="./assets/images/default.png" alt="PagesNavigator - Default Styles" />

## Usage

```html
<script>
    import { PagesNavigator } from '@sveltinio/widgets';

    const prevObj = { label: 'prev title', href: 'link_previous_slug' };
    const nextObj = { label: 'next title', href: 'link_next_slug' }
</script>

<PagesNavigator prev={prevObj} next={nextObj} />
```

## Properties

The `PagesNavigator` component exposes the following properties:

### Functionals

| Property     | Type                 | Required | Default | Description                                                    |
| :----------- | :------------------: | :------: | :-----: | :------------------------------------------------------------- |
| prev         | `PagesNavigatorItem` |    yes   |         |                                                                |
| next         | `PagesNavigatorItem` |    yes   |         |                                                                |
| placeholders |   `boolean`          |    no    |  `true` | If false, does not show the placeholders 'previous' and 'next' |
| labels       |   `boolean`          |    no    |  `true` | If false, does not show the labels (titles)                    |
| spacer       |   `boolean`          |    no    | `false` | If true, shows a vertical line between left and right content  |

**prev** and **next** are `PagesNavigatorItem` objects:

```typescript
type PagesNavigatorItem = {
   label: string;
   placeholder?: string;
   href: string;
   alt?: string;
};
```

### Styles

| Property     | Type                 | Required | Default | Description                                       |
| :----------- | :------------------: | :------: | :-----: | :------------------------------------------------ |
| class        |    string            |    no    |         | The css class name used to make a theme variant   |
| styles       |    Object            |    no    |   `{}`  | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Slots

| Name       | Default | Fallback |
| :--------- | :-----: | :------: |
| `prevIcon` | ✗       |    ✓     |
| `nextIcon` | ✗       |    ✓     |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
