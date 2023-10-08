# [DRAFT] Design Rules

created on: 2022-12-06 - updated on: 2023-10-08

## Goal

Describe how the components have been designed and styled to easily allow applying your preferred styles.

## Introduction

This short document is intended to introduce the approach used designing and developing `sveltinio/*` components.

To simplify custom styles on the components we used the Svelte's built-in solution for component theming using [style-props].

Components make extensively use of the CSS variables to allow maximum styling flexibility so that almost each aspect of the component can have custom styles. The flipside of this approach is having lots of CSS variables means can be tough to know which one to use and how that variable is applied to the component.

A structured and defined approach makes development, testing, and deployment easier and more predictable.

## Naming conventions

We tried to follow the principles detailed in the [CSS architecture for design systems] and the [CSS Guidelines (2.2.5)] by [Harry Roberts].

CSS classes and variables for components follow a [BEM] inspired approach.

Leveraging on the CSS nested classes approach through [postcss] and [postcss-present-env] as well as the CSS pseudo-class selectors like `:is`, `:where` and `:has` to make CSS classes and variables:

- scoped to the component
- with a shorter name

### CSS classes names

The main CSS class applied to each component in `@sveltinio/*` packages use the following naming convention:

`sn-<package>-<category-class>__<component>`

- **sn**: stands for "sveltin" used as global namespace;
- **package**: the first letter of the package name (e.g. `e` for `essentials`, `w` for `widgets`, etc.);
- **category-class**: `c-` means "component" etc.;
- **component**: is the primary component block, the `block` as per BEM;

E.g. The tabs component main class id `sn-e-c-tabs`.

### CSS variables names

CSS variables are defined leveraging the [open-props] project

A CSS variable name uses the following naming convention:

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

### Breakpoints

Components are mobile-first designed and responsive to properly work on different screen sizes.
Components support 4 breakpoints

- **default** for widths less than 640px
- **sm**: minimum width 640px
- **md**: minimum width 768px
- **lg**: minimum width 1024px

Breakpoints are identified with the last two letters of the variable name (`sm`, `md`, `lg`)

<!-- Resources -->
[style-props]: https://svelte.dev/docs#template-syntax-component-directives---style-props
[open-props]: https://open-props.style/
[BEM]: https://en.bem.info/methodology/naming-convention/
[CSS architecture for design systems]: https://bradfrost.com/blog/post/css-architecture-for-design-systems/
[CSS Guidelines (2.2.5)]: https://cssguidelin.es/
[Harry Roberts]: http://csswizardry.com/
[postcss]: https://postcss.org/
[postcss-present-env]: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
[Tailwind CSS]: https://tailwindcss.com
