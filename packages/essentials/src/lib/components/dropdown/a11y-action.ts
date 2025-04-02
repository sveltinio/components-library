import type { Action } from 'svelte/action';
import type { DropdownContext } from './Dropdown.d.ts';
import { tick } from 'svelte';
import { getComponentId, isChar } from '$lib/utils';
import { isBool } from '@sveltinio/ts-utils/is';
import { ComponentFocusManager } from '@sveltinio/ts-utils/a11y';

interface A11yActionOptions {
	enabled: boolean;
	isOpen?: boolean;
	ctx?: DropdownContext;
}

const a11yAction: Action<HTMLElement, A11yActionOptions> = (node, options) => {
	const { isOpen, ctx } = options || {};

	let open = isOpen;
	const keepOpen = ctx?.keepOpen;

	const componentId = getComponentId(node);
	const focusManager = new ComponentFocusManager(componentId);
	const _listGroups: Record<string, HTMLElement[]> = {};
	const _firstChars: Record<string, string[]> = {};
	const _firstItem: Record<string, HTMLElement | null> = {};
	const _lastItem: Record<string, HTMLElement | null> = {};

	function initialize(cId: string) {
		_listGroups[cId] = [];
		_firstChars[componentId] = [];
		_firstItem[componentId] = null;
		_lastItem[componentId] = null;
	}

	const toggleExpand = () => {
		open = !open;
		ctx?.setIsOpen(open);
		open
			? dropdownBtn.setAttribute('aria-expanded', 'true')
			: dropdownBtn.setAttribute('aria-expanded', 'false');
	};

	const openMenu = () => {
		ctx?.setIsOpen(true);
		dropdownBtn.setAttribute('aria-expanded', 'true');
		node.focus();
	};

	const closeMenu = () => {
		ctx?.setIsOpen(false);
		dropdownBtn.removeAttribute('aria-expanded');
		node.focus();
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
			case 'Down':
			case 'ArrowDown':
				openMenu();
				focusManager.setFocusToFirstItem();
				break;
			case 'Up':
			case 'ArrowUp':
				openMenu();
				focusManager.setFocusToLastItem();
				break;
			case 'Tab':
				node.blur();
				break;
			default:
				break;
		}
	};

	const onItemClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();

		const isLinkElement = () => {
			const target = e.target as HTMLElement;
			return target.tagName === 'A';
		};

		if (isBool(keepOpen) && !keepOpen && isLinkElement()) {
			closeMenu();
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
					target.click();
					break;
				case 'Esc':
				case 'Escape':
					closeMenu();
					dropdownBtn.focus();
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
			}
		}
	};

	const onItemMouseOver = (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		target.focus();
	};
	/** ***************** END - Event Handlers ******************************************** */

	initialize(componentId);

	const dropdownBtn = node.querySelector('button') as HTMLElement;
	if (options?.enabled) node.addEventListener('click', onButtonClick);
	if (options?.enabled) node.addEventListener('keydown', onButtonKeydown);

	const menuItemNodes = Array.from(node.querySelectorAll('[role="menuitem"]')) as HTMLLinkElement[];

	menuItemNodes.forEach((item) => {
		item.addEventListener('keydown', onItemKeydown);
		item.addEventListener('mouseover', onItemMouseOver);
		item.addEventListener('click', onItemClick);
		_listGroups[componentId].push(item);

		// get the first letter of the item
		const itemContent = item.textContent?.trim().toLowerCase()[0];
		if (itemContent) _firstChars[componentId].push(itemContent);

		if (!_firstItem[componentId]) {
			_firstItem[componentId] = item;
		}
		_lastItem[componentId] = item;
	});

	focusManager.applyDOMChangesFn = tick;
	focusManager.items = _listGroups;
	focusManager.firstChars = _firstChars;
	focusManager.firstItem = _firstItem;
	focusManager.lastItem = _lastItem;

	return {
		update(param) {
			if (param.enabled) node.addEventListener('click', onButtonClick);
			if (param.enabled) node.addEventListener('keydown', onButtonKeydown);
		},
		destroy: () => {
			node.removeEventListener('click', onButtonClick);
			node.removeEventListener('keydown', onButtonKeydown);

			menuItemNodes.forEach((item) => {
				item.removeEventListener('keydown', onItemKeydown);
				item.removeEventListener('mouseover', onItemMouseOver);
				item.removeEventListener('click', onItemClick);
			});
		}
	};
};

export { a11yAction as a11y };
