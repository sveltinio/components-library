<script lang="ts">
	import { ColorViewer } from '$lib/index.js';

	const myStyles = {
		'border-color': '#075985',
		'border-width': '2px',
		color: '#0284c7'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>
	<h2><tt>ColorViewer</tt></h2>
</section>

<section>
	<ColorViewer value="#86198f" />
	<ColorViewer value="#22d3ee" border showValue={false} />

	<ColorViewer value="#0ea5e9" border styles={myStyles} />
</section>
