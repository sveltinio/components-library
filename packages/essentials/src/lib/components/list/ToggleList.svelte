<script lang="ts">
	import './styles.postcss';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils';
	import type { ListItem } from './types';

	export let title: string;
	export let items: Array<ListItem>;
	export let full = false;

	let className = '';
	export { className as class };
	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-c-togglelist-vars', 'sn-e-c-togglelist'])) {
		console.error('@sveltinio ERROR: Invalid class name for the ToggleList component!');
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let isOpen = false;
	const toggleExpand = () => (isOpen = !isOpen);
</script>

<div
	class="sn-e-c-togglelist-vars sn-e-c-togglelist {className}"
	style={cssStyles}
	{...$$restProps}
	data-testid="list-wrapper"
>
	<button
		class="toggle__btn"
		class:toggle__btn--full={full}
		data-testid="list-toggle-btn"
		aria-expanded={isOpen}
		on:click={toggleExpand}
	>
		<span class="btn__icon">
			<slot name="leftSideIcon" />
		</span>

		{title}

		<span
			class="btn__icon"
			class:icon-to-right={full}
			class:rotate90={isOpen}
			class:rotate0={!isOpen}
		>
			<slot name="rightSideIcon"
				><svg
					data-testid="right-side-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
					height="20px"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					color="currentColor"
					><path
						d="M9 6l6 6-6 6"
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</slot>
		</span>
	</button>

	<ul class="list" class:hide={!isOpen} data-testid="items-list">
		{#each items as item, id}
			<li class="item" data-testid="list-item-{id}">
				<a class="item__link" href={item.url} data-testid="item-link-{id}">
					{#if item.icon}
						<svelte:component this={item.icon} size="20px" />
					{/if}
					{item.label}</a
				>
			</li>
		{/each}
	</ul>
</div>
