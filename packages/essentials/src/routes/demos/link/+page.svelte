<script lang="ts">
	import { Link } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	import { base } from '$app/paths';
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Link</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="internal-link" class="demo-wrapper">
		<h3>Internal Link</h3>
		<div class="preview">
			<Link href="{base}/contact">Contact</Link>
		</div>
	</div>

	<div id="internal-link-icon" class="demo-wrapper">
		<h3>Internal Link w/ leftIcon</h3>
		<div class="preview">
			<Link href="{base}/contact">
				<DummyIcon slot="leftIcon" />
				Contact
			</Link>
		</div>
	</div>

	<div id="external-link" class="demo-wrapper">
		<h3>External Link</h3>
		<div class="preview">
			<Link href="https://sveltin.io" external>sveltin</Link>
		</div>
	</div>

	<div id="external-link-slot" class="demo-wrapper">
		<h3>External w/ label text w/o external icon</h3>
		<div class="preview">
			<Link href="https://sveltin.io" label="sveltin.io" external externalIcon={false}>
				<span slot="leftIcon">'✈'</span>
			</Link>
		</div>
	</div>

	<div id="external-link-slot-with-icon-size" class="demo-wrapper">
		<h3>External w/ label text w/ external icon size</h3>
		<div class="preview">
			<Link href="https://sveltin.io" label="sveltin.io" external externalIconSize={12} />
		</div>
	</div>

	<div id="external-custom-icon" class="demo-wrapper">
		<h3>external with custom icon</h3>
		<div class="preview">
			<Link href="https://sveltin.io" external>
				Homepage <DummyIcon slot="rightIcon" />
			</Link>
		</div>
	</div>
</section>
