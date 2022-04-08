<script lang="ts">
	export let id: string;
	export let iframeURL: string;
	export let title = '';
</script>

<div data-testid="frame-wrapper" id="frameo-container-{id}" class="frame-container">
	<iframe
		data-testid="iframe"
		id="frame-{id}"
		class="frame"
		src={iframeURL}
		allow="layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none'; autoplay; fullscreen; picture-in-picture"
		referrerpolicy="same-origin"
		{title}
	/>
</div>

<style>
	.frame-container {
		position: relative;
		width: 100%;
		padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
		height: 0;
	}

	.frame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 4px;
	}
</style>
