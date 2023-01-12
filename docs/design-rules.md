# [DRAFT] Design Rules

created on: 2022-12-06 - updated on: 2023-01-03

## Goal

Describe how the components have been designed and styled to easily allow applying your preferred styles.

## Introduction

To simplify custom styles on the components we used the Svelte's built-in solution for component theming using [style-props].

Components make extensively use of the CSS variables to allow maximum flexibility in terms of styling maintaining the logic behind them. In this way, almost each aspect of the component can have custom styles. The flipside of this approach is having lots of CSS variables means can be tough to know which one to use and how that variable is applied to the component.

A structured and defined approach makes development, testing, and deployment easier and more predictable. This short document is intended to introduce the approach used designing and developing `sveltinio/*` components.

## Naming conventions

We tried to follow the principles detailed in the [CSS architecture for design systems] and the [CSS Guidelines (2.2.5)] by [Harry Roberts].

CSS classes and variables for components follow a [BEM] inspired approach.

Leveraging on the CSS nested classes approach through [postcss] and [postcss-present-env] as well as the CSS pseudo-class selectors like `:is` and `:where` to make CSS classes and variables:

- scoped to the component
- with a shorter name

### CSS classes names

A class name for a component in `@sveltinio/*` package follows the format:

`sn-<package>-<category-class>__<component>__<element>--<modifier>`

- **sn**: stands for "sveltin" used as global namespace;
- **package**: the first letter of the package name (e.g. `e` for `essentials`, `w` for `widgets`, etc.);
- **category-class**: `c-` means "component" etc.;
- **component**: is the primary component block, the `block` as per BEM;
- **element** is a child of the primary block, as per BEM;
- **modifier**: is a variation of a component style, as per BEM.

The component main block has 3 CSS classes in the following order:

1. `sn-<package>-colors`: to inject the colors as CSS vars used by the package and its components;
2. `sn-<package>-<category-class>-<component>-vars`: to inject all the CSS variables used by the component;
3. `sn-<package>-<category-class>-<component>`: the main class used style the component and the one to nest and scope all the other classes.

The goal is to make component styles, colors and variables scoped to the component it self.

### CSS variables names

CSS variables are defined in the `variables.css` file placed within the component folder along with the rest of files for the component.

As alreasd stated, all the CSS variables are local to the component and defined within the `sn-<package>-<category-class>-<component>-vars` class.

A CSS variable name follows the format:

`--<element><css-property>-<css-selector?>-<breakpoint?>`

- **element** : the last part of the css class name
- **css-property** : the real name of the css property (e.g. `color`, `font-size`, ...)
- **css-selector** : If present, the real name of the css selector to which applies (e.g. `:hover` will be set via the suffix `-hover`)
- **breakpoint** : if present, it identifies the breakpoint to which the variable is applied

### CSS properties

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

### Color Palette

We leverage the [Tailwind CSS Color Palette] as reference.

Colors are expressed as CSS variables (custom properties) and injected trhough the ``sn-<package>-colors`` class

### Breakpoints

Components are mobile-first designed and responsive to properly work on different screen sizes.
Components support 4 breakpoints

- **default** for widths less than 640px
- **sm**: minimum width 640px
- **md**: minimum width 768px
- **lg**: minimum width 1024px

Breakpoints are identified with the last two letters of the variable name (`sm`, `md`, `lg`)

### Base Styles

We use [Tailwind CSS Preflight] as starting point for a set of base styles.

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[BEM]: https://en.bem.info/methodology/naming-convention/
[CSS architecture for design systems]: https://bradfrost.com/blog/post/css-architecture-for-design-systems/
[CSS Guidelines (2.2.5)]: https://cssguidelin.es/
[Harry Roberts]: http://csswizardry.com/
[postcss]: https://postcss.org/
[postcss-present-env]: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
[Tailwind CSS]: https://tailwindcss.com
[Tailwind CSS Color Palette]: https://tailwindcss.com/docs/customizing-colors
[Tailwind CSS Preflight]: https://tailwindcss.com/docs/preflight
