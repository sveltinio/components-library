<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars } from '$lib/utils';
	import type { TabItem, TabsContext } from './types';

	export let activeTab = '1';
	export let type = 'default';
	export let size = 'base';
	export let styles = {};

	let activeTabStore = writable(activeTab);
	let titles: Array<TabItem> = [];

	const cssStyles = stylesObjToCSSVars(styles);
	const ctx: TabsContext = {
		activeTab: activeTabStore,
		setActiveTab: (_value) => activeTabStore.set(_value),
		registerTab: (id: string, title: string, icon: any) => {
			titles.push({ id, title, icon });
			titles = titles;
		},
		unregisterTab(id: string) {
			const tabIndex = titles.findIndex((title) => title.id === id);
			if (tabIndex > -1) {
				titles.splice(tabIndex, 1);
				titles = titles;
			}
		}
	};
	setContext('Tabs', ctx);

	$: activeTab = $activeTabStore;
	$: activeClassName = (id: string): string => {
		if (activeTab != id) return '';

		return `active-${type}`;
	};
</script>

<div style={cssStyles}>
	<ul class="tabs-list tabs-list-{type}" data-testid="tabs-titles-list">
		{#each titles as item}
			<li
				class="tab tab-{type} {activeClassName(item.id)}"
				on:click={() => {
					ctx.setActiveTab(item.id);
					activeTab = item.id;
				}}
				data-testid="tab-{item.id}"
			>
				<div class="inner">
					{#if item.icon}
						<svelte:component this={item.icon} />
					{/if}
					<span
						class="label-{size}"
						class:ml-2={item.icon != undefined}
						data-testid="label-{item.id}"
					>
						{item.title}
					</span>
				</div>
			</li>
		{/each}
	</ul>

	<div class="tab-content tab-content-{type}" data-testid="tab-content">
		<slot setActiveTab={ctx.setActiveTab} />
	</div>
</div>

<style>
	li {
		margin-bottom: -1px;
	}
	.icon {
		padding: 1rem;
		border: 1px solid red;
	}

	/****************/
	/** Label Sizes */
	/****************/
	.label-xs {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.025em;
	}

	.label-sm {
		font-size: 0.85rem;
		line-height: 1rem;
		letter-spacing: 0.05em;
	}

	.label-base {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.label-md {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.label-lg {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	/*********************/

	.tabs-list {
		display: flex;
		flex-wrap: wrap;
	}

	.tabs-list-default {
	}

	.tabs-list-bordered {
		--_tabs-list-border-width: var(--tabs-list-border-width, 1px);
		--_tabs-list-border-style: var(--tabs-list-border-style, solid);
		--_tabs-list-border-color: var(--tabs-list-border-color, rgb(226 232 240)); /* slate-200 */
		border-bottom-width: var(--_tabs-list-border-width);
		border-bottom-style: var(--_tabs-list-border-style);
		border-bottom-color: var(--_tabs-list-border-color);
	}

	.tab {
		position: relative;
		display: inline-flex;
		cursor: pointer;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 2;
		padding: 0.5rem 1rem;
	}

	/*********************/
	/** Types (variants) */
	/*********************/

	/* Default */
	.tab-default {
		--_tab-border-width: var(--tab-border-width, 2px);
		--_tab-border-style: var(--tab-border-style, solid);
		--_tab-border-color: var(--tab-border-color, rgb(241 245 249)); /* slate-100 */
		border-bottom-width: var(--_tab-border-width);
		border-bottom-style: var(--_tab-border-style);
		border-bottom-color: var(--_tab-border-color);
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}

	.tab-default:hover {
		--_tab-border-color-hover: var(--tab-border-color-hover, rgb(148 163 184)); /* slate-400 */
		border-bottom-color: var(--_tab-border-color-hover);
	}

	/* Bordered */
	.tab-bordered {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}

	.tab-bordered:hover {
		--_tab-bg-color-hover: var(--tab-bg-color-hover, rgb(248 250 252)); /* slate-50 */
		background-color: var(--_tab-bg-color-hover);
	}

	/***********/
	/** Tab Content Types (Variants) */
	/***********/
	.tab-content {
		margin-bottom: 10px;
		padding: 40px;
	}

	.tab-content-bordered {
		--_content-border-width: var(--content-border-width, 1px);
		--_content-border-style: var(--content-border-style, solid);
		--_content-border-color: var(--content-border-color, rgb(226 232 240)); /* slate-200 */

		border-width: var(--_content-border-width);
		border-style: var(--_content-border-style);
		border-color: var(--_content-border-color);
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}

	/************/
	/** ACTIVE **/
	/************/
	.active-default {
		--_border-color-active: var(--border-color-active, rgb(71 85 105)); /* slate-600 */
		border-bottom: 2px solid var(--_border-color-active);
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}

	.active-bordered {
		--_border-color-active: var(--border-color-active, rgb(226 232 240)); /* slate-200 */
		border-color: var(--_border-color-active) var(--_border-color-active) #fff;
	}

	.inner {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.ml-2 {
		margin-left: 0.5rem;
	}
</style>
