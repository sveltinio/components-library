<script lang="ts">
	export let id: string;
	export let iframeURL: string;
	export let title = '';
</script>

<div id="iframe-wrapper-{id}" class="iframe-wrapper" data-testid="iframe_wrapper">
	<iframe
		id="frame-{id}"
		src={iframeURL}
		{title}
		allow="layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none'; autoplay; fullscreen; picture-in-picture"
		referrerpolicy="same-origin"
		class="iframe"
		{...$$restProps}
		data-testid="iframe"
	/>
</div>

<style>
	.iframe-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
		height: 0;
	}

	.iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 4px;
	}
</style>
