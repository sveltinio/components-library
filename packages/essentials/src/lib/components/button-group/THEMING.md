# Theming ButtonGroup Component

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (**without** `--` as prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables (**with** `--` as prefix) to override. Using `class` is more suitable if the goal is creating personal variants (themes) for the component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## Examples

### Custom Styles with prop

<img src="./assets/images/custom_prop.png" alt="ButtonGroup - Custom Styles with prop" />

```html
<script>
   import { ButtonGroup } from '@sveltinio/essentials/button-group';

   function handleMessage(event: CustomEvent) {
      console.log(event.detail);
   }

   const myBtnGroupStyles = {
      color: '#134e4a',
      pl: '1.25rem',
      pr: '1.25rem',
      'bg-color': '#f0fdfa',
      'bg-color-hover': '#99f6e4',
      'border-color': '#5eead4',
      'active-color': '#134e4a',
      'active-bg-color': '#2dd4bf',
      'active-border-color': '#5eead4'
   }
</script>

<ButtonGroup styles={myBtnGroupStyles}>
   <ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
   <ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
   <ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
</ButtonGroup>
```

### Custom Styles with CSS Class

<img src="./assets/images/custom_class.png" alt="ButtonGroup - Custom Styles with CSS class" />

```css
/* app.css*/
.my-btngroup {
  --color: #701a75;
  --pl: 1.25rem;
  --pr: 1.25rem;
  --bg-color: #fdf4ff;
  --bg-color-hover: #f5d0fe;
  --border-color: #f0abfc;
  --active-color: #701a75;
  --active-bg-color: #e879f9;
  --active-border-color: #f0abfc;
}
```

```html
<script>
   import { ButtonGroup } from '@sveltinio/essentials/button-group';
</script>

<ButtonGroup class="my-btngroup">
   <ButtonGroup.Button id="1" label="Button 1" on:click={handleMessage} />
   <ButtonGroup.Button id="2" label="Button 2" on:click={handleMessage} />
   <ButtonGroup.Button id="3" label="Button 3" on:click={handleMessage} />
</ButtonGroup>
```

## DOM - CSS Variables Mapping Table

The DOM Element Structure above can be mapped to the following table where each component is mapped to the prefix used to identify the CSS variables affecting it.

| Component          | CSS Variables Prefix |
| :----------------- | -------------------: |
| ButtonGroup        |                      |
| ButtonGroup.Button |                      |

### ButtonGroup.Button

| Name                  | Default  |            |
| :-------------------- | -------: | :--------: |
| `gap`                 | 0.25rem  |            |
| `py`                  | 0.5rem   |            |
| `px`                  | 1rem     |            |
| `color`               | #343a40  | <div style="background-color:#343a40; width:15px; height: 15px" /> |
| `color-hover`         | #343a40  | <div style="background-color:#343a40; width:15px; height: 15px" /> |
| `color-active`        | #212529  | <div style="background-color:#212529; width:15px; height: 15px" /> |
| `font-family`         | sans     |            |
| `text-decoration`     | none     |            |
| `bg-color`            | #f8f9fa  | <div style="background-color:#f8f9fa; width:15px; height: 15px" /> |
| `bg-color-hover`      | #f1f3f5  | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `bg-color-active`     | #16191d; | <div style="background-color:#16191d; width:15px; height: 15px" /> |
| `border-color`        | #e9ecef  | <div style="background-color:#e9ecef; width:15px; height: 15px" /> |
| `border-color-active` | #e9ecef  | <div style="background-color:#e9ecef; width:15px; height: 15px" /> |
| `border-style`        | solid    |            |
| `border-style-active` | solid    |            |
| `border-width`        | 1px      |            |
| `ring-width`          | 1px      |            |
| `ring-style`          | solid    |            |
| `ring-offset`         | 0        |            |
| `ring-color`          | #e9ecef  | <div style="background-color:#e9ecef; width:15px; height: 15px" /> |
| `min-height-sm`       | 2rem     |            |
| `height-sm`           | 2rem     |            |
| `font-size-sm`        | 0.875rem |            |
| `font-weight`         | 400      |            |
| `line-height-sm`      | 1.25     |            |
| `letter-spacing-sm`   | 0.025em  |            |
| `min-height-base`     | 3rem     |            |
| `height-base`         | 3rem     |            |
| `font-size-base`      | 1rem     |            |
| `font-weight`         | 400      |            |
| `line-height-base`    | 1.375    |            |
| `letter-spacing-base` | 0.025em  |            |
| `min-height-lg`       | 3rem     |            |
| `height-lg`           | 3rem     |            |
| `font-size-lg`        | 1.1rem   |            |
| `font-weight`         | 500      |            |
| `line-height-lg`      | 1.375    |            |
| `letter-spacing-lg`   | 0.050em  |            |
| `min-height-xl`       | 3rem     |            |
| `height-xl`           | 3rem     |            |
| `font-size-xl`        | 1.25rem  |            |
| `font-weight`         | 500      |            |
| `line-height-xl`      | 1.75     |            |
| `letter-spacing-xl`   | 0.050em  |            |

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
