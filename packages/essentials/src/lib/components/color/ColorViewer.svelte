<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/color/variables.css';
	import '../../styles/components/color/styles.css';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';

	export let value: string;
	export let size = 24;
	export let border = true;
	export let labelColor = '';
	export let showLabel = true;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-colorviewer-vars', 'sn-e-c-colorviewer'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-colors sn-e-c-colorviewer-vars sn-e-c-colorviewer {cssClasses}"
	style={cssStyles.value}
	style:color={labelColor != '' ? labelColor : 'currentColor'}
>
	<div
		class="color--preview"
		class:border
		style=" background: {value}; width: {size}px; height: {size}px;"
	/>
	{#if showLabel}{value}{/if}
</div>
