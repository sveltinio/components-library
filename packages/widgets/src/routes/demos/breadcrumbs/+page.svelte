<script lang="ts">
	import { page } from '$app/stores';
	import { Breadcrumbs } from '$lib/index.js';

	const customStyles = {
		'icon-color': '#8b5cf6',
		'icon-color-hover': '#4338ca',
		'parent-color': '#8b5cf6',
		'parent-color-hover': '#4338ca',
		'current-color': '#4338ca'
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>Breadcrumbs</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="breadcrumbs-default-wrapper" class="demo-wrapper">
		<h3 id="buttons-variants">Defaults</h3>
		<div class="preview">
			<Breadcrumbs url={$page.url.href} />
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
				><svg
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
			<Breadcrumbs url={$page.url.href} styles={customStyles} />
		</div>
	</div>
</section>
