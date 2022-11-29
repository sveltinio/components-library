<script lang="ts">
	import { ToggleList } from '$lib/index.js';
	//Icons
	import {
		LongArrowDownRightIcon,
		LongArrowUpRightIcon,
		CloudUploadIcon,
		BellIcon
	} from '@indaco/svelte-iconoir';
	// sample data
	const contentForToggleList = [
		{ label: 'First', url: '#first', icon: CloudUploadIcon },
		{ label: 'Second', url: '#second', icon: BellIcon }
	];

	const myOwnStyles = {
		'btn-color': '#365314',
		'btn-color-hover': '#365314',
		'btn-bg-color': '#bef264',
		'btn-bg-color-hover': '#a3e635',
		'item-border-width': '2px',
		'item-border-style': 'dashed',
		'item-border-color': '#bef264',
		'item-border-color-hover': '#365314',
		'item-color': '#365314',
		'item-bg-color-hover': '#bef264'
	};
</script>

<h3>Default</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} />

<h3>Left Side icon</h3>
<ToggleList title="My Toggle List 3" items={contentForToggleList}>
	<BellIcon size="18" slot="leftSideIcon" />
</ToggleList>

<h3>Full Size</h3>
<ToggleList title="My Toggle List" items={contentForToggleList} full />

<h3>Custom Styles</h3>
<ToggleList title="My Toggle List 2" items={contentForToggleList} styles={myOwnStyles} full>
	<LongArrowDownRightIcon slot="whenClosedIcon" />
	<LongArrowUpRightIcon slot="whenOpenIcon" />
</ToggleList>
