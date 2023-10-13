import type { Action } from 'svelte/action';
import type { TabsContext } from './Tabs';
import { getComponentId, isChar } from '$lib/utils.js';
import { ComponentFocusManager } from '@sveltinio/ts-utils/a11y';
import { tick } from 'svelte';

export interface A11yActionOptions {
	enabled: boolean;
	activeTab: string;
	ctx: TabsContext;
}

const a11yAction: Action<HTMLElement, A11yActionOptions> = (node, options) => {
	const { activeTab, ctx } = options || {};

	let _activeTab = activeTab;

	const componentId = getComponentId(node);
	const focusManager = new ComponentFocusManager(componentId);
	const _tabsGroups: Record<string, HTMLElement[]> = {};
	const _firstChars: Record<string, string[]> = {};
	const _firstTab: Record<string, HTMLElement | null> = {};
	const _lastTab: Record<string, HTMLElement | null> = {};

	function initialize(cId: string) {
		_tabsGroups[cId] = [];
		_firstChars[componentId] = [];
		_firstTab[componentId] = null;
		_lastTab[componentId] = null;
	}

	const setActiveTab = (tab: HTMLElement) => {
		const index = _tabsGroups[componentId].indexOf(tab) + 1;

		if (ctx) ctx.setActiveTab(String(index));
		_activeTab = String(index);
	};

	/** ***************** START - Event Handlers ******************************************** */
	const onTabClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const currentTab = e.target as HTMLElement;
		const currentTabId = currentTab.getAttribute('id') || _activeTab;

		if (ctx && currentTabId) {
			ctx.setActiveTab(currentTabId);
		}
		_activeTab = currentTabId;
	};

	const onKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLButtonElement;

		if (e.shiftKey) {
			if (isChar(e.key)) {
				focusManager.setFocusByFirstChar(target, e.key);
			}
		} else {
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
					focusManager.setFocusToPreviousItem(target);
					break;
				case 'Tab':
				case 'Right':
				case 'ArrowRight':
					focusManager.setFocusToNextItem(target);
					break;
				case 'Home':
				case 'PageUp':
					break;
				case 'End':
				case 'PageDown':
					break;
				default:
					if (isChar(e.key)) {
						focusManager.setFocusByFirstChar(target, e.key);
					}
					break;
			}
		}
	};
	/** ***************** END - Event Handlers ******************************************** */

	const tabNodes = Array.from(node.querySelectorAll('button.tab')) as HTMLButtonElement[];

	if (options?.enabled) {
		initialize(componentId);
		tabNodes.forEach((tab) => {
			console.log(tab);

			tab.addEventListener('click', onTabClick);
			tab.addEventListener('keydown', onKeydown);

			_tabsGroups[componentId].push(tab);

			// get the first letter of the item
			const tabContent = tab.textContent?.trim().toLowerCase()[0];
			if (tabContent) _firstChars[componentId].push(tabContent);

			if (!_firstTab[componentId]) {
				_firstTab[componentId] = tab;
			}
			_lastTab[componentId] = tab;
		});

		focusManager.applyDOMChangesFn = tick;
		focusManager.items = _tabsGroups;
		focusManager.firstChars = _firstChars;
		focusManager.firstItem = _firstTab;
		focusManager.lastItem = _lastTab;
	}
	return {
		update(params) {
			if (params.enabled) {
				tabNodes.forEach((tab) => {
					tab.addEventListener('click', onTabClick);
					tab.addEventListener('keydown', onKeydown);
				});
			}
		},
		destroy: () => {
			tabNodes.forEach((tab) => {
				tab.removeEventListener('click', onTabClick);
				tab.removeEventListener('keydown', onKeydown);
			});
		}
	};
};

export { a11yAction as a11y };
