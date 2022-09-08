<script lang="ts">
	import { googleFonts, gaPropertyID } from '../../tests/__fixtures__/data.test.js.js';
	import { GoogleFonts, GoogleAnalytics } from '../lib';
</script>

<GoogleFonts fonts={googleFonts} />
<GoogleAnalytics propertyID={gaPropertyID} />
<!--
<UmamiAnalytics
	websiteID="your_umami_websiteID"
	srcURL="your-umami-app.com/umami.js"
	settings={umamiTrackerSettings}
/>
-->
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
