<script lang="ts">
	import { ToggleList } from '$lib/index.js';
	import { page } from '$app/stores';
	//Icons
	import { LongArrowDownRightIcon } from '@indaco/svelte-iconoir/long-arrow-down-right';
	import { BellIcon } from '@indaco/svelte-iconoir/bell';
	import { MovieIcon } from '@indaco/svelte-iconoir/movie';
	import { MusicNoteIcon } from '@indaco/svelte-iconoir/music-note';

	// sample data
	const contentForToggleList = [
		{ label: 'First', url: 'http://127.0.0.1:3001/demos/list' },
		{ label: 'Second', url: 'https://sveltin.io' },
		{ label: 'Third', url: 'https://google.com' }
	];

	const contentForToggleListWithIcons = [
		{ label: 'Home', url: 'https://sveltin.io', icon: MovieIcon },
		{ label: 'Components', url: 'https://component.sveltin.io', icon: MusicNoteIcon }
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

	$: route = $page.url;
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>ToggleList</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="buttongroup-variants-wrapper" class="demo-wrapper">
		<h3 id="buttongroup-variants">Variants</h3>
		<h4>Default: Dot Indicator</h4>
		<div class="preview">
			<ToggleList bind:route title="Introduction" items={contentForToggleList} />
		</div>

		<h4>Square Indicator</h4>
		<div class="preview">
			<ToggleList bind:route title="Links" items={contentForToggleList} indicator="square" />
		</div>

		<h4>Line Indicator</h4>
		<div class="preview">
			<ToggleList bind:route title="Socials" items={contentForToggleList} indicator="line" />
		</div>
	</div>

	<div class="demo-wrapper">
		<h3 id="left-side-icon">Left Side icon</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList}>
				<BellIcon size="base" slot="leftIcon" />
			</ToggleList>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Right side Icon</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList}>
				<LongArrowDownRightIcon slot="rightIcon" />
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
				<LongArrowDownRightIcon slot="rightIcon" />
			</ToggleList>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3 id="custom-class">Custom Styles with CSS class</h3>
		<div class="preview">
			<ToggleList title="My Toggle List" items={contentForToggleList} class="my-togglelist" />
		</div>
	</div>
</section>
