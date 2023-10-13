# Theming Link Component

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (**without** `--` as prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables (**with** `--` as prefix) to override. Using `class` is more suitable if the goal is creating personal variants (themes) for the component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## DOM - CSS Variables Mapping Table

| Name                    | Default     |            |
| :---------------------- | :---------- | :--------: |
| `color`                 | #030507     | <div style="background-color:#030507; width:15px; height: 15px" /> |
| `color-hover`           | #030507     | <div style="background-color:#030507; width:15px; height: 15px" /> |
| `text-decoration`       | none        |
| `text-decoration-hover` | underline   |
| `bg-color`              | transparent | |
| `bg-color-hover`        | transparent | |
| `icon-gap`              | 0.25rem     | |

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
