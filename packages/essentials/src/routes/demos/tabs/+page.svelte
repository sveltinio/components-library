<script lang="ts">
	import { Tabs, Tab } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';
	const customStyles = {
		'tab-font-size': '1rem',
		'tab-pt': '0.875rem',
		'tab-border-t-width': '1px',
		'tab-border-t-color': 'red',
		'tab-border-t-color-hover': 'red',
		'tab-border-r-width': '1px',
		'tab-border-r-color': 'rgba(170, 50, 220, 0.6)',
		'tab-border-r-color-hover': 'rgba(170, 50, 220, 0.6)',
		'tab-border-b-width': '1px',
		'tab-border-b-color': 'green',
		'tab-border-b-color-hover': 'green',
		'tab-border-l-width': '1px',
		'tab-border-l-color': 'rgba(170, 50, 220, 0.6)',
		'tab-border-l-color-hover': 'rgba(170, 50, 220, 0.6)'
	};
</script>

<Tabs>
	<Tab id="1" title="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
	<Tab id="2" title="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
	<Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</Tabs>

<Tabs activeTab="3" bordered>
	<Tab id="3" title="Tab 3" icon={DummyIcon}>Sample content for <strong>Tab 3</strong></Tab>
	<Tab id="4" title="Tab 4" icon={DummyIcon}>Sample content for <strong>Tab 4</strong></Tab>
	<Tab id="5" title="Tab 5" icon={DummyIcon}>Sample content for <strong>Tab 5</strong></Tab>
</Tabs>

<Tabs activeTab="6" styles={customStyles}>
	<Tab id="6" title="Tab 6">Sample content for <strong>Tab 6</strong></Tab>
	<Tab id="7" title="Tab 7">Sample content for <strong>Tab 7</strong></Tab>
	<Tab id="8" title="Tab 8">Sample content for <strong>Tab 8</strong></Tab>
</Tabs>
