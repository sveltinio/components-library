<script lang="ts">
	import type { TabItem, TabsContext } from './Tabs.d.ts';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import TabContent from './TabContent.svelte';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';
	import { a11y } from './a11y-action.js';

	export let activeTab = '1';
	export let size: 'sm' | 'base' | 'lg' = 'base';
	export let justify: 'start' | 'center' | 'end' = 'start';
	export let variant: 'default' | 'border' = 'default';

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let activeTabStore = writable(activeTab);
	let mainElem: HTMLElement;
	let tabs: Array<TabItem> = [];
	let _tabs: Array<TabItem> = [];

	const isBorder = variant === 'border';

	const ctx: TabsContext = {
		activeTab: activeTabStore,
		setActiveTab: (_value) => activeTabStore.set(_value),
		registerTab: (id: string, label: string, icon: any) => {
			_tabs.push({ id, label, icon });
			tabs = _tabs;
		},
		unregisterTab(id: string) {
			const tabIndex = _tabs.findIndex((tab) => tab.id === id);
			if (tabIndex > -1) {
				_tabs.splice(tabIndex, 1);
				tabs = _tabs;
			}
		}
	};
	setContext('SNE_Tabs', ctx);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-tabs'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	$: activeTab = $activeTabStore;
	$: activeClass = (id: string): boolean => activeTab == id;

	onMount(() => {
		a11y(mainElem, { enabled: true, activeTab, ctx });
	});
</script>

<div class="sn-e-c-tabs {cssClasses}" style={cssStyles.value}>
	<div
		bind:this={mainElem}
		class="tabs__group"
		data-justify={justify}
		role="tablist"
		aria-label="tab-group"
		data-testid="tabs_group"
	>
		{#each tabs as tab}
			<button
				id={tab.id}
				tabindex={activeClass(tab.id) ? 0 : -1}
				role="tab"
				class="tab"
				data-variant={variant}
				data-size={size}
				class:is-active={!isBorder && activeClass(tab.id)}
				class:is-active--bordered={isBorder && activeClass(tab.id)}
				aria-selected={activeClass(tab.id)}
				aria-controls="content-{tab.id}"
				data-testid="tab_{tab.id}"
				on:click
				on:dblclick
				on:keydown
				on:keyup
				on:mouseenter
				on:mouseleave
			>
				{#if tab.icon}
					<svelte:component this={tab.icon} />
				{/if}

				{tab.label}
			</button>
		{/each}
	</div>

	<TabContent {variant}>
		<slot />
	</TabContent>
	<!--
	<div
		id="content-{activeTab}"
		tabindex="0"
		class="tab__content"
		data-variant={variant}
		role="tabpanel"
		aria-labelledby={activeTab}
		aria-current="page"
		data-testid="content-{activeTab}"
	>
		<slot />
	</div>
	-->
</div>

<style src="./styles/Tabs.postcss">
</style>
