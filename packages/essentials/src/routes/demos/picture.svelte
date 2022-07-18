<script lang="ts">
	import { Picture } from '$lib';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Picture</tt></h2>

	<div id="Picture" class="container">
		<h2>Picture</h2>

		<h3 id="picture">As It Is</h3>
		<Picture src="logo.png" alt="sveltin logo" width="300" />

		<h3 id="picture-avif">Avif srcset</h3>
		<Picture src="logo.png" alt="sveltin logo" width="300" avif />

		<h3 id="picture-webp">WebP srcset</h3>
		<Picture src="logo.png" width="300" webp />
	</div>
</section>
