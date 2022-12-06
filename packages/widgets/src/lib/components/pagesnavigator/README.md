# PagesNavigator

## Examples

<img src="https://statics.sveltin.io/github/components/widgets/pagesnavigator/default.gif" alt="PagesNavigator - Default Styles" />

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

| Property     | Type                 | Required | Default | Description |
| :----------- | :------------------: | :------: | :-----: | :---------- |
| prev         | `PagesNavigatorItem` |    yes   |         | |
| next         | `PagesNavigatorItem` |    yes   |         | |
| placeholders |   `boolean`          |    no    |  `true` | If false, does not show the placeholders 'previous' and 'next' |
| labels       |   `boolean`          |    no    |  `true` | If false, does not show the labels (titles)                    |
| spacer       |   `boolean`          |    no    | `false` | If true, shows a vertical line between left and right content  |
| styles       |    Object            |    no    |   `{}`  | Used to pass CSS variables to apply custom styles              |

**prev** and **next** are `PagesNavigatorItem` objects:

```typescript
export interface PagesNavigatorItem = {
   placeholder?: string;
   label: string;
   href: string;
   alt?: string;
};
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

Please, refer to the [Design-Rules] document to better understand how the component has been designed and how to customize the styles.

The CSS variables are defined in the [_variables.postcss](./_variables.postcss) file.

### Examples

#### Custom Styles - Sample 1

<img src="https://statics.sveltin.io/github/components/widgets/pagesnavigator/custom_1.png" alt="PagesNavigator - Custom Styles - Sample 1" />
<br/>

```html
<script>
    import { PagesNavigator } from '@sveltinio/widgets';

    const prevObj = { label: 'prev title', href: 'link_previous_slug' };
    const nextObj = { label: 'next title', href: 'link_next_slug' }
    const customStyles_1 = {
        'border-t-width': '2px',
        'border-t-color': '#374151',
        'spacer-color': '#6b7280',
        'link-border-color': 'transparent',
        'link-bg-color': 'transparent',
        'link-bg-color-hover': 'transparent',
        'content-max-width-md': '100%',
        'content-max-width-lg': '50%',
        'content-bg-color': '#f3f4f6',
        'content-border-color': '#e5e7eb',
        'content-border-color-hover': '#6b7280'
    };
</script>

<PagesNavigator prev={prevObj} next={nextObj} styles={customStyles_1} spacer />
```

#### Custom Styles - Sample 2

<img src="https://statics.sveltin.io/github/components/widgets/pagesnavigator/custom_2.png" alt="PagesNavigator - Custom Styles - Sample 2" />
<br/>

```html
<script>
    import { PagesNavigator } from '@sveltinio/widgets';

    const prevObj = { label: 'prev title', href: 'link_previous_slug' };
    const nextObj = { label: 'next title', href: 'link_next_slug' }
    const orange = {
        'max-width': '80rem',
        'bg-color': '#fbbf24',
        'border-t-color': '#b45309',
        'border-r-color': '#b45309',
        'border-b-color': '#b45309',
        'border-l-color': '#b45309',
        'border-tl-radius': '1rem',
        'border-br-radius': '1rem',
        'link-border-color': 'transparent',
        'link-bg-color': 'transparent',
        'link-bg-color-hover': 'transparent',
        'content-bg-color-hover': '#fcd34d',
        'content-border-color': 'transparent',
        'content-border-color-hover': '#f59e0b',
        'content-max-width-md': '100%',
        'content-max-width-lg': '80%',
        'placeholder-color': '#92400e',
        'message-color': '#92400e'
    };
</script>

<PagesNavigator prev={prevObj} next={nextObj} styles={orange} spacer />
```

#### Custom Styles - Sample 3

<img src="https://statics.sveltin.io/github/components/widgets/pagesnavigator/custom_3.png" alt="PagesNavigator - Custom Styles - Sample 3" />
<br/>

```html
<script>
    import { PagesNavigator } from '@sveltinio/widgets';

    const prevObj = { label: 'prev title', href: 'link_previous_slug' };
    const nextObj = { label: 'next title', href: 'link_next_slug' }
    const dark = {
        'border-t-color': 'rgb(15 23 42)',
        'bg-color': 'rgb(71 85 105)',
        'link-border-color': 'transparent',
        'link-bg-color': 'transparent',
        'link-bg-color-hover': 'transparent',
        'content-max-width-md': '70%',
        'content-max-width-lg': '40%',
        'content-l-ml': 'auto',
        'content-l-mr-md': '2rem',
        'content-l-text-align': 'right',
        'content-r-ml-md': '2rem',
        'content-r-mr-md': 'auto',
        'content-r-text-align': 'left',
        'content-bg-color-hover': '#64748b',
        'content-border-color': '#64748b',
        'placeholder-color': '#e2e8f0',
        'placeholder-letter-spacing': '0.025em',
        'message-color': '#e2e8f0',
        'message-font-weight': '500',
        'message-letter-spacing': '0.05em'
    };
</script>

<PagesNavigator prev={prevObj} next={nextObj} styles={dark} spacer />
```

[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design-Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
