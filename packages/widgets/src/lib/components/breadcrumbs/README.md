# Breadcrumbs

## Properties

The `Breadcrumbs` component exposes the following properties:

| Property | Type   | Required | Default      | Description                                        |
| :------- | :----: | :------: | :----------: | :------------------------------------------------- |
| baseURL  | string |    no    |     /        |                                                    |
| parent   | string |    no    | empty string | text to be showed as link to the parent page       |
| current  | string |   yes    |              | text to be showed (a page name, a post title etc.) |
| styles   | Object |    no    | empty object | Used to pass CSS variables to apply custom styles  |

```html
<script>
    import { Breadcrumbs } from '@sveltinio/widgets';
<script>

<Breadcrumbs baseURL="http://example.com" parent="posts" current="Getting Started" />
```

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

Below is the CSS variables list to apply your own styles to the component.

| CSS Variable          | Default              |                                                              |
| :-------------------- | -------------------: | :----------------------------------------------------------: |
| `icon-color`          | `rgb(148, 163, 184)` | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `icon-color-hover`    | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `parent-color`        | `rgb(100, 116, 139)` | ![#64748b](https://via.placeholder.com/15/64748b/64748b.png) |
| `parent-color-hover`  | `rgb(51, 65, 85)`    | ![#334155](https://via.placeholder.com/15/334155/334155.png) |
| `current-color`       | `rgb(100, 116, 139)` | ![#64748b](https://via.placeholder.com/15/64748b/64748b.png) |

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
