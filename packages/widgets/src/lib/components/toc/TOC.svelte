<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/toc/variables.css';
	import '../../styles/components/toc/styles.css';
	import { onMount, tick } from 'svelte';
	import type { TocEntry } from './types.js';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';
	import TocList from './TocList.svelte';
	import TocButton from './TocButton.svelte';

	export let data: Array<TocEntry>;
	export let label = 'Table of Contents';
	export let full = true;
	export let iconOnly = false;
	export let labelOnly = false;
	export let prefixChar = '#';
	export let isOpen = false;
	export let ordered = false;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const toggleOpen = () => (isOpen = !isOpen);

	let mainElem: HTMLElement;
	let tocBtn: HTMLElement;
	let tocItemNodes: Array<HTMLLinkElement> = [];
	let firstTOCItem: HTMLLinkElement;
	let lastTOCItem: HTMLLinkElement;
	let firstChars: Array<string> = [];

	/** ********************************************** **/
	/** Accessibility: Mouse and Keyboard interactions **/
	/** ********************************************** **/
	const openTOC = () => (isOpen = true);
	const closeTOC = () => (isOpen = false);

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
		if (index === -1) index = firstChars.indexOf(c, 0);
		// Found
		if (index > -1) setFocusOnItem(tocItemNodes[index]);
	};

	/** Event handlers **/
	function onButtonClick(e: MouseEvent): void {
		e.stopPropagation();
		e.preventDefault();
		toggleOpen();
	}

	function onButtonKeydown(e: KeyboardEvent): void {
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
	}

	function onTOCItemKeydown(e: KeyboardEvent): void {
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
	}

	function onTOCItemMouseOver(e: MouseEvent) {
		(e.currentTarget as HTMLHtmlElement).focus();
	}

	/** ********************************************** **/
	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', ['sn-w-colors', 'sn-w-c-toc-vars', 'sn-w-c-toc'])
		? (className = $$props.class)
		: (className = '');

	/** ********************************************** **/

	onMount(() => {
		tocBtn = mainElem.querySelector('button') as HTMLButtonElement;
		if (tocBtn) {
			tocBtn.addEventListener('click', onButtonClick);
			tocBtn.addEventListener('keydown', onButtonKeydown);
		}

		const nodes = mainElem.querySelectorAll('[role="menuitem"');

		Array.from(nodes).forEach((node) => {
			const tocItem = node as HTMLLinkElement;

			tocItemNodes.push(tocItem);
			tocItem.tabIndex = -1;

			// get just the content without the prefix char
			const tocItemContent = tocItem.textContent?.split(prefixChar)[1];
			if (tocItemContent) firstChars.push(tocItemContent.trim()[0].toLowerCase());

			tocItem.addEventListener('keydown', onTOCItemKeydown);
			tocItem.addEventListener('mouseover', onTOCItemMouseOver);

			if (!firstTOCItem) firstTOCItem = tocItem;

			lastTOCItem = tocItem;
		});
	});
</script>

<nav
	bind:this={mainElem}
	class="sn-w-colors sn-w-c-toc-vars sn-w-c-toc {className}"
	style={cssStyles}
	aria-label={label}
	data-testid="toc-main"
>
	<TocButton {label} bind:isOpen {iconOnly} {labelOnly} />
	<TocList {data} {ordered} {isOpen} {full} {prefixChar} />
</nav>
