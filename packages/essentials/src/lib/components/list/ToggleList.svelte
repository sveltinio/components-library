<script lang="ts">
	import { ArrowRightIcon, ArrowDownIcon } from '$lib';
	import { stylesObjToCSSVars } from '$lib/utils';
	import type { ListItem } from './types';

	export let title: string;
	export let items: Array<ListItem>;
	export let icons = true;
	export let size = 'lg';
	export let styles = {};

	let isOpen = false;
	const cssStyles = stylesObjToCSSVars(styles);
	const toggleExpand = () => (isOpen = !isOpen);
</script>

<div style={cssStyles} {...$$restProps} data-testid="list-wrapper">
	<button
		class="list-btn"
		data-testid="list-title-btn"
		aria-expanded={isOpen}
		on:click={toggleExpand}
	>
		{#if icons}
			<span class:show={!isOpen} class:hide={isOpen} data-testid="when-closed-icon">
				<slot name="whenClosedIcon">
					<ArrowRightIcon />
				</slot>
			</span>

			<span class:show={isOpen} class:hide={!isOpen} data-testid="when-open-icon">
				<slot name="whenOpenIcon">
					<ArrowDownIcon />
				</slot>
			</span>
		{/if}

		<span class="ml-2 font-semibold text-{size}">{title}</span>
	</button>

	<ul class="items-list" class:hide={!isOpen} data-testid="items-list">
		{#each items as item, i}
			<li data-testid="list-item-{i}">
				<a class="item inline-flex" href={item.url} data-testid="item-link-{i}">
					{#if item.icon}
						<div class="mr-2">
							<svelte:component this={item.icon} size="20px" />
						</div>
					{/if}
					{item.label}</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
	.ml-2 {
		margin-left: 0.5rem;
	}
	.mr-2 {
		margin-right: 0.5rem;
	}
	.font-semibold {
		--_font-weight: var(--font-weight, 600);
		font-weight: var(--_font-weight);
	}
	.text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.025em;
	}
	.text-sm {
		font-size: 0.85rem;
		line-height: 1rem;
		letter-spacing: 0.05em;
	}
	.text-base {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.text-md {
		font-size: 1rem;
		line-height: 1.5rem;
	}
	.text-lg {
		font-size: 1rem;
		line-height: 1.5rem;
	}
	.list-btn {
		--_title-color: var(--title-color, rgb(15, 23, 42)); /* slate-900 */
		--_title-bg-color: var(--title-bg-color, rgb(255, 255, 255)); /* white */
		color: var(--_title-color);
		width: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0.5rem; /* 8px */
		font-size: 0.875rem; /* 14px */
		line-height: 1.25rem; /* 20px */
		background-color: var(--_title-bg-color);
		border: 0;
	}
	.list-btn:hover {
		--_title-color-hover: var(--title-color-hover, rgb(15, 23, 42)); /* slate-900 */
		--_title-bg-color-hover: var(--title-bg-color-hover, rgb(248, 250, 252)); /* slate-50 */
		color: var(--_title-color-hover);
		background-color: var(--_title-bg-color-hover);
	}
	.items-list {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		margin-left: -0.5rem;
	}
	.item {
		--_item-color: var(--item-color, rgb(51, 65, 85)); /* slate-700 */
		--_item-border-width: var(--item-border-width, 1px);
		--_item-border-style: var(--item-border-style, solid);
		--_item-border-color: var(--item-border-color, rgb(241, 245, 249)); /* slate-100 */
		display: block;
		color: var(--_item-color);
		margin-left: -1px;
		border-left-width: var(--_item-border-width);
		border-left-style: var(--_item-border-style);
		border-color: var(--_item-border-color);
		border-top: 0;
		border-bottom: 0;
		border-right: 0;
		padding-left: 1rem; /* 16px */
	}
	.item:hover {
		--_item-color-hover: var(--item-color-hover, rgb(15, , 23, 42)); /* slate-900 */
		--_item-border-color-hover: var(
			--item-border-color-hover,
			rgb(148, 163, 184)
		); /* slate-400 */
		color: var(--_item-color-hover);
		border-left-color: var(--_item-border-color-hover);
	}
	.inline-flex {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
	}
	.active {
		--_active-color: var(--active-color, rgb(15, 23, 42)); /* slate-900 */
		--_active-border-color: var(--active-border-color, rgb(15, 23, 42)); /* slate-900 */
		color: var(--_active-color);
		border-left-color: var(--_active-border-color);
	}
</style>
