<script lang="ts">
	import './styles.css';
	import type { TocEntry } from '../../types.js';
	import { stylesObjToCSSVars } from '../../utils.js';
	import TocList from './TocList.svelte';
	import TocIcon from './TocIcon.svelte';

	export let data: Array<TocEntry>;
	export let label = 'Table of Contents';
	export let full = true;
	export let iconOnly = false;
	export let labelOnly = false;
	export let prefixChar = '#';
	export let isOpen = false;
	export let ordered = false;

	export let theme = 'default';
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);
	const toggleVisibility = () => (isOpen = !isOpen);
</script>

<nav class="{theme} toc-{theme}" style={cssStyles} data-testid="toc_container">
	<button
		on:click|preventDefault={toggleVisibility}
		alt={label}
		aria-label={label}
		aria-expanded={isOpen}
		data-testid="toggle_btn"
	>
		{#if !labelOnly}
			<slot name="icon">
				<TocIcon />
			</slot>
		{/if}
		{#if !iconOnly}
			<span>{label}</span>
		{/if}
	</button>
	<TocList {data} {ordered} {theme} {isOpen} {full} {prefixChar} />
</nav>
