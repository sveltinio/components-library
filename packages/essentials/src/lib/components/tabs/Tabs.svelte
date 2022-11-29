<script lang="ts">
	import './tabs-styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars } from '$lib/utils.js';
	import type { TabItem, TabsContext } from './types.js';

	export let activeTab = '1';
	export let size = 'base';
	export let bordered = false;
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
	$: activeClassName = (id: string): boolean => {
		if (activeTab != id) return false;
		return true;
	};

	$: activeBorderedClassName = (id: string): boolean => {
		if (activeTab != id) return false;
		return true;
	};
</script>

<div class="tabs" style={cssStyles}>
	<ul class="tabs-list" class:tabs-list-bordered={bordered} data-testid="tabs-titles-list">
		{#each titles as item}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				class="tab"
				class:tab-bordered={bordered}
				class:active-tab={activeClassName(item.id)}
				class:active-tab-bordered={bordered ? activeBorderedClassName(item.id) : ''}
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

	<div class="tab-content" class:tab-content-bordered={bordered} data-testid="tab-content">
		<slot setActiveTab={ctx.setActiveTab} />
	</div>
</div>
