<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import { contentForToggleList } from '../../src/data/sample.js';
	import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/long-arrow-down-right';
	import { LongArrowRightUpIcon } from '@indaco/svelte-iconoir/long-arrow-right-up';

	export let Component: ComponentType<SvelteComponent>;
</script>

<svelte:component this={Component} items={contentForToggleList}>
	<LongArrowDownRightIcon slot="whenClosedIcon" />
	<LongArrowRightUpIcon slot="whenOpenIcon" />
</svelte:component>
