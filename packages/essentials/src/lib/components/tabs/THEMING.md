# Tabs - Theming

To simplify custom styles on the component we used the built-in solution for component theming using [style-props].

The two component properties `styles` and `class` are the ones allowing you to customize the component appearence.

- `styles` is a JS object with the CSS variable name to override (without `--` prefix) as key and the value set to the allowed one for that CSS variable. This approach helps when you wish to tune few styles for the component.
- `class`: is a global CSS class name where the class content has the CSS variables to override. Using `class` is more suitable when the goal is to create personal versions(themes) for the component, so sevaral props are override;

> Refer to the [Design Rules] document to better understand how the component has been designed and how to customize the styles.

## DOM Element Structure

Below is the DOM Element Structure for the `Tabs` component.

> Legend
>
> - containers: Svelte components
> - circles: HTML elements

![DropDown](./assets/images/component_structure.png "Tabs Component - DOM Element Structure")

## Info Mapping Table

The DOM Element Structure above can be mapped to the following table going through the structure from top to bottom and from left to right.

| Component | HTML Elem | CSS Class Name         | CSS Variables Prefix |
| :-------- | --------: | ---------------------: | -------------------: |
|           | `div`     | `sn-e-c-tabs`          |                      |
| TabGroup  |           | `tabs__group`          | `tabs__group`        |
| Tab       |           | `tab`<br/>`tab__panel` | `tab` <br/> `panel`  |

## CSS Variables

The CSS variables are defined in the [variables.css](../../styles/components/tabs/variables.css) file.

## Examples

### Custom Styles with prop

<img src="./assets/images/custom_prop.png" alt="Tabs - Custom Styles with component prop" />

```html
<script lang="ts">
    import { Tabs, Tab } from '@sveltinio/essentials/tabs';

    const customStyles = {
        'tab-active-border-b-color': '#0084f6'
    };
</script>

<Tabs activeTab="1" styles={customStyles}>
    <Tab id="1" label="Tab 1">
        <h3 style="font-weight: bold;">1 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="2" label="Tab 2">
        <h3 style="font-weight: bold;">2 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="3" label="Tab 3"
        ><h3 style="font-weight: bold;">3 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
</Tabs>
```

### DarkBlue Tabs with CSS Class

<img src="./assets/images/custom_class_1.png" alt="Tabs - DarkBlue Tabs with CSS Class" />

```css
.my-tabs {
  --color: #e3ebf2;
  --bg-color: #1d3040;
  --tab-font-size: 1rem;
  --tab-bg-color-hover: #5387b1;
  --tab-pr: 1.75rem;
  --tab-pl: 1.75rem;
  --tabs-group-border-color: transparent;
  --tab-active-bg-color: #385d7b;
  --tab-active-border-b-color: #5387b1;
  --tab-border-b-color-hover: transparent;
  --panel-border-tr-radius: 0.5rem;
}
```

```html
<script lang="ts">
    import { Tabs, Tab } from '@sveltinio/essentials/tabs';
    import DummyIcon from './_dummyIcon.svelte';
</script>

<Tabs activeTab="1" class="my-tabs">
    <Tab id="1" label="Tab 1" icon={DummyIcon}>
        <h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="2" label="Tab 2" icon={DummyIcon}>
        <h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="3" label="Tab 3" icon={DummyIcon}>
        <h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
</Tabs>
```

### Rounded Tabs with CSS Class

<img src="./assets/images/custom_class_2.png" alt="Tabs - Rounded Tabs with CSS Class" />

```css
.rounded-tabs {
  --tabs-group-gap: 0.25rem;
  --tabs-group-border-width: 0px;
  --tabs-group-border-color: transparent;
  --tab-color-hover: white;
  --tab-bg-color-hover: #5387b1;
  --tab-border-tl-radius: 0.5rem;
  --tab-border-tr-radius: 1rem;
  --tab-border-bl-radius: 1rem;
  --tab-border-br-radius: 0.5rem;
  --tab-active-border-t-width: 1px;
  --tab-active-border-t-color: #c7d8e6;
  --tab-active-border-r-width: 1px;
  --tab-active-border-r-color: #c7d8e6;
  --tab-active-border-b-width: 1px;
  --tab-active-border-b-color: #c7d8e6;
  --tab-active-border-l-width: 1px;
  --tab-active-border-l-color: #c7d8e6;
  --tab-active-bg-color: #385d7b;
  --tab-active-color: white;
}
```

```html
<script lang="ts">
    import { Tabs, Tab } from '@sveltinio/essentials/tabs';
    import DummyIcon from './_dummyIcon.svelte';
</script>

<Tabs activeTab="1" class="rounded-tabs ">
    <Tab id="1" label="Tab 1">
        <h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="2" label="Tab 2">
        <h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
    <Tab id="3" label="Tab 3">
        <h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Tab>
</Tabs>
```

### Pills TabsGroup with CSS Class

<img src="./assets/images/custom_class_3.png" alt="Tabs - Pills TabsGroup with CSS Class" />

```css
.pills-tabgroup {
  --max-width: 50%;
  --tabs-group-pt: 0.5rem;
  --tabs-group-pb: 0.5rem;
  --tabs-group-pb: 0.5rem;
  --tabs-group-pb: 0.5rem;
  --tabs-group-gap: 0.5rem;
  --tabs-group-border-t-style: solid;
  --tabs-group-border-t-width: 1px;
  --tabs-group-border-t-color: #e7e5e4;
  --tabs-group-border-r-style: solid;
  --tabs-group-border-r-width: 1px;
  --tabs-group-border-r-color: #e7e5e4;
  --tabs-group-border-b-color: #e7e5e4;
  --tabs-group-border-l-style: solid;
  --tabs-group-border-l-width: 1px;
  --tabs-group-border-l-color: #e7e5e4;
  --tabs-group-border-radius: 99px;
  --tab-color: #292524;
  --tab-bg-color: #f5f5f4;
  --tab-bg-color-hover: #e7e5e4;
  --tab-border-tl-radius: 1rem;
  --tab-border-tr-radius: 1rem;
  --tab-border-bl-radius: 1rem;
  --tab-border-br-radius: 1rem;
  --tab-active-bg-color: #d6d3d1;
  --tab-active-border-b-color: transparent;
}
```

```html
<script lang="ts">
    import { Tabs, Tab } from '@sveltinio/essentials/tabs';
</script>

<Tabs activeTab="2" class="pills-tabgroup" justify="center">
    <Tab id="1" label="Tab 1"
        ><h3 style="color: #57534e; font-weight: bold;">1 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p></Tab
    >
    <Tab id="2" label="Tab 2"
        ><h3 style="color: #57534e; font-weight: bold;">2 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p></Tab
    >
    <Tab id="3" label="Tab 3"
        ><h3 style="color: #57534e; font-weight: bold;">3 - Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p></Tab
    >
</Tabs>
```
