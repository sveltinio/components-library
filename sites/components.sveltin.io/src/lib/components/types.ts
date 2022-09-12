import type { Writable } from 'svelte/store';

export type TabItem = {
	id: string;
	title: string;
	icon: any;
};

export interface TabsContext {
	activeTab: Writable<string>;
	setActiveTab: (value: string) => void;
	registerTab(id: string, title: string, icon: any): void;
	unregisterTab(id: string): void;
}
