<script lang="ts">
	import { Link } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	import { base } from '$app/paths';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Link</tt></h2>

	<div id="internal-link" class="container">
		<h3 id="external-link-with-slot">Internal Link</h3>
		<Link url={base} alt="link to the homepage">Home</Link>
	</div>

	<div id="external-link" class="container">
		<h3 id="external-link-with-slot">External Link</h3>
		<Link external url="https://sveltin.io" alt="link to sveltin homepage">sveltin</Link>
	</div>

	<div id="external-link-slot" class="container">
		<h3 id="external-link-with-slot-fallback">External w/ label text w/o icon</h3>
		<Link
			external
			icon={false}
			label="sveltin.io"
			url="https://sveltin.io"
			alt="link to sveltin homepage"
		/>
	</div>

	<div id="external-custom-icon" class="container">
		<h3 id="external-link-with-slot-fallback">external with custom icon</h3>
		<Link external url="https://sveltin.io" alt="link to sveltin homepage">
			<DummyIcon slot="icon" />
		</Link>
	</div>
</section>
