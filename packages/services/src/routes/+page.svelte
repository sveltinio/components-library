<script lang="ts">
	import {
		googleFonts,
		gaPropertyID,
		umamiSample,
		umamiTrackerSettings
	} from '../data/sample.js';
	import { GoogleFonts, GoogleAnalytics, UmamiAnalytics } from '$lib/index.js';
</script>

<GoogleFonts fonts={googleFonts} />
<GoogleAnalytics propertyID={gaPropertyID} />

<UmamiAnalytics
	websiteID={umamiSample.websiteID}
	srcURL={umamiSample.srcURL}
	settings={umamiTrackerSettings}
/>

<div class="header">
	<h1>@sveltinio/services</h1>
	<h2>Demos</h2>
	<h3>Inspect the head of the webpage</h3>
	<ul>
		<li>Google Fonts</li>
		<li>Google Analytics</li>
		<li>Umami Analytics</li>
	</ul>
</div>
