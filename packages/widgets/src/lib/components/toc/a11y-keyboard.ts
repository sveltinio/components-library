import { tick } from 'svelte';
import type { Action } from 'svelte/action';
import type { TocContext } from './types';
import { isChar } from '$lib/utils.js';

export type A11yKeyboardActionOptions = {
	enabled: boolean;
	isOpen: boolean;
	prefixChar: string;
	ctx: TocContext;
};

export const a11yKeyboardAction: Action<HTMLElement, A11yKeyboardActionOptions> = (
	node,
	options
) => {
	const { isOpen, prefixChar, ctx } = options || { isOpen: false, prefixChar: '#' };
	let open = isOpen;
	let firstTOCItem: HTMLLinkElement;
	let lastTOCItem: HTMLLinkElement;

	const tocItemNodes: Array<HTMLLinkElement> = [];

	const firstChars: Array<string> = [];

	const openTOC = () => {
		open = true;
		ctx?.setValue(open);
	};

	const closeTOC = () => {
		open = false;
		ctx?.setValue(open);
	};

	const toggleOpen = () => {
		open = !open;
		ctx?.setValue(open);
	};

	const setFocusOnItem = (item: HTMLElement) => {
		tocItemNodes.forEach(async (itemNode) => {
			if (itemNode === item) {
				itemNode.tabIndex = 0;
				await tick();
				itemNode.focus();
			} else {
				itemNode.tabIndex = -1;
			}
		});
	};

	const setFocusOnFirstItem = () => setFocusOnItem(firstTOCItem);

	const setFocusOnLastItem = () => setFocusOnItem(lastTOCItem);

	const setFocusOnPreviousItem = (currentTOCItem: HTMLLinkElement) => {
		let newTOCItem, index;

		if (currentTOCItem === firstTOCItem) {
			newTOCItem = firstTOCItem;
		} else {
			index = tocItemNodes.indexOf(currentTOCItem);
			newTOCItem = tocItemNodes[index - 1];
		}

		setFocusOnItem(newTOCItem);
		return newTOCItem;
	};

	const setFocusOnNextItem = (currentTOCItem: HTMLLinkElement) => {
		let newTOCItem, index;

		if (currentTOCItem === lastTOCItem) {
			newTOCItem = lastTOCItem;
		} else {
			index = tocItemNodes.indexOf(currentTOCItem);
			newTOCItem = tocItemNodes[index + 1];
		}

		setFocusOnItem(newTOCItem);
		return newTOCItem;
	};

	const setFocusByFirstChar = (currentMenuItem: HTMLLinkElement, c: string) => {
		let start, index: number;

		if (c.length > 1) return;
		// Ensure matching the firstChars array when OnMount
		c = c.toLowerCase();
		// Start on position of currentItem
		start = tocItemNodes.indexOf(currentMenuItem) + 1;
		if (start >= tocItemNodes.length) start = 0;
		// Check remaining items
		index = firstChars.indexOf(c, start);
		// If not in remaining, check from beginning
		if (index === -1) {
			index = firstChars.indexOf(c, 0);
		}
		// Found
		if (index > -1) {
			setFocusOnItem(tocItemNodes[index]);
		}
	};

	/** Event handlers **/
	const onButtonClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		toggleOpen();
	};

	const onButtonKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.code) {
			case 'Space':
			case 'Enter':
			case 'Down':
			case 'ArrowDown':
				openTOC();
				setFocusOnFirstItem();
				break;
			case 'Up':
			case 'ArrowUp':
				openTOC();
				setFocusOnLastItem();
				break;
			case 'Tab':
				tocBtn.blur();
				break;
			default:
				break;
		}
	};

	const onTOCItemKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLLinkElement;

		if (e.shiftKey) {
			if (isChar(e.key)) {
				setFocusByFirstChar(target, e.key);
			}
		} else {
			switch (e.code) {
				case 'Space':
				case 'Enter':
					target.click();
					break;
				case 'Esc':
				case 'Escape':
					closeTOC();
					tocBtn.focus();
					break;
				case 'Up':
				case 'ArrowUp':
					setFocusOnPreviousItem(target);
					break;
				case 'Down':
				case 'ArrowDown':
					setFocusOnNextItem(target);
					break;
				case 'Home':
				case 'PageUp':
					setFocusOnFirstItem();
					break;
				case 'End':
				case 'PageDown':
					setFocusOnLastItem();
					break;
				default:
					if (isChar(e.key)) {
						setFocusByFirstChar(target, e.key);
					}
					break;
			}
		}
	};

	const onTOCItemMouseOver = (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		target.focus();
	};

	const tocBtn = node.querySelector('button') as HTMLButtonElement;
	if (tocBtn) {
		tocBtn.addEventListener('click', onButtonClick);
		tocBtn.addEventListener('keydown', onButtonKeydown);
	}

	const itemNodes = Array.from(node.querySelectorAll('[role="menuitem"')) as HTMLLinkElement[];

	itemNodes.forEach((item) => {
		tocItemNodes.push(item);
		item.tabIndex = -1;

		// get just the content without the prefix char
		const tocItemContent = item.textContent?.split(prefixChar)[1];
		if (tocItemContent) firstChars.push(tocItemContent.trim()[0].toLowerCase());

		item.addEventListener('keydown', onTOCItemKeydown);
		item.addEventListener('mouseover', onTOCItemMouseOver);

		if (!firstTOCItem) firstTOCItem = item;

		lastTOCItem = item;
	});

	return {
		update(params) {
			if (params.enabled) {
				//
			}
		},
		destroy() {
			itemNodes.forEach((item) => {
				item.removeEventListener('keydown', onTOCItemKeydown);
				item.removeEventListener('mouseover', onTOCItemMouseOver);
			});
		}
	};
};
