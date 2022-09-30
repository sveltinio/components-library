<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { contentForToggleList } from '../../src/data/sample.js';
	import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/icons/LongArrowDownRightIcon';
	import { LongArrowRightUpIcon } from '@indaco/svelte-iconoir/icons/LongArrowRightUpIcon';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component} items={contentForToggleList}>
	<LongArrowDownRightIcon slot="whenClosedIcon" />
	<LongArrowRightUpIcon slot="whenOpenIcon" />
</svelte:component>
