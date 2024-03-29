# ColorViewer - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables to override. Using `class` is more suitable when the goal is to create personal versions(themes) for the component, so sevaral props are override;

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## CSS Variables

The CSS variables are defined in the [variables.css](../../styles/components/color/variables.css) file.

## Examples

### Custom Styles with prop

<img src="./assets/images/custom_prop.png" alt="ColorViewer - Custom Styles with prop" />

```html
<script>
   import { ColorViewer } from '@sveltinio/essentials/color';

   const myStyles = {
      'border-color': '#075985',
      'border-width': '2px',
      color: '#075985'
   };
</script>

<ColorViewer value="#0ea5e9" labelColor="#075985" border styles={myStyles} />
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
   import { ColorViewer } from '@sveltinio/essentials/color';
</script>

<ColorViewer value="#22d3ee" border class="preview-color" />
```

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
