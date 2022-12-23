# ColorViewer - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

- `styles` is an object with the CSS variable name (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune some styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables to override. Using `class` is more suitable when change several props to fit your theme or you want to have multiple themes for the the same component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## CSS Variables

The CSS variables are defined in the [variables.css](./variables.css) file.

## Example

### Custom Styles with prop

```html
<script>
   import { ColorViewer } from '@sveltinio/essentials';

   const myStyles = {
      'border-color': '#075985',
      'border-width': '2px',
   };
</script>

<ColorViewer value="#22d3ee" border styles={myStyles} />
```

### Custom Styles with CSS Class

```css
/* app.css*/
.preview-color {
  --border-width: 2px;
  --border-color: #67e8f9;
}
```

```html
<script>
   import { ColorViewer } from '@sveltinio/essentials';
</script>

<ColorViewer value="#22d3ee" border class="preview-color" />
```

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
