<script lang="ts">
	import './styles.css';
	import { createEventDispatcher } from 'svelte';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils';

	export let label = 'Button Text';
	export let altText = '';
	export let type = 'default';
	export let size = 'base';
	export let border = 'solid';
	export let outlined = false;
	export let rounded = false;
	export let circle = false;
	export let fullSize = false;
	export let withFocusRing = false;

	export let href = '';
	export let prefetch = false;
	export let external = false;

	let className = '';
	export { className as class };

	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-colors', 'sn-e-c-btn-vars', 'sn-e-c-btn'])) {
		console.error('@sveltinio ERROR: Invalid class name for the Button component!');
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		dispatch('click', { eventDetails: e });
	};

	$: outlinedClass = outlined ? `btn--outlined btn--${type}-outlined` : `btn--${type}`;
	$: focusClass = withFocusRing ? `btn--focus btn--${type}-focus` : '';
	$: _altText = altText != '' ? altText : label;
</script>

{#if href != ''}
	<a
		{href}
		title={_altText}
		data-sveltekit-preload-data={prefetch ? 'hover' : ''}
		target={external ? '_blank' : '_self'}
		aria-label={_altText}
		data-testid="btn"
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		style={cssStyles}
		{...$$restProps}
	>
		<span class="btn__content">
			{#if $$slots.leftIcon}
				<slot name="leftIcon" />
			{/if}
			<slot>
				{label}
			</slot>
			{#if $$slots.rightIcon}
				<slot name="rightIcon" />
			{/if}
		</span>
	</a>
{:else}
	<button
		aria-label={_altText}
		data-testid="btn"
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass} {className}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		style={cssStyles}
		{...$$restProps}
		on:click={clickDispatcher}
	>
		<span class="btn__content">
			{#if $$slots.leftIcon}
				<slot name="leftIcon" />
			{/if}
			<slot>
				{label}
			</slot>
			{#if $$slots.rightIcon}
				<slot name="rightIcon" />
			{/if}
		</span>
	</button>
{/if}
