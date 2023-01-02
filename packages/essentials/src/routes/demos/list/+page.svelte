<script lang="ts">
	import { ToggleList } from '$lib/index.js';
	import { page } from '$app/stores';
	//Icons
	import { LongArrowDownRightIcon, CloudUploadIcon, BellIcon } from '@indaco/svelte-iconoir';
	// sample data
	const contentForToggleList = [
		{ label: 'First', url: '#first' },
		{ label: 'Second', url: '#second' }
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

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>
	<h2><tt>Tabs</tt></h2>
</section>

<section>
	<div class="demo-container">
		<h3>Default</h3>
		<ToggleList bind:route={$page} title="My Toggle List" items={contentForToggleList} />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Left Side icon</h3>
		<ToggleList title="My Toggle List" items={contentForToggleList}>
			<BellIcon size="20" slot="leftSideIcon" />
		</ToggleList>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Full Size</h3>
		<ToggleList title="My Toggle List" items={contentForToggleList} full />
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Custom Icon on the right side</h3>
		<ToggleList title="My Toggle List" items={contentForToggleList}>
			<LongArrowDownRightIcon slot="rightSideIcon" />
		</ToggleList>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with props</h3>
		<ToggleList title="My Toggle List" items={contentForToggleList} styles={myOwnStyles} full>
			<LongArrowDownRightIcon slot="rightSideIcon" />
		</ToggleList>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with CSS class</h3>
		<ToggleList title="My Toggle List" items={contentForToggleList} class="my-togglelist" />
	</div>
</section>
