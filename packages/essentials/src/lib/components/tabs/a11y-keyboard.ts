import type { Action } from 'svelte/action';
import type { TabsContext } from './types';

export interface A11yKeyboardActionOptions {
	enabled: boolean;
	activeTab: string;
	ctx: TabsContext;
}

export const a11yKeyboardAction: Action<HTMLElement, A11yKeyboardActionOptions> = (
	node,
	options
) => {
	const { activeTab, ctx } = options || {};
	const tabsList: Array<HTMLElement> = [];

	let _activeTab = activeTab;
	let firstTab: HTMLElement;
	let lastTab: HTMLElement;

	const setActiveTab = (tab: HTMLElement) => {
		const index = tabsList.indexOf(tab) + 1;

		if (ctx) ctx.setActiveTab(String(index));
		_activeTab = String(index);
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

	/** BEGIN - Event handlers **/
	const onClick = (e: MouseEvent) => {
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
	};
	/** END - Event handlers **/

	const tabNodes = Array.from(node.querySelectorAll('[role="tab"]')) as HTMLElement[];
	tabNodes.forEach((tab) => {
		tabsList.push(tab);

		if (options?.enabled) tab.addEventListener('click', onClick);
		if (options?.enabled) tab.addEventListener('keydown', onKeydown);

		if (!firstTab) {
			firstTab = tab;
		}
		lastTab = tab;
	});

	return {
		update(params) {
			if (params.enabled) {
				tabNodes.forEach((tab) => {
					tab.addEventListener('click', onClick);
					tab.addEventListener('keydown', onKeydown);
				});
			}
		},
		destroy: () => {
			tabNodes.forEach((tab) => {
				tab.removeEventListener('click', onClick);
				tab.removeEventListener('keydown', onKeydown);
			});
		}
	};
};
