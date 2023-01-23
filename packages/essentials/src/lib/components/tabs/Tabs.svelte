<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/tabs/variables.css';
	import '../../styles/components/tabs/styles.css';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';
	import type { TabItem, TabsContext } from './types.js';

	export let activeTab = '1';
	export let size = 'base';
	export let justify = 'start';
	export let bordered = false;

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

	let mainElem: HTMLElement;
	let tabsList: Array<HTMLElement> = [];
	let firstTab: HTMLElement;
	let lastTab: HTMLElement;

	/** ********************************************** **/
	/** Accessibility: Mouse and Keyborad interactions **/
	/** ********************************************** **/
	const setActiveTab = (tab: HTMLElement) => {
		const index = tabsList.indexOf(tab) + 1;

		ctx.setActiveTab(String(index));
		activeTab = String(index);
	};

	const setFocusOnTab = (tab: HTMLElement) => {
		tab.focus();
	};

	const setFocusOnPreviousTab = (currentTab: HTMLElement) => {
		if (currentTab === firstTab) {
			setFocusOnTab(lastTab);
		} else {
			const index = tabsList.indexOf(currentTab);
			setFocusOnTab(tabsList[index - 1]);
		}
	};

	const setFocusOnNextTab = (currentTab: HTMLElement) => {
		if (currentTab === lastTab) {
			setFocusOnTab(firstTab);
		} else {
			const index = tabsList.indexOf(currentTab);
			setFocusOnTab(tabsList[index + 1]);
		}
	};

	/** Event handlers **/
	function onTabClick(e: MouseEvent): void {
		e.stopPropagation();
		e.preventDefault();
		const currentTab = e.target as HTMLElement;
		const currentTabId = currentTab.getAttribute('id') || activeTab;
		ctx.setActiveTab(currentTabId);
		activeTab = currentTabId;
	}

	function onTabKeydown(e: KeyboardEvent): void {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLButtonElement;

		switch (e.code) {
			case 'Enter':
			case 'Space':
				setActiveTab(target);
				break;
			case 'Esc':
			case 'Escape':
				target.blur();
				break;
			case 'Left':
			case 'ArrowLeft':
				setFocusOnPreviousTab(target);
				break;
			case 'Tab':
			case 'Right':
			case 'ArrowRight':
				setFocusOnNextTab(target);
				break;
			case 'Home':
			case 'PageUp':
				break;
			case 'End':
			case 'PageDown':
				break;
		}
	}
	/** ********************************************** **/

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', ['sn-e-colors', 'sn-e-c-tabs-vars', 'sn-e-c-tabs'])
		? (className = $$props.class)
		: (className = '');
	$: activeTab = $activeTabStore;
	$: activeClass = (id: string): boolean => activeTab == id;

	/** ********************************************** **/

	onMount(() => {
		const tabNodes = mainElem.querySelectorAll('[role="tab"]');

		Array.from(tabNodes).forEach((node) => {
			const tab = node as HTMLElement;
			tabsList.push(tab);

			tab.addEventListener('keydown', onTabKeydown);
			tab.addEventListener('click', onTabClick);

			if (!firstTab) {
				firstTab = tab;
			}
			lastTab = tab;
		});
	});
</script>

<div class="sn-e-colors sn-e-c-tabs-vars sn-e-c-tabs {className}" style={cssStyles}>
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
