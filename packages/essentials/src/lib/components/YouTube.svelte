<script lang="ts">
	export let id: string;
	export let title: string;

	export const url = `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&hd=1`;
</script>

<div data-testid="wrapper" id="video-container" class={$$props.class} style={$$props.style}>
	<iframe
		data-testid="iframe"
		id="frame"
		style="--aspect-ratio: 3 / 4;"
		src={url}
		frameborder="0"
		allowfullscreen
		{title}
	/>
</div>

<style>
	#video-container {
		position: relative;
		width: 100%;
		padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
		height: 0;
	}

	#frame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
