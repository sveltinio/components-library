<script lang="ts">
	import { ToggleList } from '$lib/index.js';
	//Icons
	import LongArrowDownRightIcon from '@indaco/svelte-iconoir/icons/LongArrowDownRightIcon.svelte';
	import LongArrowRightUpIcon from '@indaco/svelte-iconoir/icons/LongArrowRightUpIcon.svelte';
	import CloudUploadIcon from '@indaco/svelte-iconoir/icons/CloudUploadIcon.svelte';
	import BellIcon from '@indaco/svelte-iconoir/icons/BellIcon.svelte';
	// sample data
	const contentForToggleList = [
		{ label: 'First', url: '#first', icon: CloudUploadIcon },
		{ label: 'Second', url: '#second', icon: BellIcon }
	];

	const myOwnStyles = {
		'title-color': '#365314',
		'title-color-hover': '#365314',
		'title-bg-color': '#bef264',
		'title-bg-color-hover': '#a3e635',
		'item-border-width': '2px',
		'item-border-style': 'dashed',
		'item-border-color': '#bef264',
		'item-border-color-hover': '#365314',
		'item-color': '#365314'
	};
</script>

<h3>Default</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} />

<h3>Custom Icons</h3>
<ToggleList title="My Toggle List 2" items={contentForToggleList} styles={myOwnStyles}>
	<LongArrowDownRightIcon slot="whenClosedIcon" />
	<LongArrowRightUpIcon slot="whenOpenIcon" />
</ToggleList>

<h3>No Icons for the Title</h3>
<ToggleList title="My Toggle List 3" items={contentForToggleList} noIcons />
