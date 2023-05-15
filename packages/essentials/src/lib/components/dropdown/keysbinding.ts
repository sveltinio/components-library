import type { Action } from 'svelte/action';
import type { DropdownContext } from './types';
import { get } from 'svelte/store';
import { tick } from 'svelte';

interface KeysBindingOptions {
	enabled: boolean;
	isOpen?: boolean;
	ctx?: DropdownContext;
}

export const keysBinding: Action<HTMLElement, KeysBindingOptions> = (node, options) => {
	const { ctx, isOpen } = options || {};
	let open = isOpen;

	let firstMenuItem: HTMLLinkElement;
	let lastMenuItem: HTMLLinkElement;
	const firstChars: Array<string> = [];

	const openMenu = () => {
		if (ctx) {
			ctx.setValue(true);
		}
		node.setAttribute('aria-expanded', 'true');
		node.focus();

		const menuBtn = node.getElementsByClassName('btn')[0];
		if (menuBtn) {
			menuBtn.firstElementChild?.classList.remove('rotate0');
			menuBtn.firstElementChild?.classList.add('rotate180');
		}
	};

	const closeMenu = () => {
		if (ctx) {
			ctx.setValue(false);
		}
		node.removeAttribute('aria-expanded');
		node.focus();

		const menuBtn = node.getElementsByClassName('btn')[0];
		if (menuBtn) {
			menuBtn.firstElementChild?.classList.remove('rotate180');
			menuBtn.firstElementChild?.classList.add('rotate0');
		}
	};

	const setFocusOnItem = (item: HTMLElement) => {
		menuItemNodes.forEach(async (itemNode) => {
			if (itemNode === item) {
				itemNode.tabIndex = 0;
				await tick();
				itemNode.focus();
			} else {
				itemNode.tabIndex = -1;
			}
		});
	};

	const setFocusOnFirstItem = () => {
		setFocusOnItem(firstMenuItem);
	};

	const setFocusOnLastItem = () => {
		setFocusOnItem(lastMenuItem);
	};

	const setFocusOnPreviousItem = (currentMenuItem: HTMLLinkElement) => {
		let newMenuitem, index;

		if (currentMenuItem === firstMenuItem) {
			newMenuitem = firstMenuItem;
		} else {
			index = menuItemNodes.indexOf(currentMenuItem);
			newMenuitem = menuItemNodes[index - 1];
		}

		setFocusOnItem(newMenuitem);
		return newMenuitem;
	};

	const setFocusOnNextItem = (currentMenuItem: HTMLLinkElement) => {
		let newMenuitem, index;

		if (currentMenuItem === lastMenuItem) {
			newMenuitem = lastMenuItem;
		} else {
			index = menuItemNodes.indexOf(currentMenuItem);
			newMenuitem = menuItemNodes[index + 1];
		}

		setFocusOnItem(newMenuitem);
		return newMenuitem;
	};

	const setFocusByFirstChar = (currentMenuItem: HTMLLinkElement, c: string) => {
		let start, index: number;

		if (c.length > 1) return;
		// Ensure matching the firstChars array when OnMount
		c = c.toLowerCase();
		// Start on position of currentItem
		start = menuItemNodes.indexOf(currentMenuItem) + 1;
		if (start >= menuItemNodes.length) start = 0;
		// Check remaining items
		index = firstChars.indexOf(c, start);
		// If not in remaining, check from beginning
		if (index === -1) index = firstChars.indexOf(c, 0);
		// Found
		if (index > -1) setFocusOnItem(menuItemNodes[index]);
	};

	const onButtonClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		if (ctx) {
			ctx.setValue(!open);
			open = get(ctx.value);
		}
		open ? openMenu() : closeMenu();
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
				setFocusOnFirstItem();
				break;
			case 'Up':
			case 'ArrowUp':
				openMenu();
				setFocusOnLastItem();
				break;
			case 'Tab':
				node.blur();
				break;
			default:
				break;
		}
	};

	const onMenuItemKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLLinkElement;

		const isChar = (txt: string): boolean => {
			const charsRegex = /\S/;
			return txt.length === 1 && charsRegex.test(txt);
		};

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
					closeMenu();
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
			}
		}
	};

	const onMenuItemMouseOver = (e: MouseEvent) => {
		(e.currentTarget as HTMLHtmlElement).focus();
	};

	if (options?.enabled) node.addEventListener('click', onButtonClick);
	if (options?.enabled) node.addEventListener('keydown', onButtonKeydown);

	const menuItemNodes = Array.from(node.querySelectorAll('[role="menuitem"]')) as HTMLLinkElement[];

	menuItemNodes.forEach((menuItem) => {
		menuItem.addEventListener('keydown', onMenuItemKeydown);
		menuItem.addEventListener('mouseover', onMenuItemMouseOver);

		if (!firstMenuItem) {
			firstMenuItem = menuItem;
		}
		lastMenuItem = menuItem;
	});

	return {
		update(param) {
			if (param.enabled) node.addEventListener('click', onButtonClick);
			if (param.enabled) node.addEventListener('keydown', onButtonKeydown);
		},
		destroy: () => {
			node.removeEventListener('click', onButtonClick);
			node.removeEventListener('keydown', onButtonKeydown);

			menuItemNodes.forEach((menuItem) => {
				menuItem.removeEventListener('keydown', onMenuItemKeydown);
				menuItem.removeEventListener('mouseover', onMenuItemMouseOver);
			});
		}
	};
};
