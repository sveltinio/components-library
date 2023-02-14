# ButtonGroup

The `ButtonGroup` is an accessible (WAI-ARIA Accessibility Reference [1], [2]) component as a container for grouping a set of buttons.

## Examples

<img src="./assets/images/showcase.png" alt="PagesNavigator - Default Styles" />

## Usage

```html
<script>
   import { ButtonGroup, ButtonGroupItem } from '@sveltinio/essentials';
   function handleMessage(event) {
      console.log(event.detail.eventDetails);
   }
</script>

<ButtonGroup>
   <ButtonGroupItem id="1" label="Button 1" on:click={handleMessage} />
   <ButtonGroupItem id="2" label="Button 2" on:click={handleMessage} />
   <ButtonGroupItem id="3" label="Button 3" on:click={handleMessage} />
</ButtonGroup>
```

## Properties

### Functionals

#### ButtonGroup

| Property     | Type    | Required | Default      | Description                                                                  |
| :----------- | :-----: | :------: | :----------: |:---------------------------------------------------------------------------- |
| activeButton | string  |    no    | empty string | show/hide the items                                                          |
| size         | string  |    no    | `base`       | Set the label size. One of: [`xs`, `sm`, `base`, `md`, `lg`]                 |
| responsive   | boolean |   no     | `false`      | If true, vertical on small screen and horizontal on medium and large screens |

#### ButtonGroupItem

| Property | Type   | Required | Default     | Description                                      |
| :------- | :----: | :------: | :---------: |:------------------------------------------------ |
| id       | string |   yes    |             | An unique identifier for the button              |
| label    | string |   yes    |             | Set the label for the button                     |
| icon     | any    |    no    | `undefined` |                                                  |
| position | string |    no    | `left`      | Set the icon position. One of: [`left`, `right`] |

### Styles

#### ButtonGroup

| Property |  Type   | Required |   Default   | Description                                       |
| :------- | :-----: | :------: | :---------: | :------------------------------------------------ |
| class    | string  |    no    |             | The css class name used to make a theme variant   |
| styles   | Object  |    no    |     `{}`    | Used to pass CSS variables to apply custom styles |

Refer to the [Theming](#theming) section to learn how those props work and and how to use them.

## Slots

### ButtonGroup

| Name | Default | Fallback | Description                 |
| :--- | :-----: | :------: | :-------------------------- |
|      | ✓       |    ✗     | `ButtonGroupItem` component |

## Events

### ButtonGroupItem

| Name         |  Type      | Element    | Keyboard         | Response    | Description          |
| :----------- | :--------: | :--------: | :--------------: | :---------- | :------------------- |
| `on:click`   | dispatched | `<button>` |                  | `{ event }` | Activates the button |
| `on:keydown` | dispatched | `<button>` | `Enter`, `Space` | `{ event }` | Activates the button |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

Read more [here](./THEMING.md)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[1]: https://www.w3.org/WAI/ARIA/apg/patterns/button/
[2]: https://www.w3.org/WAI/ARIA/apg/example-index/radio/radio
