# ButtonGroup

## Examples

```html
<script>
   import { ButtonGroup, ButtonGroupItem } from '@sveltinio/essentials';
   function handleMessage(event) {
      console.log(event.detail);
   }
</script>

<ButtonGroup>
    <ButtonGroupItem id="1" on:click={handleMessage}>Button 1</ButtonGroupItem>
    <ButtonGroupItem id="2" on:click={handleMessage}>Button 2</ButtonGroupItem>
    <ButtonGroupItem id="3" on:click={handleMessage}>Button 3</ButtonGroupItem>
</ButtonGroup>
```

## Properties

The `ButtonGroup` component is the main wrapper component.

| Property     | Type   | Required | Default      | Description                                                  |
| :----------- | :----: | :------: | :----------: |:------------------------------------------------------------ |
| activeButton | string |    no    | empty string | show/hide the items                                          |
| size         | string |    no    | `base`       | Set the label size. One of: [`xs`, `sm`, `base`, `md`, `lg`] |
| styles       | Object |    no    | empty object | Used to pass CSS variables to apply custom styles            |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

Below is the CSS variables list to apply your own styles to the component.

| CSS Variable          | Default              | |
| :-------------------- | -------------------: | :----------------------------------------------------------: |
| `color`               | `rgb(75, 85, 99)`    | ![#475569](https://via.placeholder.com/15/475569/475569.png) |
| `font-size`           | `0.875rem`           | |
| `font-weight`         | `500`                | |
| `line-height`         | `1.5rem`             | |
| `letter-spacing`      | `0em`                | |
| `text-decoration`     | `none`               | |
| `bg-color`            | `rgb(255, 255, 255)` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |
| `bg-color-hover`      | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `border-color`        | `rgb(226, 232, 240)` | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |
| `border-style`        | `solid`              | |
| `border-width`        | `thin`               | |
| `border-radius`       | `4px`                | |
| `pt`                  | `0.5rem`             | |
| `pr`                  | `1rem`               | |
| `pb`                  | `0.5rem`             | |
| `pl`                  | `1rem`               | |
| `active-color`        | `rgb(15, 23, 42)`    | ![#0f172a](https://via.placeholder.com/15/0f172a/0f172a.png) |
| `active-bg-color`     | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `active-border-color` | `rgb(226, 232, 240)` | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |
| `active-border-style` | `solid`              | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `active-border-width` | `this`               | |

### Example

```html
<script>
   import { ButtonGroup, ButtonGroupItem } from '@sveltinio/essentials';

   function handleMessage(event) {
      console.log(event.detail);
   }

   const customStyles = {
      color: '#134e4a',
      'pl': '1.25rem',
      'pr': '1.25rem',
      'bg-color': '#f0fdfa',
      'bg-color-hover': '#99f6e4',
      'border-color': '#5eead4',
      'active-color': '#134e4a',
      'active-bg-color': '#2dd4bf',
      'active-border-color': '#5eead4'
   };
</script>

<ButtonGroup styles={customStyles}>
    <ButtonGroupItem id="1" on:click={handleMessage}>Button 1</ButtonGroupItem>
    <ButtonGroupItem id="2" on:click={handleMessage}>Button 2</ButtonGroupItem>
    <ButtonGroupItem id="3" on:click={handleMessage}>Button 3</ButtonGroupItem>
</ButtonGroup>
```
