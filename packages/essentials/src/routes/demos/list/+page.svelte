<script lang="ts">
	import { ToggleList } from '$lib/index.js';
	import { page } from '$app/stores';
	//Icons
	/*
	import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/long-arrow-down-right';
	import { BellIcon } from '@indaco/svelte-iconoir/bell';
	import { MovieIcon } from '@indaco/svelte-iconoir/movie';
	import { Music1Icon } from '@indaco/svelte-iconoir/music1';
	*/

	// sample data
	const contentForToggleList = [
		{ label: 'Home', url: 'https://sveltin.io' },
		{ label: 'Components', url: 'https://component.sveltin.io' }
	];

	/*
	const contentForToggleListWithIcons = [
		{ label: 'Home', url: 'https://sveltin.io', icon: MovieIcon },
		{ label: 'Components', url: 'https://component.sveltin.io', icon: Music1Icon }
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
	*/

	$: route = $page;
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>ToggleList</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div class="demo-wrapper">
		<h3>Default</h3>
		<div class="preview">
			<ToggleList bind:route title="My Toggle List" items={contentForToggleList} />
		</div>
	</div>

	<!-- To avoid a11y errors due to duplicated ids. Uncomment to see other examples.
	<div class="demo-wrapper">
		<h3>Left Side icon</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList}>
				<BellIcon size="20" slot="leftSideIcon" />
			</ToggleList>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Right side Icon</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList}>
				<LongArrowDownRightIcon slot="rightSideIcon" />
			</ToggleList>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Icons</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleListWithIcons} />
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Full Size</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList} full />
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with props</h3>
		<div class="preview">
			<ToggleList
				title="My Toggle List"
				items={contentForToggleList}
				styles={myOwnStyles}
				full
			>
				<LongArrowDownRightIcon slot="rightSideIcon" />
			</ToggleList>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with CSS class</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList} class="my-togglelist" />
		</div>
	</div>

	-->
</section>
