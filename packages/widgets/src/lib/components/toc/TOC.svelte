<script lang="ts">
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

<style>
	:root {
		--_min-height: var(--min-height, 45px);
		--_gap: var(--gap, 4px);
		--_font-size: var(--font-size, 16px);
		--_font-weight: var(--font-weight, bold);
		--_line-height: var(--line-height, 1.75rem);
		--_btn-border-weight: var(--btn-border-weight, 0px);
		--_btn-border-style: var(--btn-border-style, none);
		--_btn-border-color: var(--btn-border-color, transparent);
		--_btn-border-radius: var(--btn-border-radius, 30px);
	}
	.default {
		--_text-transform: var(--text-transform, none);
		--_box-bg-color: var(--box-bg-color, transparent);
		--_box-border-weight: var(--box-border-weight, 0px);
		--_box-border-style: var(--box-border-style, none);
		--_box-border-color: var(--box-border-color, transparent);
		--_box-border-radius: var(--box-border-radius, 0px);
		/* btn */
		--_btn-color: var(--btn-color, rgb(31, 51, 55)); /* slate-800 */
		--_btn-bg-color: var(--btn-bg-color, rgb(248, 250, 252)); /* slate-50 */
		--_btn-bg-color-hover: var(--btn-bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		--_btn-pt: var(--btn-pt, 3px);
		--_btn-pr: var(--btn-pr, 6px);
		--_btn-pb: var(--btn-pb, 3px);
		--_btn-pl: var(--btn-pl, 6px);
		/* list */
		--_list-style-type: var(--list-style-type, none);
		--_list-bg-color-hover: var(--bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		--_list-pt: var(--list-pt, 10px);
		--_list-pr: var(--list-pr, 0);
		--_list-pb: var(--list-pb, 0);
		--_list-pl: var(--list-pl, 20px);
		/* item */
		--_item-color: var(--item-color, rgb(30, 41, 59)); /* slate-800 */
		--_item-text-decoration: var(--item-text-decoration, none);
		--_item-text-decoration-hover: var(--item-text-decoration-hove, none);
		--_item-bg-color-hover: var(--item-bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		--_item-pt: var(--item-pt, 0.25rem);
		--_item-pr: var(--item-pr, 0.25rem);
		--_item-pb: var(--item-pb, 0.25rem);
		--_item-pl: var(--item-pl, 0.25rem);
	}

	.sveltin {
		--_text-transform: var(--text-transform, uppercase);
		--_box-bg-color: var(--box-bg-color, rgb(248, 250, 252)); /* slate-50 */
		--_box-border-weight: var(--box-border-weight, 3px);
		--_box-border-style: var(--box-border-style, solid);
		--_box-border-color: var(--box-border-color, rgb(148, 163, 184)); /* slate-400 */
		--_box-border-radius: var(--box-border-radius, 0px);
		/* btn */
		--_btn-color: var(--btn-color, rgb(60, 60, 60)); /* slate-700 */
		--_btn-bg-color: var(--btn-bg-color, rgb(248, 250, 252)); /* slate-50 */
		--_btn-bg-color-hover: var(--btn-bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		--_btn-pt: var(--btn-pt, 3px);
		--_btn-pr: var(--btn-pr, 8px);
		--_btn-pb: var(--btn-pb, 3px);
		--_btn-pl: var(--btn-pl, 8px);
		/* list */
		--_list-style-type: var(--list-style-type, none);
		--_list-bg-color-hover: var(--bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		--_list-pt: var(--list-pt, 10px);
		--_list-pr: var(--list-pr, 0);
		--_list-pb: var(--list-pb, 0);
		--_list-pl: var(--list-pl, 20px);
		/* item */
		--_item-color: var(--item-color, rgb(51, 65, 85)); /* slate-700 */
		--_item-text-decoration: var(--item-text-decoration, none);
		--_item-text-decoration-hover: var(--item-text-decoration-hove, none);
		--_item-bg-color-hover: var(--item-bg-color-hover, rgb(226, 232, 240)); /* slate-200 */
		--_item-pt: var(--item-pt, 0.25rem);
		--_item-pr: var(--item-pr, 0.25rem);
		--_item-pb: var(--item-pb, 0.25rem);
		--_item-pl: var(--item-pl, 0.25rem);
	}

	nav {
		margin: 0;
		padding: 0.24rem 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	button {
		min-height: var(--_min-height);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		gap: var(--_gap);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
		border-radius: var(--_btn-border-radius);
		border: var(--_btn-border-weight) var(--_btn-border-style) var(--_btn-border-color);
	}

	/** Themes (variants) */

	/* Default */
	.toc-default {
		background-color: var(--_box-bg-color);
		border: var(--_box-border-weight) var(--_box-border-style) var(--_box-border-color);
		border-radius: var(--_box-border-radius);
	}

	.toc-default button {
		color: var(--_btn-color);
		text-transform: var(--_text-transform);
		padding-top: var(--_btn-padding-top);
		padding-left: var(--_btn-padding-left);
		padding-bottom: var(--_btn-padding-bottom);
		padding-right: var(--_btn-padding-right);
		background-color: var(--_btn-bg-color);
	}

	.toc-default button:hover {
		background-color: var(--_btn-bg-color-hover);
	}

	/* Sveltin */
	.toc-sveltin {
		background-color: var(--_box-bg-color);
		border-left: var(--_box-border-weight) var(--_box-border-style) var(--_box-border-color);
		border-radius: var(--_box-border-radius);
		margin: 0 0 20px 0;
		padding: 0.25rem 1rem;
	}

	.toc-sveltin button {
		color: var(--_btn-color);
		background-color: var(--_btn-bg-color);
		margin: 10px 0 10px 0;
		padding-top: var(--_btn-padding-top);
		padding-left: var(--_btn-padding-left);
		padding-bottom: var(--_btn-padding-bottom);
		padding-right: var(--_btn-padding-right);
		text-transform: var(--_text-transform);
	}

	.toc-sveltin button:hover {
		background-color: var(--_btn-bg-color-hover);
	}
</style>
