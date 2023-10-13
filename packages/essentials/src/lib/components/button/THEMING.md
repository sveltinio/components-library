# Theming Button Component

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (**without** `--` as prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables (**with** `--` as prefix) to override. Using `class` is more suitable if the goal is creating personal variants (themes) for the component.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## Examples

### Custom Styles with prop

<img src="./assets/images/custom_prop.png" alt="Button - Custom Styles with prop" />

```html
<script>
   import { Button } from '@sveltinio/essentials/button';

   const myStyles = {
      color: "rgb(54 83 20)",
      "border-color": "rgb(236 252 203)",
      "bg-color": "rgb(132 204 22)",
      "bg-hover": "rgb(163 230 53)",
      "outline-color": "rgb(190 242 100)",
      "outline-style": "dashed"
   }
</script>

<Button
   label="Custom Success"
   type="success"
   shape="rounded"
   withFocus
   styles={myStyles}
/>
```

### Custom Styles with CSS Class

<img src="./assets/images/custom_class.png" alt="Button - Custom Styles with CSS class" />

```css
/* app.css*/
.my-primary-btn {
  --primary-color: white;
  --primary-bg-color: #7e22ce;
  --primary-border-color: #a855f7;
  --primary-bg-color-hover: #c026d3;
  --primary-outline-color: #d946ef;
}
```

```html
<script>
   import { Button } from '@sveltinio/essentials/button';
</script>

<Button label="My Primary Button" type="primary" shape="rounded" class="my-primary-btn" />
```

## DOM - CSS Variables Mapping Table

The `Button` component is a `button` or a `a` HTML element. If an icon is present, the icon is placed in a `span` within the main HTML element

| Name                   | Default          |
| :--------------------- | :--------------- |
| `min-h`                | 3rem             |
| `px`                   | 1rem             |
| `py`                   | 0                |
| `font-family`          | system-ui, -apple-system, <br/>Segoe UI, Roboto, Ubuntu, <br/> Cantarell, Noto Sans, sans-serif; |
| `font-size`            | 1rem             |
| `font-weight`          | 400              |
| `line-height`          | 1.5              |
| `letter-spacing`       | 0.025em          |
| `text-decoration-line` | none             |
| `border-width`         | 1px              |
| `ring-width`           | 0.125rem         |
| `ring-style`           | solid            |
| `ring-offset`          | 0.125rem         |
| `transition-property`  | background-color |
| `transition-duration`  | 300ms            |

### Button variants

#### default & default outlined

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `default-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `default-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `default-bg-color`             | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `default-bg-color-hover`       | #e9ecef     | <div style="background-color:#e9ecef; width:15px; height: 15px" /> |
| `default-ring-color`           | #ced4da     | <div style="background-color:#ced4da; width:15px; height: 15px" /> |
| `default-border-color`         | transparent |            |
| `default-outline-color`        | #16191d     | <div style="background-color:#16191d; width:15px; height: 15px" /> |
| `default-outline-border-color` | #adb5bd     | <div style="background-color:#adb5bd; width:15px; height: 15px" /> |

#### primary & primary outline

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `primary-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `primary-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `primary-bg-color`             | #0b7285     | <div style="background-color:#0b7285; width:15px; height: 15px" /> |
| `primary-bg-color-hover`       | #0c8599     | <div style="background-color:#0c8599; width:15px; height: 15px" /> |
| `primary-ring-color`           | #0c8599     | <div style="background-color:#0c8599; width:15px; height: 15px" /> |
| `primary-border-color`         | transparent |            |
| `primary-outline-color`        | #095c6b     | <div style="background-color:#095c6b; width:15px; height: 15px" /> |
| `primary-outline-border-color` | #0c8599     | <div style="background-color:#0c8599; width:15px; height: 15px" /> |

#### secondary & secondary outline

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `secondary-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `secondary-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `secondary-bg-color`             | #364fc7     | <div style="background-color:#364fc7; width:15px; height: 15px" /> |
| `secondary-bg-color-hover`       | #3b5bdb     | <div style="background-color:#3b5bdb; width:15px; height: 15px" /> |
| `secondary-ring-color`           | #3b5bdb     | <div style="background-color:#3b5bdb; width:15px; height: 15px" /> |
| `secondary-border-color`         | transparent |            |
| `secondary-outline-color`        | #2f44ad     | <div style="background-color:#2f44ad; width:15px; height: 15px" /> |
| `secondary-outline-border-color` | #3b5bdb     | <div style="background-color:#3b5bdb; width:15px; height: 15px" /> |

#### success & success-outline

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `success-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `success-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `success-bg-color`             | #237032     | <div style="background-color:#237032; width:15px; height: 15px" /> |
| `success-bg-color-hover`       | #2b8a3e     | <div style="background-color:#2b8a3e; width:15px; height: 15px" /> |
| `success-ring-color`           | #2f9e44     | <div style="background-color:#2f9e44; width:15px; height: 15px" /> |
| `success-border-color`         | transparent |            |
| `success-outline-color`        | #237032     | <div style="background-color:#237032; width:15px; height: 15px" /> |
| `success-outline-border-color` | #2f9e44     | <div style="background-color:#2f9e44; width:15px; height: 15px" /> |

#### error & error-outline

| Name                         | Default     |            |
| :--------------------------- | ----------: | :--------: |
| `error-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `error-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `error-bg-color`             | #c92a2a     | <div style="background-color:#c92a2a; width:15px; height: 15px" /> |
| `error-bg-color-hover`       | #e03131     | <div style="background-color:#e03131; width:15px; height: 15px" /> |
| `error-ring-color`           | #e03131     | <div style="background-color:#e03131; width:15px; height: 15px" /> |
| `error-border-color`         | transparent |            |
| `error-outline-color`        | #b02525     | <div style="background-color:#b02525; width:15px; height: 15px" /> |
| `error-outline-border-color` | #e03131     | <div style="background-color:#e03131; width:15px; height: 15px" /> |

#### warning & warning-outline

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `warning-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `warning-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `warning-bg-color`             | #bf400d     | <div style="background-color:#bf400d; width:15px; height: 15px" /> |
| `warning-bg-color-hover`       | #d9480f     | <div style="background-color:#d9480f; width:15px; height: 15px" /> |
| `warning-ring-color`           | #e8590c     | <div style="background-color:#e8590c; width:15px; height: 15px" /> |
| `warning-border-color`         | transparent |            |
| `warning-outline-color`        | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `warning-outline-border-color` | #e8590c     | <div style="background-color:#e8590c; width:15px; height: 15px" /> |

#### info & info-outline

| Name                        | Default     |            |
| :-------------------------- | ----------: | :--------: |
| `info-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `info-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `info-bg-color`             | #1864ab     | <div style="background-color:#1864ab; width:15px; height: 15px" /> |
| `info-bg-color-hover`       | #1971c2     | <div style="background-color:#1971c2; width:15px; height: 15px" /> |
| `info-ring-color`           | #1971c2     | <div style="background-color:#1971c2; width:15px; height: 15px" /> |
| `info-border-color`         | transparent |            |
| `info-outline-color`        | #145591     | <div style="background-color:#145591; width:15px; height: 15px" /> |
| `info-outline-border-color` | #1971c2     | <div style="background-color:#1971c2; width:15px; height: 15px" /> |

#### ghost & ghost-outline

| Name                         | Default     |            |
| :--------------------------- | ----------: | :--------: |
| `ghost-color`                | #3a3a37     | <div style="background-color:#3a3a37; width:15px; height: 15px" /> |
| `ghost-color-hover`          | #3a3a37     | <div style="background-color:#3a3a37; width:15px; height: 15px" /> |
| `ghost-bg-color`             | transparent |            |
| `ghost-bg-color-hover`       | #f2f4f6     | <div style="background-color:#f2f4f6; width:15px; height: 15px" /> |
| `ghost-ring-color`           | #d1d6d8     | <div style="background-color:#d1d6d8; width:15px; height: 15px" /> |
| `ghost-border-color`         | transparent |            |
| `ghost-outline-color`        | #3a3a37     | <div style="background-color:#3a3a37; width:15px; height: 15px" /> |
| `ghost-outline-border-color` | #ebedef     | <div style="background-color:#ebedef; width:15px; height: 15px" /> |

#### neutral & neutral-outline

| Name                           | Default     |            |
| :----------------------------- | ----------: | :--------: |
| `neutral-color`                | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `neutral-color-hover`          | #f1f3f5     | <div style="background-color:#f1f3f5; width:15px; height: 15px" /> |
| `neutral-bg-color`             | #252521     | <div style="background-color:#252521; width:15px; height: 15px" /> |
| `neutral-bg-color-hover`       | #3a3a37     | <div style="background-color:#3a3a37; width:15px; height: 15px" /> |
| `neutral-ring-color`           | #3a3a37     | <div style="background-color:#3a3a37; width:15px; height: 15px" /> |
| `neutral-border-color`         | transparent |            |
| `neutral-outline-color`        | #252521     | <div style="background-color:#252521; width:15px; height: 15px" /> |
| `neutral-outline-border-color` | #50514f     | <div style="background-color:#50514f; width:15px; height: 15px" /> |

### Button sizes

#### xs

| Name                | Default |
| :------------------ | ------: |
| `min-h-xs`          | 1.75rem |
| `px-xs`             | 0.5rem  |
| `py-xs`             | 0       |
| `font-size-xs`      | 0.75rem |
| `line-height-xs`    | 0.95    |
| `letter-spacing-xs` | -0.05em |

#### sm

| Name                | Default |
| :------------------ | ------: |
| `min-h-sm`          | 2rem    |
| `px-sm`             | 0.75rem |
| `py-sm`             | 0       |
| `font-size-sm`      | 1rem    |
| `line-height-sm`    | 1.1     |
| `letter-spacing-sm` | 0.025em |

#### base

| Name                  | Default |
| :-------------------- | ------: |
| `min-h-base`          | 3rem    |
| `px-base`             | 1.5rem  |
| `py-base`             | 0       |
| `font-size-base`      | 1.2rem  |
| `line-height-base`    | 1.25    |
| `letter-spacing-base` | 0.025em |

#### lg

| Name                | Default |
| :------------------ | ------: |
| `min-h-lg`          | 4rem    |
| `px-lg`             | 1.5rem  |
| `py-lg`             | 0       |
| `font-size-lg`      | 1.25rem |
| `line-height-lg`    | 1.375   |
| `letter-spacing-lg` | 0.050em |

#### xl

| Name                | Default |
| :------------------ | ------: |
| `min-h-xl`          | 5rem    |
| `px-xl`             | 1.75rem |
| `py-xl`             | 0       |
| `font-size-xl`      | 1.5rem  |
| `line-height-xl`    | 1.5     |
| `letter-spacing-xl` | 0.050em |

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
