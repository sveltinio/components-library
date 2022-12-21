<script lang="ts">
	import './styles.css';
	import type { TocEntry } from '../../types.js';
	import { stylesObjToCSSVars } from '../../utils.js';
	import TocList from './TocList.svelte';
	import TocButton from './TocButton.svelte';

	export let data: Array<TocEntry>;
	export let label = 'Table of Contents';
	export let full = true;
	export let iconOnly = false;
	export let labelOnly = false;
	export let prefixChar = '#';
	export let isOpen = false;
	export let ordered = false;

	let themeClassName = '';
	export { themeClassName as theme };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<nav class="sw__toc sw__toc__main {themeClassName}" style={cssStyles} data-testid="toc-main">
	<TocButton {label} bind:isOpen {iconOnly} {labelOnly} />
	<TocList {data} {ordered} {isOpen} {full} {prefixChar} />
</nav>
