<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import LongArrowDownRightIcon from '@indaco/svelte-iconoir/icons/LongArrowDownRightIcon.svelte';
	import LongArrowRightUpIcon from '@indaco/svelte-iconoir/icons/LongArrowRightUpIcon.svelte';
	import { contentForToggleList } from '../../src/data/sample.js';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component} items={contentForToggleList}>
	<LongArrowDownRightIcon slot="whenClosedIcon" />
	<LongArrowRightUpIcon slot="whenOpenIcon" />
</svelte:component>
