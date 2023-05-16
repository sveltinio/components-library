<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/tabs/variables.css';
	import '../../styles/components/tabs/styles.css';
	import type { TabItem, TabsContext } from './types.js';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';
	import { a11yKeyboardAction } from './a11yKeyboard.js';

	export let activeTab = '1';
	export let size = 'base';
	export let justify = 'start';
	export let bordered = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let activeTabStore = writable(activeTab);
	let mainElem: HTMLElement;
	let tabs: Array<TabItem> = [];
	let _tabs: Array<TabItem> = [];

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
	const reservedNames = ['sn-e-colors', 'sn-e-c-tabs-vars', 'sn-e-c-tabs'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	$: activeTab = $activeTabStore;
	$: activeClass = (id: string): boolean => activeTab == id;

	onMount(() => {
		a11yKeyboardAction(mainElem, { enabled: true, activeTab, ctx });
	});
</script>

<div class="sn-e-colors sn-e-c-tabs-vars sn-e-c-tabs {cssClasses}" style={cssStyles.value}>
	<div
		bind:this={mainElem}
		class="tabs__group tabs__group--justify-{justify}"
		role="tablist"
		data-testid="tabs_group"
	>
		{#each tabs as tab}
			<button
				id={tab.id}
				tabindex={activeClass(tab.id) ? 0 : -1}
				class="tab tab--{size}"
				class:tab--bordered={bordered}
				class:is-active={!bordered && activeClass(tab.id)}
				class:is-active--bordered={bordered && activeClass(tab.id)}
				role="tab"
				aria-selected={activeClass(tab.id)}
				aria-controls="panel-{tab.id}"
				data-testid="tab_{tab.id}"
			>
				{#if tab.icon}
					<svelte:component this={tab.icon} />
				{/if}

				{tab.label}
			</button>
		{/each}
	</div>

	<div
		id="panel-{activeTab}"
		tabindex="0"
		class="tab__panel"
		class:tab__panel--bordered={bordered}
		role="tabpanel"
		aria-labelledby={activeTab}
		data-testid="tab_panel-{activeTab}"
	>
		<slot />
	</div>
</div>
