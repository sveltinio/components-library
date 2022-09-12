<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TabItem, TabsContext } from './types.js';
	import { CodeIcon, EyeEmptyIcon } from '@indaco/svelte-iconoir';

	export let activeTab = '1';
	export let type = 'bordered';
	export let size = 'base';
	// the source of the example, if you want it
	export let src = undefined;
	// all meta tags of the code block
	export let meta = undefined;
	// suppress vite-plugin-svelte warning about unused props
	$: src, meta;

	let activeTabStore = writable(activeTab);
	let titles: Array<TabItem> = [];

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
	setContext('CodePreviewTabs', ctx);

	$: activeTab = $activeTabStore;
	$: activeClassName = (id: string): string => {
		if (activeTab != id) return '';
		return `active-${type}`;
	};
</script>

<div>
	<ul class="tabs-list tabs-list-{type}" data-testid="tabs-titles-list">
		<li
			class="tab tab-{type} {activeClassName('1')}"
			on:click={() => {
				ctx.setActiveTab('1');
				activeTab = '1';
			}}
			data-testid="tab-1"
		>
			<div class="inner">
				<EyeEmptyIcon />
				<span class="label-{size} ml-2" data-testid="label-1">Preview</span>
			</div>
		</li>
		<li
			class="tab tab-{type} {activeClassName('2')}"
			on:click={() => {
				ctx.setActiveTab('2');
				activeTab = '2';
			}}
			data-testid="tab-2"
		>
			<div class="inner">
				<CodeIcon />
				<span class="label-{size} ml-2" data-testid="label-2">Code</span>
			</div>
		</li>
	</ul>

	<div class="tab-content tab-content-{type}" data-testid="tab-content">
		{#if activeTab === '1'}
			<div class="example">
				<slot name="example" setActiveTab={ctx.setActiveTab} />
			</div>
		{:else if activeTab === '2'}
			<div class="not-prose">
				<pre class="language-svelte"><slot name="code" setActiveTab={ctx.setActiveTab} /></pre>
			</div>
		{/if}
	</div>
</div>

<style>
	li {
		margin-bottom: -1px;
	}
	.icon {
		padding: 1rem;
		border: 1px solid rgb(71, 85, 105); /* slate-600 */
	}
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

	.tabs-list {
		display: flex;
		flex-wrap: wrap;
	}

	.tabs-list-bordered {
		--_tab-border-width: var(--tab-border-width, 2px);
		--_tab-border-style: var(--tab-border-style, solid);
		--_tab-border-color: var(--tab-border-color, rgb(241, 245, 249)); /* slate-100 */
		border-bottom-width: var(--_tab-border-width);
		border-bottom-style: var(--_tab-border-style);
		border-bottom-color: var(--_tab-border-color);
		border-top: 0;
		border-left: 0;
		border-right: 0;
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

	.tab-bordered {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}

	.tab-bordered:hover {
		--_tab-bg-color-hover: var(--tab-bg-color-hover, rgb(248, 250, 252)); /* slate-50 */
		background-color: var(--_tab-bg-color-hover);
	}

	.tab-content {
		margin-bottom: 10px;
		padding: 20px;
	}

	.active-default {
		--_border-color-active: var(--border-color-active, rgb(71, 85, 105)); /* slate-600 */
		border-bottom: 2px solid var(--_border-color-active);
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}

	.active-bordered {
		--_border-color-active: var(--border-color-active, rgb(226, 232, 240)); /* slate-200 */
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
