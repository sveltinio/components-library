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

	<div id="breadcrumbs-hide-root-only-wrapper" class="demo-wrapper">
		<h3 id="default-hide-root-only">Hide Root only</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com" />
		</div>
	</div>

	<div id="breadcrumbs-show-root-only-wrapper" class="demo-wrapper">
		<h3 id="default-show-root-only">Show Root only</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com" showRootOnly />
		</div>
	</div>

	<div id="breadcrumbs-default-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-default">Defaults</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/" />
		</div>
	</div>

	<div id="breadcrumbs-no-current-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-no-current">No Current</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/blog/posts/welcome" showCurrent={false} />
		</div>
	</div>

	<div id="breadcrumbs-single-page-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-single-page">Single Page</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/contact" />
		</div>
	</div>

	<div id="breadcrumbs-multiparent-page-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-multiparent-page">MultiParent Pages</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/music/prog" />
		</div>
	</div>

	<div id="breadcrumbs-custom-icon-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-custom-icon">Custom Divider Icon</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/music/prog">
				<svg
					slot="dividerIcon"
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
					height="20px"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					fill="none"
					><path
						d="M13 6l6 6-6 6M5 6l6 6-6 6"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</Breadcrumbs>
		</div>
	</div>

	<div id="breadcrumbs-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="breadcrumbs-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<Breadcrumbs url="http://example.com/projects/" styles={customStyles} />
		</div>
	</div>
</section>
