<script lang="ts">
	import type { IGoogleFont } from '../types';

	function listenerFunction(this: HTMLElement, ev: Event) {
		ev.preventDefault();
		this.onload = null;
		this.removeAttribute('media');
	}

	export let fonts: Array<IGoogleFont>;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	{#each fonts as font}
		<link
			on:load={listenerFunction}
			media="print"
			href="https://fonts.googleapis.com/css2?family={font.name}:wght@{font.weights.join(
				';'
			)}&display=swap"
			rel="stylesheet"
		/>
	{/each}
</svelte:head>
