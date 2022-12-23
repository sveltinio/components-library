<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars } from '$lib/utils';

	export let value: string;
	export let size = 24;
	export let border = true;
	export let showValue = true;

	let className = '';
	export { className as class };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div class="se__colorpreview se__colorpreview__main {className}" style={cssStyles} {...$$restProps}>
	<div
		class="preview"
		class:border
		style="background: {value}; width: {size}px; height: {size}px;"
	/>
	{#if showValue}{value}{/if}
</div>
