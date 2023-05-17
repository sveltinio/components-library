import type { Writable } from 'svelte/store';

export type TocEntry = {
	id: string;
	depth: number;
	value: string;
	children?: Array<TocEntry>;
};

export interface TocContext {
	value: Writable<boolean>;
	setValue: (value: boolean) => void;
}
