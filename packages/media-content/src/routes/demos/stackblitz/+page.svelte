<script lang="ts">
	import { StackBlitz } from '$lib/index.js';

	import { stackblitzSample, stackblitzSettings } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>StackBlitz</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>
	<div id="stackblitz-default-wrapper">
		<h3 id="stackblitz-default">StackBlitz</h3>
		<div class="preview">
			<StackBlitz id={stackblitzSample.id} />
		</div>
	</div>

	<div id="stackblitz-settings-wrapper">
		<h3 id="stackblitz-settings">StackBlitz - Settings</h3>
		<div class="preview">
			<StackBlitz id={stackblitzSample.id} settings={stackblitzSettings} />
		</div>
	</div>
</section>
