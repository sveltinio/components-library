<script lang="ts">
	import { Link, Picture } from '$lib';
	import DummyIcon from '../_dummyIcon.svelte';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Link</tt></h2>

	<div id="external-link" class="container">
		<h3 id="external-link-with-slot">with slot</h3>
		<Link label="sveltin" url="https://sveltin.io" icon={false}
			><Picture
				src="logo.png"
				altText="sveltin logo"
				webp={true}
				avif={true}
				width="30%"
			/></Link
		>
	</div>

	<div id="external-link-slot" class="container">
		<h3 id="external-link-with-slot-fallback">with slot fallback</h3>
		<Link label="sveltin.io" url="https://sveltin.io" />
	</div>

	<div id="external-custom-icon" class="container">
		<h3 id="external-link-with-slot-fallback">with custom icon</h3>
		<Link label="sveltin.io" url="https://sveltin.io" style>
			<DummyIcon slot="icon" />
		</Link>
	</div>
</section>
