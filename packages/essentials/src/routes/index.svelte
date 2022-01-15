<script lang="ts">
	import { ExternalLink, ModernImage, YouTube } from '../lib';
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Demos</tt></h2>

	<section id="external-link" class="container">
		<h3>ExternalLink</h3>

		<h4 id="external-link-with-slot">with slot</h4>
		<ExternalLink id="sveltin-link" name="sveltin" url="https://sveltin.io"
			><ModernImage
				image="logo.png"
				altText="sveltin logo"
				webp={true}
				avif={true}
				width="30%"
			/></ExternalLink
		>

		<h4 id="external-link-with-slot-fallback">with slot fallback</h4>
		<ExternalLink id="sveltin-link" name="sveltin.io" url="https://sveltin.io" />
	</section>

	<section id="modern-image" class="container">
		<h3>ModernImage</h3>

		<h4 id="modern-image">As It Is</h4>
		<ModernImage image="logo.png" altText="sveltin logo" width="30%" />

		<h4 id="modern-image-avif">Avif srcset</h4>
		<ModernImage image="logo.png" altText="sveltin logo" avif={true} width="30%" />

		<h4 id="modern-image-webp">WebP srcset</h4>
		<ModernImage image="logo.png" altText="sveltin logo" webp={true} width="30%" />
	</section>

	<section id="youtube-video" class="container">
		<h3>YouTube</h3>
		<YouTube id="uQntFkK8Z54" title="The Future of Svelte" />
	</section>
</section>
