<script lang="ts">
	import { ExternalLink, Picture } from '$lib';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>ExternalLink</tt></h2>

	<div id="external-link" class="container">
		<h3 id="external-link-with-slot">with slot</h3>
		<ExternalLink id="sveltin-link" label="sveltin" url="https://sveltin.io"
			><Picture
				src="logo.png"
				altText="sveltin logo"
				webp={true}
				avif={true}
				width="30%"
			/></ExternalLink
		>
	</div>

	<div id="external-link-slot" class="container">
		<h3 id="external-link-with-slot-fallback">with slot fallback</h3>
		<ExternalLink id="sveltin-link" label="sveltin.io" url="https://sveltin.io" />
	</div>
</section>
