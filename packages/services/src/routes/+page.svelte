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

<section class="main">
	<hgroup>
		<h1><tt>@sveltinio/services</tt></h1>
		<h2><tt>Demos</tt></h2>

		<section class="container">
			<h3>Inspect the head of the webpage</h3>
			<h4>You should see tags for:</h4>
			<ul>
				<li>Google Fonts</li>
				<li>Google Analytics</li>
				<li>Umami Analytics</li>
			</ul>
		</section>
	</hgroup>
</section>
