<script lang="ts">
	import { ColorViewer } from '$lib/index.js';

	const myStyles = {
		'border-color': '#075985',
		'border-width': '2px',
		color: '#075985'
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>ColorViewer</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="colorviewer-default-wrapper" class="demo-wrapper">
		<h3 id="colorviewer-default">Default</h3>
		<div class="preview">
			<ColorViewer value="#86198f" />
		</div>
	</div>

	<div id="colorviewer--shapes-wrapper" class="demo-wrapper">
		<h3 id="colorviewer--shapes">Shapes</h3>
		<div class="preview">
			<ColorViewer value="#86198f" />
			<ColorViewer value="#86198f" shape="rounded" />
			<ColorViewer value="#86198f" shape="square" />
			<ColorViewer value="#86198f" shape="pill" />
		</div>
	</div>

	<div id="colorviewer-label-color-wrapper" class="demo-wrapper">
		<h3 id="colorviewer-label-color-prop">Label color</h3>
		<div class="preview">
			<ColorViewer value="#0ea5e9" labelColor="#075985" border />
		</div>
	</div>

	<div id="colorviewer-no-value-wrapper" class="demo-wrapper">
		<h3 id="colorviewer-no-value">No Label Value</h3>
		<div class="preview">
			<ColorViewer value="#22d3ee" border showLabel={false} />
		</div>
	</div>

	<div id="colorviewer-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="colorviewer-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<ColorViewer value="#0ea5e9" labelColor="#075985" border styles={myStyles} />
		</div>
	</div>
</section>
