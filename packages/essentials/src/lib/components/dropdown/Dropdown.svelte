<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/dropdown/variables.css';
	import '../../styles/components/dropdown/styles.css';
	import type { DropdownContext } from './types.js';
	import { onMount, tick, setContext } from 'svelte';
	import { writable, get } from 'svelte/store';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { clickOutside } from './actions.js';
	import { retrieveCssClassNames } from '$lib/utils';

	export let isOpen = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const initialState = writable(isOpen);
	const ctx: DropdownContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};
	setContext('SNE_Dropdown', ctx);

	let mainElem: HTMLElement;
	let menuBtn: HTMLButtonElement;
	let menuItemNodes: Array<HTMLLinkElement> = [];
	let firstMenuItem: HTMLLinkElement;
	let lastMenuItem: HTMLLinkElement;
	let firstChars: Array<string> = [];

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-dropdown-vars', 'sn-e-c-dropdown'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	/** ********************************************** **/
	/** Accessibility: Mouse and Keyboard interactions **/
	/** ********************************************** **/
	const openMenu = () => {
		ctx.setValue(true);
		menuBtn.setAttribute('aria-expanded', 'true');
		menuBtn.firstElementChild?.classList.remove('rotate0');
		menuBtn.firstElementChild?.classList.add('rotate180');
	};

	const closeMenu = () => {
		ctx.setValue(false);
		menuBtn.removeAttribute('aria-expanded');
		menuBtn.firstElementChild?.classList.remove('rotate180');
		menuBtn.firstElementChild?.classList.add('rotate0');
		menuBtn.focus();
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

	const setFocusOnFirstItem = () => setFocusOnItem(firstMenuItem);

	const setFocusOnLastItem = () => setFocusOnItem(lastMenuItem);

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

	/** Event handlers **/
	function onButtonClick(e: MouseEvent): void {
		e.stopPropagation();
		e.preventDefault();
		ctx.setValue(!isOpen);
		isOpen = get(ctx.value);
		isOpen ? openMenu() : closeMenu();
	}

	function onButtonKeydown(e: KeyboardEvent): void {
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
				menuBtn.blur();
				break;
			default:
				break;
		}
	}

	function onMenuItemKeydown(e: KeyboardEvent): void {
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
	}

	function onMenuItemMouseOver(e: MouseEvent) {
		(e.currentTarget as HTMLHtmlElement).focus();
	}
	/** ********************************************** **/

	onMount(() => {
		menuBtn = mainElem.querySelector('button') as HTMLButtonElement;
		if (menuBtn) {
			menuBtn.addEventListener('click', onButtonClick);
			menuBtn.addEventListener('keydown', onButtonKeydown);
		}

		const nodes = mainElem.querySelectorAll('[role="menuitem"');
		Array.from(nodes).forEach((node) => {
			const menuitem = node as HTMLLinkElement;

			menuItemNodes.push(menuitem);
			menuitem.tabIndex = -1;

			if (menuitem.textContent) firstChars.push(menuitem.textContent.trim()[0].toLowerCase());

			menuitem.addEventListener('keydown', onMenuItemKeydown);
			menuitem.addEventListener('mouseover', onMenuItemMouseOver);

			if (!firstMenuItem) {
				firstMenuItem = menuitem;
			}
			lastMenuItem = menuitem;
		});
	});
</script>

<div
	bind:this={mainElem}
	class="sn-e-colors sn-e-c-dropdown-vars sn-e-c-dropdown {cssClasses}"
	style={cssStyles.value}
	use:clickOutside={() => {
		ctx.setValue(false);
		isOpen = false;
	}}
>
	<slot {isOpen} />
</div>
