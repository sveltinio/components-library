import type { Writable } from 'svelte/store';

export interface DropdownContext {
	value: Writable<boolean>;
	setValue: (value: boolean) => void;
}

export interface DropdownData {
	[key: string]: any;
}
