import type { Writable } from 'svelte/store';

export type ButtonGroupItemType = {
	id: string;
	icon: any;
};

export interface ButtonGroupContext {
	activeButton: Writable<string>;
	setActiveButton: (value: string) => void;
	registerButton(id: string, icon: any): void;
	unregisterButton(id: string): void;
}
