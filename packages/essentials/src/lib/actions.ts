import type { Action } from 'svelte/action';
import { copyText } from './utils';

export interface ClickOutsideActionConfig {
	enabled: boolean;
	cb?: (node: HTMLElement) => void;
}

export const clickOutsideAction: Action<HTMLElement, ClickOutsideActionConfig> = (node, config) => {
	function eventHandler(event: MouseEvent) {
		const target = event.target as Node;
		if (node && !node.contains(target) && !event.defaultPrevented) {
			if (config?.cb) config.cb(node);
		}
	}

	if (config?.enabled) window.addEventListener('click', eventHandler);

	return {
		update(param) {
			if (param.enabled) window.addEventListener('click', eventHandler);
		},
		destroy() {
			window.removeEventListener('click', eventHandler);
		}
	};
};

export interface ActiveActionConfig {
	enabled: boolean;
	className: string;
}

export const activeAction: Action<HTMLElement, ActiveActionConfig> = (
	node,
	options = { enabled: true, className: 'is-active' }
) => {
	addActiveClass(node, options.className);

	return {
		update: (params) => {
			if (params.enabled) addActiveClass(node, params.className);
		},
		destroy: () => node.classList.remove(options.className)
	};
};

function isCurrentURL(href: string): boolean {
	/*
	const { hash, pathname, search } = new URL(location.href);
	const path = pathname + search + hash;
	return path.includes(href);
	*/
	return href === location.href;
}

function addActiveClass(node: HTMLElement, className: string): void {
	if (isCurrentURL(node.getAttribute('href') || '')) {
		node?.classList.add(className);
	} else {
		node?.classList.remove(className);
	}
}

export interface CopyToClipboardConfig {
	enabled: boolean;
}

const copyToClipboardAction: Action<HTMLElement, CopyToClipboardConfig> = (
	node: HTMLElement,
	options
) => {
	const text = node.innerText ? node.innerText : node.querySelector('span.sr-only')?.innerHTML;

	const handleClick = async () => {
		if (text) {
			try {
				await copyText(text);
			} catch (e) {
				throw new Error(e);
			}
		}
	};

	if (options.enabled) node.addEventListener('click', handleClick);

	return {
		destroy() {
			if (options.enabled) node.removeEventListener('click', handleClick, true);
		}
	};
};

export { copyToClipboardAction as copy };
