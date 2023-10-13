import type { SvelteHTMLElements } from 'svelte/elements';
import type { Writable } from 'svelte/store';

export type ButtonGroupSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';
export type ButtonGroupShape = 'rounded' | 'pill' | 'flat';

export type ButtonGroupItemType = {
	id: string;
	icon: any;
};

type ButtonGroupRestProps = SvelteHTMLElements['button'];

interface ButtonGroupButtonPropsInternal extends ButtonGroupRestProps {
	id: string;
	label: string;
	icon?: any;
	position?: string;
}

export type ButtonGroupButtonProps = ButtonGroupButtonPropsInternal & ButtonGroupRestProps;

export interface ButtonGroupContext {
	activeButton: Writable<string>;
	setActiveButton: (value: string) => void;
	size: Writable<ButtonGroupSize>;
	setSize: (value: ButtonGroupSize) => void;
	shape: Writable<ButtonGroupShape>;
	setShape: (value: ButtonGroupShape) => void;
	registerButton(id: string, icon: any): void;
	unregisterButton(id: string): void;
}
