# GoogleAnalytics

Type-safe Svelte component to easily use Google Analytics in your Svelte and SvelteKit pages.

## Usage

```html
<script>
   import { GoogleAnalytics } from '@sveltinio/services/google';
</script>

<GoogleAnalytics propertyID="your_ga_property_id" />
```

## Properties

The `Google Analytics` component exposes the following properties:

| Property   | Type     | Required | Default | Description                                        |
| :--------- | :------: | :------: | :-----: | :------------------------------------------------- |
| propertyID | `string` | yes      |         | The numeric Id of your Google Analytics 4 property |
