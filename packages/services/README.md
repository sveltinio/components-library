<div align="center">
    <h1>Services Components</h1>
    <a href="https://www.npmjs.com/package/@sveltinio/services" target="_blank"><img src="https://img.shields.io/npm/v/@sveltinio/services.svg?style=flat" alt="sveltinio/services NPM version badge" /></a>
</div>

## Description

A collection of Svelte components to use GoogleFonts, GoogleAnalytics ...

## Components List

- [GoogleFonts](#googlefonts)
- [GoogleAnalytics](#googleanalytics)
- [UmamiAnalytics](#umamianalytics)

## Install

```bash
# pnpm
pnpm install @sveltinio/services

# npm
npm install @sveltinio/services

# yarn
yarn add @sveltinio/services
```

## Demos

```bash
pnpm dev
```

## Usage

### GoogleFonts

#### Properties

The `GoogleFonts` component exposes the following properties:

| Property | Type | Required | Default | Description |
| :------- | :--: | :------: | :-----: | :---------- |

```html

```

### GoogleAnalytics

#### Properties

The `Google Analytics` component exposes the following properties:

| Property | Type | Required | Default | Description |
| :------- | :--: | :------: | :-----: | :---------- |

```html

```

### UmamiAnalytics

#### Properties

The `UmamiAnalytics` component exposes the following properties:

| Property | Type | Required | Default | Description |
| :------- | :--: | :------: | :-----: | :---------- |

```html

```

### GoogleFonts

```html
<script lang="ts">
	import { GoogleFonts } from '@sveltinio/services';
	import type { IGoogleFont } from '@sveltinio/services/types';

	const googleFonts: Array<IGoogleFont> = [
		{
			name: 'IBM+Plex+Sans',
			weights: [200, 300, 400, 500, 600, 700]
		},
		{
			name: 'IBM+Plex+Mono',
			weights: [100, 200, 300, 400]
		}
	];
</script>

<GoogleFonts fonts="{googleFonts}" />
```

### GoogleAnalytics

```html
<script>
	import { GoogleAnalytics } from '@sveltinio/services';
</script>

<GoogleAnalytics propertyID="your_ga_property_id" />
```

### UmamiAnalytics

**DEFAULT SETTINGS**

```html
<script>
	import { UmamiAnalytics } from '@sveltinio/services';
</script>

<UmamiAnalytics
	websiteID="4fb7fa4c-5b46-438d-94b3-3a8fb9bc2e8b"
	srcURL="your-umami-app.com/umami.js"
/>
```

<details>
<summary><strong>WITH CUSTOM SETTINGS</strong></summary>

```html
<script lang="ts">
	import { UmamiAnalytics } from '@sveltinio/services';
	import type { IUmamiTrackerSettings } from '@sveltinio/services/types';

	// Umami tracker configurations: https://umami.is/docs/tracker-config
	const umamiTrackerSettings: IUmamiTrackerSettings = {
		hostURL: '',
		autoTrack: true,
		doNotTrack: false,
		enableCache: false,
		domains: ''
	};
</script>

<UmamiAnalytics
	websiteID="4fb7fa4c-5b46-438d-94b3-3a8fb9bc2e8b"
	srcURL="your-umami-app.com/umami.js"
	settings="{umamiTrackerSettings}"
/>
```

## License

Free and open-source software under the [MIT License](LICENSE)
