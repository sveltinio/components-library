# Breadcrumbs

## Examples

```html
<script>
    import { Breadcrumbs } from '@sveltinio/widgets';
<script>

<Breadcrumbs baseURL="http://example.com" parent="posts" current="Getting Started" />
```

## Properties

The `Breadcrumbs` component exposes the following properties:

| Property | Type   | Required | Default      | Description                                        |
| :------- | :----: | :------: | :----------: | :------------------------------------------------- |
| baseURL  | string |    no    |     /        |                                                    |
| parent   | string |    no    | empty string | text to be showed as link to the parent page       |
| current  | string |   yes    |              | text to be showed (a page name, a post title etc.) |
| styles   | Object |    no    | empty object | Used to pass CSS variables to apply custom styles  |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

Please, refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

The CSS variables are defined in the [variables.css](./variables.css) file.

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md

### Example

```html
<script>
    import { Breadcrumbs } from '@sveltinio/widgets';
    const customStyles = {
        'icon-color': '#8b5cf6',
        'icon-color-hover': '#4338ca',
        'parent-color': '#8b5cf6',
        'parent-color-hover': '#4338ca',
        'current-color': '#4338ca'
    };
<script>

<Breadcrumbs
    baseURL="http://example.com"
    parent="posts"
    current="Getting Started"
    styles={customStyles}
/>
```
