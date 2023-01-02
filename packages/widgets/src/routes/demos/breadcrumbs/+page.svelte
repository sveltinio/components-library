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

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>
	<h2><tt>Breadcrumbs</tt></h2>
</section>

<section>
	<div class="demo-container">
		<h3>Default</h3>
		<Breadcrumbs url={$page.url.href} />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>No Current</h3>
		<Breadcrumbs url="http://example.com/blog/posts/welcome" showCurrent={false} />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Single Page</h3>
		<Breadcrumbs url="http://example.com/contact" />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>MultiParent Page</h3>
		<Breadcrumbs url="http://example.com/projects/music/prog" />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Custom Divider Icon</h3>
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
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with prop</h3>
		<Breadcrumbs url={$page.url.href} styles={customStyles} />
	</div>
</section>
