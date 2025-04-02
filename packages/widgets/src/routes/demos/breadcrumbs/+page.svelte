<script lang="ts">
	import { Breadcrumbs } from '$lib/index.js';

	const customStyles = {
		'icon-color': '#6d28d9',
		'icon-color-hover': '#6b21a8',
		'parent-color': '#6d28d9',
		'parent-color-hover': '#6b21a8',
		'current-color': '#6b21a8'
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>Breadcrumbs</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="breadcrumbs-show-root-only-wrapper" class="demo-wrapper">
		<h3 id="default-show-root-only">Home only</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com" />
		</div>
	</div>

	<div id="breadcrumbs-default-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-default">Defaults</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/" />
		</div>
	</div>

	<div id="breadcrumbs-home-text-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-home-text">Home as text</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/contact" homeAsIcon={false} />
		</div>
	</div>

	<div id="breadcrumbs-multiparent-page-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-multiparent-page">MultiParent Pages</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/music/prog" />
		</div>
	</div>

	<div id="breadcrumbs-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/" styles={customStyles} />
		</div>
	</div>
</section>
