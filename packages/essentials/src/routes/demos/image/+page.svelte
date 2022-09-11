<script lang="ts">
	import { Image } from '$lib/index.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Image</tt></h2>

	<div id="Image" class="container">
		<h2>Image</h2>

		<h3 id="Image">As It Is</h3>
		<Image src="logo.png" alt="sveltin logo" width="300" />

		<h3 id="Image-avif">Avif srcset</h3>
		<Image src="logo.png" alt="sveltin logo" width="300" avif />

		<h3 id="Image-webp">WebP srcset</h3>
		<Image src="logo.png" width="300" webp />
	</div>
</section>
