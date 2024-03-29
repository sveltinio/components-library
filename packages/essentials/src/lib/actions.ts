import type { Action } from 'svelte/action';

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

export interface ActiveActionOptions {
	enabled: boolean;
	className: string;
}

export const activeAction: Action<HTMLElement, ActiveActionOptions> = (
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

function isActive(href: string): boolean {
	const { hash, pathname, search } = new URL(location.href);
	const path = pathname + search + hash;
	return path.includes(href);
}

function addActiveClass(node: HTMLElement, className: string): void {
	const parentElement = node.parentElement;
	if (isActive(node.getAttribute('href') || '')) {
		parentElement?.classList.add(className);
	} else {
		parentElement?.classList.remove(className);
	}
}
