# Link - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

- `class`: is a global CSS class name where the class content has the CSS variables to override. Using `class` is more suitable when the goal is to create personal versions(themes) for the component, so sevaral props are override;
- `styles` is a JS object with the CSS variable name to override (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## CSS Variables

The CSS variables are defined in the [variables.css](./variables.css) file.

## Example

### Custom Styles with prop

```html
<script>
   import { Link } from '@sveltinio/essentials';

   const myLinkStyles = {
      pt: '1rem',
      pr: '0.5rem',
      pb: '1rem',
      pl: '0.5rem',
      'border-width': '1px',
      'border-radius': '0.4rem',
      'color-hover': 'white',
      'bg-color-hover': '#a855f7',
      'border-color-hover': 'white',
      'border-width-hover': '1px',
      'text-decoration-hover': 'none'
   };
</script>

<Link href="/contact" label="Contact" styles={myLinkStyles} />
```

### Custom Styles with CSS Class

```css
/* app.css*/
.internal-link {
  --pt: 1rem;
  --pr: 0.5rem;
  --pb: 1rem;
  --pl: 0.5rem;
  --border-width: 1px;
  --color-hover: white;
  --bg-color-hover: #a855f7;
  --border-radius: 0.4rem;
  --border-width-hover: 1px;
  --border-color-hover: white;
  --text-decoration-hover: none;
}
```

```html
<script>
   import { Link } from '@sveltinio/essentials';
</script>

<Link href="/contact" label="Contact" class="internal-link" />
```

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
