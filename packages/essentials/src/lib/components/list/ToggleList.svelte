<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/list/variables.css';
	import '../../styles/components/list/styles.css';
	import { onMount, tick } from 'svelte';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils';
	import type { ListItem } from './types';

	import ToggleButton from './ToggleButton.svelte';
	import List from './List.svelte';

	export let title: string;
	export let items: Array<ListItem>;
	export let full = false;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let isOpen = false;
	const toggleExpand = () => (isOpen = !isOpen);

	let mainElem: HTMLElement;
	let toggleBtn: HTMLElement;
	let listItems: Array<HTMLLIElement> = [];
	let menuItemNodes: Array<HTMLLinkElement> = [];
	let firstMenuItem: HTMLLinkElement;
	let lastMenuItem: HTMLLinkElement;

	/** ********************************************** **/
	/** Accessibility: Mouse and Keyboard interactions **/
	/** ********************************************** **/
	const openMenu = () => (isOpen = true);
	const closeMenu = () => (isOpen = false);

	const addCSSClass = (item: HTMLElement, className: string) => item.classList.add(className);

	const removeCSSClass = (item: HTMLElement, className: string) =>
		item.classList.remove(className);

	const restoreDefaultListItemsClasses = () => {
		listItems.forEach((li) => removeCSSClass(li, 'focus'));
	};

	const setFocusOnItem = (item: HTMLElement) => {
		menuItemNodes.forEach(async (itemNode) => {
			if (itemNode === item) {
				itemNode.tabIndex = 0;
				await tick();
				const parentElement = itemNode.parentElement;
				if (parentElement) addCSSClass(parentElement, 'focus');

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
		restoreDefaultListItemsClasses();

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
		restoreDefaultListItemsClasses();

		if (currentMenuItem === lastMenuItem) {
			newMenuitem = lastMenuItem;
		} else {
			index = menuItemNodes.indexOf(currentMenuItem);
			newMenuitem = menuItemNodes[index + 1];
		}

		setFocusOnItem(newMenuitem);
		return newMenuitem;
	};

	/** Event handlers **/
	function onButtonClick(e: MouseEvent): void {
		e.stopPropagation();
		e.preventDefault();
		toggleExpand();
	}

	function onButtonKeydown(e: KeyboardEvent): void {
		e.stopPropagation();
		e.preventDefault();
		switch (e.code) {
			case 'Space':
			case 'Enter':
				toggleExpand();
				if (isOpen) setFocusOnFirstItem();
				break;
			case 'Esc':
			case 'Escape':
				toggleExpand();
				if (!isOpen) toggleBtn.focus();
				break;
			case 'Tab':
				if (isOpen) closeMenu();
				toggleBtn.blur();
		}
	}

	function onMenuItemKeydown(e: KeyboardEvent): void {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget as HTMLLinkElement;

		switch (e.code) {
			case 'Space':
			case 'Enter':
				if (isOpen) {
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
	}
	/** ********************************************** **/

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', [
		'sn-e-colors',
		'sn-e-c-togglelist-vars',
		'sn-e-c-togglelist'
	])
		? (className = $$props.class)
		: (className = '');

	/** ********************************************** **/

	onMount(() => {
		toggleBtn = mainElem.querySelector('button') as HTMLButtonElement;
		if (toggleBtn) {
			toggleBtn.addEventListener('click', onButtonClick);
			toggleBtn.addEventListener('keydown', onButtonKeydown);
		}

		Array.from(document.querySelectorAll('li.list__item')).forEach((li) => {
			listItems.push(li as HTMLLIElement);
		});

		const nodes = document.querySelectorAll('[role="menuitem"');
		Array.from(nodes).forEach((node) => {
			const menuitem = node as HTMLLinkElement;
			menuItemNodes.push(menuitem);

			menuitem.tabIndex = -1;
			menuitem.addEventListener('keydown', onMenuItemKeydown);

			if (!firstMenuItem) {
				firstMenuItem = menuitem;
			}
			lastMenuItem = menuitem;
		});
	});
</script>

<div
	bind:this={mainElem}
	class="sn-e-colors sn-e-c-togglelist-vars sn-e-c-togglelist {className}"
	style={cssStyles}
	data-testid="list_wrapper"
>
	<ToggleButton bind:isOpen {title} {full}>
		<slot name="leftSideIcon" slot="leftSideIcon" />
		<slot name="rightSideIcon" slot="rightSideIcon">
			<svg
				data-testid="right_side_icon"
				xmlns="http://www.w3.org/2000/svg"
				width="20px"
				height="20px"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				color="currentColor"
				><path
					d="M9 6l6 6-6 6"
					stroke="#000000"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		</slot>
	</ToggleButton>

	<List bind:isOpen {items} />
</div>
