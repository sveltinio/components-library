<script lang="ts">
	import { Link } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	import { base } from '$app/paths';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Link</tt></h2>
</section>

<section>
	<div id="internal-link" class="demo-container">
		<h3>Internal Link</h3>
		<Link href="{base}/contact">Contact</Link>
	</div>

	<div id="external-link" class="demo-container">
		<h3>External Link</h3>
		<Link href="https://sveltin.io" external>sveltin</Link>
	</div>

	<div id="external-link-slot" class="demo-container">
		<h3>External w/ label text w/o icon</h3>
		<Link href="https://sveltin.io" label="sveltin.io" external icon={false} />
	</div>

	<div id="external-custom-icon" class="demo-container">
		<h3>external with custom icon</h3>
		<Link href="https://sveltin.io" external>
			<DummyIcon slot="icon" />
		</Link>
	</div>
</section>
