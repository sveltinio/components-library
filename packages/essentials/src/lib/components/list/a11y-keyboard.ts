import { tick } from 'svelte';
import type { Action } from 'svelte/action';
import type { ToggleListContext } from './types';

interface A11yKeyboardActionOptions {
	enabled: boolean;
	isOpen?: boolean;
	ctx?: ToggleListContext;
}

const addCssClass = (item: HTMLElement, className: string) => item.classList.add(className);

const removeCssClass = (item: HTMLElement, className: string) => item.classList.remove(className);

const resetDefaultCssClasses = (items: HTMLLIElement[]) => {
	items.forEach((item) => removeCssClass(item, 'focus'));
};

export const a11yKeyboardAction: Action<HTMLElement, A11yKeyboardActionOptions> = (
	node,
	options
) => {
	const { isOpen, ctx } = options || {};

	let open = isOpen;
	let firstMenuItem: HTMLLinkElement;
	let lastMenuItem: HTMLLinkElement;
	const listItems: HTMLLIElement[] = [];

	const toggleExpand = () => {
		open = !open;
		ctx?.setValue(open);
	};

	const openMenu = () => {
		open = true;
		ctx?.setValue(open);
	};

	const closeMenu = () => {
		open = false;
		ctx?.setValue(open);
	};

	const setFocusOnItem = (item: HTMLElement) => {
		menuItemNodes.forEach(async (itemNode) => {
			resetDefaultCssClasses(listItems);
			if (itemNode === item) {
				itemNode.tabIndex = 0;
				await tick();
				const parentElement = itemNode.parentElement;
				if (parentElement) addCssClass(parentElement, 'focus');

				itemNode.focus();
			} else {
				itemNode.tabIndex = -1;
			}
		});
	};

	const setFocusOnFirstItem = () => setFocusOnItem(firstMenuItem);

	const setFocusOnLastItem = () => setFocusOnItem(lastMenuItem);

	const setFocusOnPreviousItem = (currentMenuItem: HTMLLinkElement) => {
		let newMenuitem, index;
		resetDefaultCssClasses(listItems);

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
		resetDefaultCssClasses(listItems);

		if (currentMenuItem === lastMenuItem) {
			newMenuitem = lastMenuItem;
		} else {
			index = menuItemNodes.indexOf(currentMenuItem);
			newMenuitem = menuItemNodes[index + 1];
		}

		setFocusOnItem(newMenuitem);
		return newMenuitem;
	};

	const onButtonClick = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		toggleExpand();
	};

	const onButtonKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.code) {
			case 'Space':
			case 'Enter':
				toggleExpand();
				if (open) setFocusOnFirstItem();
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

	const onMenuItemKeydown = (e: KeyboardEvent) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLLinkElement;
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
		}
	};

	const onMenuItemMouseOver = (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		setFocusOnItem(target);
	};

	const toggleBtn = node.querySelector('button.btn') as HTMLButtonElement;
	if (options?.enabled) toggleBtn.addEventListener('click', onButtonClick);
	if (options?.enabled) toggleBtn.addEventListener('keydown', onButtonKeydown);

	const listItemsNodes = Array.from(document.querySelectorAll('li.list__item')) as HTMLLIElement[];

	listItemsNodes.forEach((liItem) => {
		listItems.push(liItem);
	});

	const menuItemNodes = Array.from(node.querySelectorAll('[role="menuitem"]')) as HTMLLinkElement[];

	menuItemNodes.forEach((menuItem) => {
		menuItem.tabIndex = -1;
		menuItem.addEventListener('keydown', onMenuItemKeydown);
		menuItem.addEventListener('mouseover', onMenuItemMouseOver);

		if (!firstMenuItem) {
			firstMenuItem = menuItem;
		}
		lastMenuItem = menuItem;
	});

	return {
		update(param) {
			if (param.enabled) toggleBtn.addEventListener('click', onButtonClick);
			if (param.enabled) toggleBtn.addEventListener('keydown', onButtonKeydown);
		},
		destroy: () => {
			toggleBtn.removeEventListener('click', onButtonClick);
			toggleBtn.removeEventListener('keydown', onButtonKeydown);

			menuItemNodes.forEach((menuItem) => {
				menuItem.removeEventListener('keydown', onMenuItemKeydown);
				menuItem.removeEventListener('mouseover', onMenuItemMouseOver);
			});
		}
	};
};
