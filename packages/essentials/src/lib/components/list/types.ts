import type { Writable } from 'svelte/store';

export type ListItem = {
	label: string;
	url: string;
	icon?: any;
	external?: boolean;
};

export type IndicatorType = 'dot' | 'square' | 'line';

export interface ToggleListContext {
	isOpen: Writable<boolean>;
	setIsOpen: (value: boolean) => void;
	indicator: Writable<IndicatorType>;
	setIndicator: (value: IndicatorType) => void;
}
