<script lang="ts">
	import './list-styles.css';
	import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from '$lib';
	import { stylesObjToCSSVars } from '$lib/utils';
	import type { ListItem } from './types';

	export let title: string;
	export let items: Array<ListItem>;
	export let size = 'base';
	export let full = false;
	export let styles = {};

	let isOpen = false;
	const cssStyles = stylesObjToCSSVars(styles);
	const toggleExpand = () => (isOpen = !isOpen);
</script>

<div class="toggle-list" style={cssStyles} {...$$restProps} data-testid="list-wrapper">
	<button
		class="toggle-list-btn btn-{size}"
		class:toggle-list-btn-full={full}
		data-testid="list-title-btn"
		aria-expanded={isOpen}
		on:click={toggleExpand}
	>
		<slot name="leftSideIcon" />

		<span class="ml-2 font-semibold">{title}</span>
		<span
			class="icon"
			class:icon-to-right={full}
			class:show={!isOpen}
			class:hide={isOpen}
			data-testid="when-closed-icon"
		>
			<slot name="whenClosedIcon">
				<ArrowRightIcon />
			</slot>
		</span>

		<span
			class="icon"
			class:icon-to-right={full}
			class:show={isOpen}
			class:hide={!isOpen}
			data-testid="when-open-icon"
		>
			<slot name="whenOpenIcon">
				<ArrowUpIcon />
			</slot>
		</span>
	</button>

	<ul class="toggle-list-items" class:hide={!isOpen} data-testid="items-list">
		{#each items as item, i}
			<li class="list-item" data-testid="list-item-{i}">
				<a class="item" href={item.url} data-testid="item-link-{i}">
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
