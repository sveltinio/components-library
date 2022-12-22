# Button - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

- `styles` is an object with the CSS variable name (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune some styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables to override. Using `theme` is more suitable when change several props to fit your theme or you want to have multiple themes for the the same component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## CSS Variables

The CSS variables are defined in the [variables.css](./variables.css) file.

## Example

### Custom Styles with prop

```html
<script>
   import { Button } from '@sveltinio/essentials';

   const myStyles = {
      color: "rgb(54 83 20)",
      "border-color": "rgb(236 252 203)",
      "bg-color": "rgb(132 204 22)",
      "bg-hover": "rgb(163 230 53)",
      "ring-color": "rgb(190 242 100)",
      "ring-style": "dashed"
   }
</script>

<Button
   label="Custom Success"
   type="success"
   rounded
   withFocus
   styles={myStyles}
/>
```

### Custom Styles with CSS Class

```css
/* app.css*/
.my-primary-btn {
  --primary-color: white;
  --primary-bg-color: #a855f7;
  --primary-border-color: #e879f9;
  --primary-bg-color-hover: #c026d3;
  --primary-ring-color: #d946ef;
}
```

```html
<script>
   import { Button } from '@sveltinio/essentials';
</script>

<Button label="My Primary Button" type="primary" rounded class="my-primary-btn" />
```
