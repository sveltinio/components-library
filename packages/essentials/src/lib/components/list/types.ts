import type { Writable } from 'svelte/store';

export type ListItem = {
	label: string;
	url?: string;
	icon?: any;
	external?: boolean;
};

export interface ToggleListContext {
	value: Writable<boolean>;
	setValue: (value: boolean) => void;
}
