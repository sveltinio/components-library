<script lang="ts">
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
	<Breadcrumbs baseURL="/" parent="posts" current="Getting Started" />

	<Breadcrumbs baseURL="/" current="Contact" styles={customStyles} />
</section>
