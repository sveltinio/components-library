<script lang="ts">
	import '../../styles/baseline.css';
	import '../../styles/components/color/styles.css';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils.js';
	import { copy } from '$lib/actions';

	type ButtonShape = 'rounded' | 'circle' | 'pill' | 'square';

	export let value: string;
	export let size = 24;
	export let border = false;
	export let shape: ButtonShape = 'circle';
	export let labelColor: string | undefined = undefined;
	export let showLabel = true;
	export let clipboard = true;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const defaultLabelColor = 'var(--gray-7)';
	let _labelColor = labelColor ? labelColor : defaultLabelColor;

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-colorviewer'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-c-colorviewer {cssClasses}"
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
