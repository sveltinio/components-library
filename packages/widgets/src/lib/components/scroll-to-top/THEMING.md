# ScrollToTopButton - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

- `styles` is an object with the CSS variable name (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune some styles for the component.
- `theme`: is a global CSS class name where the class content are the CSS variables to override. Using theme is more suitable if you are going to change lot of props to fit your style.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## CSS Variables

The CSS variables are defined in the [variables.css](./variables.css) file.
