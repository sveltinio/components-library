# [DRAFT] Design Rules

created on: 2022-12-06 - updated on: 2022-12-06

## Goal

Describe how the components have been designed and styled to easily allow applying your preferred styles.

## Introduction

To simplify custom styles on the components we used the Svelte's built-in solution for component theming using [style-props].

Components (mainly the ones on the `widgets` package) make extensively use of the CSS variables to allow maximum flexibility in terms of styling maintaining the logic behind them. In this way, almost each aspect of the component can have custom styles. The flipside of this approach is having lots of CSS variables means can be tough to know which one to use and how that variable is applied to the component.

A structured and defined approach makes development, testing, and deployment easier and more predictable. This short document is intended to introduce the approach used designing and developing `sveltinio/*` components.

## BEM

[BEM] is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.

- **B**: it stands for Block
- **E**: it stands for Elements
- **M**: it stands for Modifiers

### BEM Naming Rule

`block-name__elem-name_mod-name_mod-val`

- Names are written in lowercase Latin letters
- Words are separated by a hyphen (`-`)
- The block name defines the namespace for its elements and modifiers
- The element name is separated from the block name by a double underscore (`__`)
- The modifier name is separated from the block or element name by a single underscore (`_`)
- The modifier value is separated from the modifier name by a single underscore (`_`)
- For boolean modifiers, the value is not included in the name

## Sveltinio components - Approach

We used a BEM inspired approach to name CSS classes and variables for components leveraging on the CSS nested classes approach through [postcss] and [postcss-present-env] to make the CSS classes and variables:

- scoped to the component
- with a shorter name

### CSS classes names

A class name for a component in `@sveltinio/*` package follows the format:

`s<package>__<component>--<block-name>`

- **s**: stands for "sveltin". A simple dummy char
- **package**: the first letter of the package name (e.g. w=widgets)
- **component**: a shorter string representing for the component name
- **block-name**: as described by the BEM naming rule

Each component is wrapped by a parent HTML element with 2 CSS classes:

- `s<package>__<component>`: contains all the CSS variables used by the component
- `s<package>__<component>_main`: represents the parent class used to nest and scope all the other ones

### CSS variables names

CSS variables are defined in the `variables.css` file placed within the component folder along with the rest of files for the component.

As alreasy stated, all the CSS variables are local to the component and defined within the class name `s<package>__<component>`

That class is **always the first** class applied to the main HTML element for the component.

A CSS variable name follows the format:

`--<element><css-property>-<css-selector?>-<breakpoint?>`

- **element** : the last part of the css class name
- **css-property** : the real name of the css property (e.g. `color`, `font-size`, ...)
- **css-selector** : If present, the real name of the css selector to which applies (e.g. `:hover` will be set via the suffix `-hover`)
- **breakpoint** : if present, it identifies the breakpoint to which the variable is applied

#### CSS properties

Some CSS properties names are abbreviated (à la [Tailwind CSS]) . Typical examples are padding and margin with their respective variants:

- `padding` -> `p`
- `margin` -> `m`
- `top` -> `t`
- `right` -> `r`
- `bottom` -> `b`
- `left` -> `l`
- `margin-top` -> `mt`
- `border-left` -> `border-l`
- `background-color` -> `bg-color`

#### Breakpoints

Components are mobile-first designed and responsive to properly work on different screen sizes.
Components support 4 breakpoints

- **default** for widths less than 640px
- **sm**: minimum width 640px
- **md**: minimum width 768px
- **lg**: minimum width 1024px

Breakpoints are identified with the last two letters of the variable name (`sm`, `md`, `lg`)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[BEM]: https://en.bem.info/methodology/naming-convention/
[postcss]: https://postcss.org/
[postcss-present-env]: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
[Tailwind CSS]: https://tailwindcss.com
