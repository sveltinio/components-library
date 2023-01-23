<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/color/variables.css';
	import '../../styles/components/color/styles.css';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';

	export let value: string;
	export let size = 24;
	export let border = true;
	export let labelColor = '';
	export let showLabel = true;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', [
		'sn-e-colors',
		'sn-e-c-colorviewer-vars',
		'sn-e-c-colorviewer'
	])
		? (className = $$props.class)
		: (className = '');
</script>

<div
	class="sn-e-colors sn-e-c-colorviewer-vars sn-e-c-colorviewer {className}"
	style={cssStyles}
	style:color={labelColor != '' ? labelColor : 'currentColor'}
>
	<div
		class="color--preview"
		class:border
		style=" background: {value}; width: {size}px; height: {size}px;"
	/>
	{#if showLabel}{value}{/if}
</div>
