# Tabs

The `Tabs` component is used to easily includes tabs within the page. It supports different variants and sizes:

- **types**: `default`, `bordered`
- **sizes**: `xs`, `sm`, `base` (default), `md`, `lg` and `full`

## Examples

```html
<script>
   import { Tabs, Tab } '@sveltinio/essentials';
   import DummyIcon from './_dummyIcon.svelte';
</script>

<Tabs>
   <Tab id="1" title="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
   <Tab id="2" title="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
   <Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</Tabs>

<Tabs activeTab="3" type="bordered">
   <Tab id="3" title="Tab 3" icon={DummyIcon}>Sample content for <strong>Tab 3</strong></Tab>
   <Tab id="4" title="Tab 4" icon={DummyIcon}>Sample content for <strong>Tab 4</strong></Tab>
   <Tab id="5" title="Tab 5" icon={DummyIcon}>Sample content for <strong>Tab 5</strong></Tab>
</Tabs>
```

## Properties

### Tabs

| Property  |  Type  | Required | Default      | Description                                                     |
| :-------- | :----: | :------: | :----------: | :-------------------------------------------------------------- |
| activeTab | string |    no    | 1            | The tab to be active (selected) at the startup                  |
| type      | string |    no    | `default`    | Set the component style. One of [`default`, `bordered`]         |
| size      | string |    no    | `base`       | Set the tab title size. One of [`xs`, `sm`, `base`, `md`, `lg`] |
| styles    | Object |    no    | empty object | Used to pass CSS variables to apply custom styles               |

### Tab

| Property |  Type   | Required | Default          | Description                                              |
| :------- | :-----: | :------: | :--------------: | :--------------------------------------------------------|
| id       | string  | yes      |                  | An unique identifier for the tab                         |
| title    | string  | yes      |                  | The title for the tab                                    |
| icon     | any     | no       |                  | The icon placed on the left of the tab title for the tab |

## Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style props](https://svelte.dev/docs#template-syntax-component-directives---style-props).

| CSS Variable                | Default              | |
| :-------------------------- | -------------------: | :----------------------------------------------------------: |
| `tabs-list-border-width`    | `1px`                | |
| `tabs-list-border-style`    | `solid`              | |
| `tabs-list-border-color`    | `rgb(226 232 240)`   | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |
| `tab-font-size`             | `0.875rem`           | |
| `tab-font-weight`           | `500`                | |
| `tab-line-height`           | `1.25rem`            | |
| `tab-letter-spaging`        | `0em`                | |
| `tab-text-decoration`       | `none`               | |
| `tab-pt`                    | `0.5rem`             | |
| `tab-pr`                    | `1rem`               | |
| `tab-pb`                    | `0.5rem`             | |
| `tab-pl`                    | `1rem`               | |
| `tab-border-t-width`        | `0`                  | |
| `tab-border-t-style`        | `solid`              | |
| `tab-border-t-color`        | `transparent`        | |
| `tab-border-r-width`        | `0`                  | |
| `tab-border-r-style`        | `solid`              | |
| `tab-border-r-color`        | `transparent`        | |
| `tab-border-b-width`        | `2px`                | |
| `tab-border-b-style`        | `solid`              | |
| `tab-border-b-color`        | `rgb(241, 245, 249)` | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/f1f5f9.png) |
| `tab-border-l-width`        | `0`                  | |
| `tab-border-l-style`        | `solid`              | |
| `tab-border-l-color`        | `transparent`        | |
| `tab-border-t-color-hover`  | `transparent`        | |
| `tab-border-r-color-hover`  | `transparent`        | |
| `tab-border-b-color-hover`  | `rgb(148, 163, 184)` | ![#94a3b8](https://via.placeholder.com/15/94a3b8/94a3b8.png) |
| `tab-border-l-color-hover`  | `transparent`        | |
| `tab-bg-color-hover`        | `rgb(248, 250, 252)` | ![#f8fafc](https://via.placeholder.com/15/f8fafc/f8fafc.png) |
| `active-tab-border-t-width` | `0`                  | |
| `active-tab-border-t-style` | `solid`              | |
| `active-tab-border-t-color` | `transparent`        | |
| `active-tab-border-r-width` | `0`                  | |
| `active-tab-border-r-style` | `solid`              | |
| `active-tab-border-r-color` | `transparent`        | |
| `active-tab-border-b-width` | `2px`                | |
| `active-tab-border-b-style` | `solid`              | |
| `active-tab-border-b-color` | `rgb(71, 85, 105)`   | ![#475569](https://via.placeholder.com/15/475569/475569.png) |
| `active-tab-border-l-width` | `0`                  | |
| `active-tab-border-l-style` | `solid`              | |
| `active-tab-border-l-color` | `transparent`        | |
| `content-mt`                | `0`                  | |
| `content-mr`                | `0`                  | |
| `content-mb`                | `0.625rem`           | |
| `content-ml`                | `0`                  | |
| `content-pt`                | `2.5rem`             | |
| `content-pr`                | `2.5rem`             | |
| `content-pb`                | `2.5rem`             | |
| `content-pl`                | `2.5rem`             | |
| `content-border-width`      | `1px`                | |
| `content-border-style`      | `solid`              | |
| `content-border-color`      | `rgb(226 232 240)`   | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/e2e8f0.png) |

### Example

```html
<script>
   import { Tabs, Tab } '@sveltinio/essentials';
   const customStyles = {
      'tab-font-size': '1rem',
      'tab-pt': '0.875rem',
      'tab-border-t-width': '1px',
      'tab-border-t-color': 'red',
      'tab-border-t-color-hover': 'red',
      'tab-border-r-width': '1px',
      'tab-border-r-color': 'rgba(170, 50, 220, 0.6)',
      'tab-border-r-color-hover': 'rgba(170, 50, 220, 0.6)',
      'tab-border-b-width': '1px',
      'tab-border-b-color': 'green',
      'tab-border-b-color-hover': 'green',
      'tab-border-l-width': '1px',
      'tab-border-l-color': 'rgba(170, 50, 220, 0.6)',
      'tab-border-l-color-hover': 'rgba(170, 50, 220, 0.6)'
   };
</script>

<Tabs styles={customStyles}>
   <Tab id="1" title="Tab 2">Sample content for <strong>Tab 1</strong></Tab>
   <Tab id="2" title="Tab 3">Sample content for <strong>Tab 2</strong></Tab>
   <Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</Tabs>
```
