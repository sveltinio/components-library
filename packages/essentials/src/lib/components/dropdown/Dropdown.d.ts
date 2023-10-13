import type { Writable } from 'svelte/store';

export type DropdownData = {
	[key: string]: any;
};

export interface DropdownContext {
	isOpen: Writable<boolean>;
	setIsOpen: (value: boolean) => void;
	keepOpen: Writable<boolean>;
	setKeepOpen: (value: boolean) => void;
}
