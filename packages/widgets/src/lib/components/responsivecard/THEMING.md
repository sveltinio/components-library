# ResponsiveCard - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `theme` are the ones allowing you to customize the component appearence.

- `styles` is an object with the CSS variable name (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune some styles for the component.
- `theme`: is a global CSS class name where the class content are the CSS variables to override. Using theme is more suitable if you are going to change lot of props to fit your style.

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## DOM Element Structure

Below is the DOM Element Structure for the `ResponsiveCard` component.

> Legend
>
> - containers: Svelte components
> - circles: HTML elements

![ResponsiveCard](./assets/images/component_structure.png "ResponsiveCard Component - DOM Element Structure")

## Info Mapping Table

The DOM Element Structure above can be mapped to the following table going through the structure from top to bottom and from left to right.

| Component   | HTML Element & CSS Class Name  | CSS Variables Prefix |
| :---------- | -----------------------------: | -------------------: |
|             | `div.sw__responsivecard__main` |                      |
| CardImage   | `div.card__image`              | `img`                |
| CardImage   | `img_card__image`              | `img`                |
|             | `div.card__wrapper`            | `wrapper`            |
| CardBadge   | `div.card__metadata`           |                      |
| CardTitle.  | `h2.card__wrapper`             | `title`              |
| CardContent | `div.card__content`            | `content`            |
| CardContent | `p.card__content`              | `content`            |
|             | `div.card_footer`              | `footer`             |
| CardInfo    | `div.card_info`                | `info`               |
| CardInfo    | `div.avatar`                   | `avatar`             |
| CardInfo    | `div`                          |                      |
| CardInfo    | `p.author`                     | `author`             |
| CardInfo    | `span.date`                    | `date`               |
| CardAction  | `a.card_actions`               | `btn`                |
| CardAction  | `svg.card_actions`             |                      |

## CSS Variables

The CSS variables are defined in the [variables.css](./variables.css) file.

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[Design Rules]: https://github.com/sveltinio/components-library/blob/main/docs/design-rules.md
