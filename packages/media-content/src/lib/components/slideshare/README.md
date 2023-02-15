# SlideShare

Easily embed SlideShare content in your pages.

## Usage

```html
<script>
    import { SlideShare } from '@sveltinio/media-content';
</script>

<SlideShare
    id="exvMftSyV7yRQR"
    user="DataReportal"
    title="Digital 2020 Global Digital Overview (January 2020) v01"
/>
```

## Properties

The `SlideShare` component exposes the following properties:

| Property |  Type     | Required | Default   | Description                                              |
| :------- | :-------: | :------: | :-------: | :------------------------------------------------------- |
| id       | `string`  |   yes    |           | The id for the content to be embed.                      |
| title    | `string`  |   yes    |           | The content title.                                       |
| user     | `string`  |   yes    |           | The user who published the content.                      |
| width    | `number`  |    no    |   `595`   | The width of the container.                              |
| height   | `number`  |    no    |   `485`   | The height of the container.                             |
| withText | `boolean` |    no    |  `true`   | To control the visibility of the text below the content. |
