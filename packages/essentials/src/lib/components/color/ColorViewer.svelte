<script lang="ts">
	import type { ColorViewerShape } from './ColorViewer.d.ts';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { copy } from '$lib/actions.js';

	export let value: string;
	export let size = 24;
	export let border = false;
	export let shape: ColorViewerShape = 'circle';
	export let labelColor: string | undefined = undefined;
	export let showLabel = true;
	export let clipboard = true;
	export let styles: Record<string, string> = {};
	export let className: string | undefined = undefined;
	export { className as class };

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(ColorViewer): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}

	const defaultLabelColor = 'var(--gray-7)';
	let _labelColor = labelColor ? labelColor : defaultLabelColor;
</script>

<div
	class={className}
	style={cssStyles.value}
	style:color={_labelColor}
	tabindex="0"
	role="button"
	on:click
	on:dblclick
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	use:copy={{ enabled: clipboard }}
>
	<span
		class="color--preview"
		data-shape={shape}
		data-border={border}
		style=" background: {value}; width: {size}px; height: {size}px;"
	/>
	{#if showLabel}{value}{:else}<span class="sr-only">{value}</span>{/if}
</div>

<style src="./styles/ColorViewer.postcss">
</style>
