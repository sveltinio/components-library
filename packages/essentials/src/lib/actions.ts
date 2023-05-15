import type { Action } from 'svelte/action';

export interface ClickOutsideConfig {
	enabled: boolean;
	cb?: (node: HTMLElement) => void;
}

export const clickOutside: Action<HTMLElement, ClickOutsideConfig> = (node, config) => {
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
