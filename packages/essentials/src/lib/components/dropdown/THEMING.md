# Theming Dropdown Component

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (**without** `--` as prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables (**with** `--` as prefix) to override. Using `class` is more suitable if the goal is creating personal variants (themes) for the component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## Examples

<img src="./assets/images/custom_styles.png" alt="Dropdown - Custom Styles" />

### Custom Styles with prop

```html
<script>
   import { Dropdown } from '@sveltinio/essentials/dropdown';

   const myStyles = {
      'btn-color': '#ecfeff',
      'btn-bg-color': '#0891b2',
      'btn-bg-color-hover': '#0e7490',
      'btn-border-color': '#67e8f9',
      'content-bg-color': '#ecfeff',
      'item-color': '#164e63',
      'item-bg-color-hover': '#cffafe'
   };
</script>

<Dropdown styles={myStyles}>
 <Dropdown.Button label="Menu" />
 <Dropdown.Items>
  <Dropdown.Items.Item label="Item 1" href="#" />
  <Dropdown.Items.Item label="Item 2" href="#" />
  <Dropdown.Items.Item label="Item 3" href="#" />
 </Dropdown.Items>
</Dropdown>
```

### Custom Styles with CSS Class

```css
/* app.css*/
.my-dropdown {
  --btn-color: #ecfeff;
  --btn-bg-color: #0891b2;
  --btn-bg-color-hover: #0e7490;
  --btn-border-color: #67e8f9;
  --content-bg-color: #ecfeff;
  --item-color: #164e63;
  --item-bg-color-hover: #cffafe;
}
```

```html
<script>
   import { Dropdown } from '@sveltinio/essentials/dropdown';
</script>

<Dropdown class="my-dropdown">
 <Dropdown.Button label="Menu" />
 <Dropdown.Items>
  <Dropdown.Items.Item label="Item 1" href="#" />
  <Dropdown.Items.Item label="Item 2" href="#" />
  <Dropdown.Items.Item label="Item 3" href="#" />
 </Dropdown.Items>
</Dropdown>
```

## DOM Element Structure

Below is the DOM Element Structure for the `Dropdown` component.

> Legend
>
> - containers: Svelte components
> - circles: HTML elements

![Dropdown](./assets/images/component_structure.png "Dropdown Component - DOM Element Structure")

## DOM - CSS Variables Mapping Table

The DOM Element Structure above can be mapped to the following table where each component is mapped to the prefix used to identify the CSS variables affecting it.

| Component           | CSS Variables Prefix |
| :------------------ | -------------------: |
| Dropdown            |                      |
| Dropdown.Button     |                      |
| Dropdown.Items      | `list`               |
| Dropdown.Items.Item | `item`               |

### Dropdown

Nothing to show here.

### Dropdown.Button

It is an instance of [Button] so it follows the same theming rules. Please, refer to the [Button Theming] page.

### Dropdown.Items

| Name                | Default |            |
| :------------------ | ------: | :--------: |
| `list-max-w`        | 20rem   |
| `list-w`            | 10rem   |
| `list-my`           | 0.5rem  | |
| `list-mx`           | 0       | |
| `list-py`           | 0       | |
| `list-px`           | 0       | |
| `list-border-size`  | 1px     | |
| `list-border-style` | solid   |
| `list-border-color` | #f1f3f5 | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |

### Dropdown.Items.Item

| Name                      | Default     |            |
| :------------------------ | ----------: | :--------: |
| `item-py`                 | 0.5rem      |            |
| `item-px`                 | 1rem        |            |
| `item-color`              | #495057     | <div style="background-color:#495057; width:15px; height: 15px" /> |
| `item-color-hover`        | #343a40     | <div style="background-color:#343a40; width:15px; height: 15px" /> |
| `item-font-family`        | system-ui, -apple-system, <br/>Segoe UI, Roboto, Ubuntu, <br/> Cantarell, Noto Sans, sans-serif; | |
| `item-font-size`          | 1rem        | |
| `item-lineheight-base`    | 1.375       | |
| `item-letterspacing-base` | 0.025em     | |
| `item-text-decoration`    | none        | |
| `item-bg-color            | #ffffff     | <div style="background-color:#ffffff; width:15px; height: 15px" /> |
| `item-bg-color-hover`     | #f8f9fa     | <div style="background-color:#f8f9fa; width:15px; height: 15px" /> |
| `item-ring-width`         | 1px         | |
| `item-ring-style`         | solid       | |
| `item-ring-color`         | transparent | |
| `item-ring-offset`        | 1px         | |


<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
[Button]: https://github.com/sveltinio/components-library/blob/main/packages/essentials/src/lib/components/button/Button.svelte
[Button Theming]: https://github.com/sveltinio/components-library/blob/main/packages/essentials/src/lib/components/button/THEMING.md
