<script lang="ts">
	import { Link } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	import { base } from '$app/paths';

	const myLinkStyles = {
		pt: '1rem',
		pr: '0.5rem',
		pb: '1rem',
		pl: '0.5rem',
		'border-width': '1px',
		'border-radius': '0.4rem',
		'color-hover': 'white',
		'bg-color-hover': '#a855f7',
		'border-color-hover': 'white',
		'border-width-hover': '1px',
		'text-decoration-hover': 'none'
	};
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

	<div id="link-theming-styles" class="demo-container">
		<h3>Custom Styles with prop (on hover)</h3>
		<div class="row">
			<Link href="/contact" label="Contact" styles={myLinkStyles} />
		</div>
	</div>

	<div id="link-theming-class" class="demo-container">
		<h3>Custom Styles with CSS Class (on hover)</h3>
		<div class="row">
			<Link href="/contact" label="Contact" class="internal-link" />
		</div>
	</div>
</section>
