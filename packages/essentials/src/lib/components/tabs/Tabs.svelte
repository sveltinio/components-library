<script lang="ts">
	import './styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils.js';
	import type { TabItem, TabsContext } from './types.js';
	import TabsGroup from './TabsGroup.svelte';

	export let activeTab = '1';
	export let size = 'base';
	export let justify = 'start';
	export let bordered = false;

	let className = '';
	export { className as class };
	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-colors', 'sn-e-c-tabs-vars', 'sn-e-c-tabs'])) {
		console.error('@sveltinio ERROR: Invalid class name for the Tabs component!');
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let activeTabStore = writable(activeTab);
	let tabs: Array<TabItem> = [];

	const ctx: TabsContext = {
		activeTab: activeTabStore,
		setActiveTab: (_value) => activeTabStore.set(_value),
		registerTab: (id: string, label: string, icon: any) => {
			tabs.push({ id, label, icon });
			tabs = tabs;
		},
		unregisterTab(id: string) {
			const tabIndex = tabs.findIndex((tab) => tab.id === id);
			if (tabIndex > -1) {
				tabs.splice(tabIndex, 1);
				tabs = tabs;
			}
		}
	};
	setContext('SNE_Tabs', ctx);
</script>

<div class="sn-e-colors sn-e-c-tabs-vars sn-e-c-tabs {className}" style={cssStyles}>
	<TabsGroup {tabs} {activeTab} {justify} {size} {bordered} />

	<div class="tab__content" class:tab__content--bordered={bordered} data-testid="tab-content">
		<slot setActiveTab={ctx.setActiveTab} />
	</div>
</div>
