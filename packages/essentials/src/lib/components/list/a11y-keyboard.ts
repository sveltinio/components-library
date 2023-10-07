import type { Action } from 'svelte/action';
import type { ToggleListContext } from './types';
import { getComponentId, isChar } from '$lib/utils.js';
import { ComponentFocusManager } from '@sveltinio/ts-utils/a11y';
import { tick } from 'svelte';

interface A11yKeyboardActionOptions {
	enabled: boolean;
	isOpen?: boolean;
	ctx?: ToggleListContext;
}

export const a11yKeyboardAction: Action<HTMLElement, A11yKeyboardActionOptions> = (
	node,
	options
) => {
	const { isOpen, ctx } = options || {};

	let open = isOpen;

	const componentId = getComponentId(node);
	const focusManager = new ComponentFocusManager(componentId);
	const _listGroups: Record<string, HTMLElement[]> = {};
	const _firstChars: Record<string, string[]> = {};
	const _firstListItem: Record<string, HTMLElement | null> = {};
	const _lastListItem: Record<string, HTMLElement | null> = {};

	function initialize(cId: string) {
		_listGroups[cId] = [];
		_firstChars[componentId] = [];
		_firstListItem[componentId] = null;
		_lastListItem[componentId] = null;
	}

	const toggleExpand = () => {
		open = !open;
		ctx?.setIsOpen(open);
		open
			? toggleBtn.setAttribute('aria-expanded', 'true')
			: toggleBtn.setAttribute('aria-expanded', 'false');
	};

	const openMenu = () => {
		open = true;
		ctx?.setIsOpen(open);
		toggleBtn.setAttribute('aria-expanded', 'true');
	};

	const closeMenu = () => {
		open = false;
		ctx?.setIsOpen(open);
		toggleBtn.setAttribute('aria-expanded', 'true');
	};

	/** ***************** START - Event Handlers ******************************************** */
	const onButtonClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		toggleExpand();
		if (open) focusManager.setFocusToFirstItem();
	};

	const onButtonKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.code) {
			case 'Space':
			case 'Enter':
				toggleExpand();
				if (open) focusManager.setFocusToFirstItem();
				break;
			case 'Esc':
			case 'Escape':
				toggleExpand();
				if (!open) toggleBtn.focus();
				break;
			case 'Tab':
				if (open) closeMenu();
				toggleBtn.blur();
		}
	};

	const onItemKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLLinkElement;

		if (e.shiftKey) {
			if (isChar(e.key)) {
				focusManager.setFocusByFirstChar(target, e.key);
			}
		} else {
			switch (e.code) {
				case 'Space':
				case 'Enter':
					if (open) {
						closeMenu();
						toggleBtn.focus();
					} else {
						openMenu();
					}
					break;
				case 'Esc':
				case 'Escape':
					closeMenu();
					toggleBtn.focus();
					break;
				case 'Up':
				case 'ArrowUp':
					focusManager.setFocusToPreviousItem(target);
					break;
				case 'Down':
				case 'ArrowDown':
					focusManager.setFocusToNextItem(target);
					break;
				case 'Home':
				case 'PageUp':
					focusManager.setFocusToFirstItem();
					break;
				case 'End':
				case 'PageDown':
					focusManager.setFocusToLastItem();
					break;
				default:
					if (isChar(e.key)) {
						focusManager.setFocusByFirstChar(target, e.key);
					}
					break;
			}
		}
	};

	const onItemMouseOver = (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		target.focus();
	};
	/** ***************** END - Event Handlers ******************************************** */

	const toggleBtn = node.querySelector('button') as HTMLElement;
	const liNodes = Array.from(node.querySelectorAll('[role="menuitem"]')) as HTMLLinkElement[];

	if (options?.enabled) {
		initialize(componentId);

		toggleBtn.addEventListener('click', onButtonClick);
		toggleBtn.addEventListener('keydown', onButtonKeydown);

		liNodes.forEach((item) => {
			item.tabIndex = -1;
			item.addEventListener('keydown', onItemKeydown);
			item.addEventListener('mouseover', onItemMouseOver);
			_listGroups[componentId].push(item);

			// get the first letter of the item
			const menuItemContent = item.textContent?.trim().toLowerCase()[0];
			if (menuItemContent) _firstChars[componentId].push(menuItemContent);

			if (!_firstListItem[componentId]) {
				_firstListItem[componentId] = item;
			}
			_lastListItem[componentId] = item;
		});

		focusManager.applyDOMChangesFn = tick;
		focusManager.items = _listGroups;
		focusManager.firstChars = _firstChars;
		focusManager.firstItem = _firstListItem;
		focusManager.lastItem = _lastListItem;
	}

	return {
		update(param) {
			if (param.enabled) {
				toggleBtn.addEventListener('click', onButtonClick);
				toggleBtn.addEventListener('keydown', onButtonKeydown);
			}
		},
		destroy: () => {
			toggleBtn.removeEventListener('click', onButtonClick);
			toggleBtn.removeEventListener('keydown', onButtonKeydown);

			liNodes.forEach((item) => {
				item.removeEventListener('keydown', onItemKeydown);
				item.removeEventListener('mouseover', onItemMouseOver);
			});
		}
	};
};
