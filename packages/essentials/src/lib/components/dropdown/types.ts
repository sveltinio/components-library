import type { Writable } from 'svelte/store';

export type DropdownData = {
	[key: string]: any;
};

export interface DropdownContext {
	value: Writable<boolean>;
	setValue: (value: boolean) => void;
}
