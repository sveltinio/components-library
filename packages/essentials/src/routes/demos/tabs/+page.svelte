<script lang="ts">
	import { Tabs, Tab } from '$lib';
	import DummyIcon from '../_dummyIcon.svelte';
</script>

<Tabs>
	<Tab id="1" title="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
	<Tab id="2" title="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
	<Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</Tabs>

<Tabs activeTab="3" type="bordered">
	<Tab id="3" title="Tab 3" icon={DummyIcon}>Sample content for <strong>Tab 3</strong></Tab>
	<Tab id="4" title="Tab 4" icon={DummyIcon}>Sample content for <strong>Tab 4</strong></Tab>
	<Tab id="5" title="Tab 5" icon={DummyIcon}>Sample content for <strong>Tab 5</strong></Tab>
</Tabs>
