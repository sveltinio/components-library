<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils';

	export let value: string;
	export let size = 24;
	export let border = true;
	export let showValue = true;

	let className = '';
	export { className as class };

	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-c-colorviewer-vars', 'sn-e-c-colorviewer'])) {
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="sn-e-c-colorviewer-vars sn-e-c-colorviewer {className}"
	style={cssStyles}
	{...$$restProps}
>
	<div
		class="preview"
		class:border
		style="background: {value}; width: {size}px; height: {size}px;"
	/>
	{#if showValue}{value}{/if}
</div>
