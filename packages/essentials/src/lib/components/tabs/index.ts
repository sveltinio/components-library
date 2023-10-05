import BaseTabs from './Tabs.svelte';
import BaseTab from './Tab.svelte';

export interface TabsStatic {
	new (...args: ConstructorParameters<typeof BaseTabs>): BaseTabs;
	Tab: TabStatic;
}

export interface TabStatic {
	new (...args: ConstructorParameters<typeof BaseTab>): BaseTab;
	Tab: TabStatic;
}

const Tabs = BaseTabs as TabsStatic;
Tabs.Tab = BaseTab as TabStatic;

export default Tabs;
