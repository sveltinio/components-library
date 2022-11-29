<script lang="ts">
	import './btn-styles.css';
	import { createEventDispatcher } from 'svelte';
	import { stylesObjToCSSVars } from '$lib/utils';

	export let label = 'Button Text';
	export let altText = '';
	export let type = 'default';
	export let size = 'base';
	export let border = 'solid';
	export let outlined = false;
	export let rounded = false;
	export let circular = false;
	export let fullSize = false;
	export let withFocusRing = false;

	export let href = '';
	export let prefetch = false;
	export let external = false;
	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		dispatch('click', { eventDetails: e });
	};

	$: outlinedClass = outlined
		? `btn-outlined btn-outlined-${type} btn-outlined-${type}-text btn-outlined-${type}-bg`
		: `btn-${type} btn-${type}-text btn-${type}-bg`;
	$: fullSizeClass = fullSize ? `btn-full` : '';
	$: focusClass = withFocusRing ? `btn-focus btn-${type}-focus` : '';
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
		class="btn btn-{size} btn-border-{border} {outlinedClass} {focusClass} {fullSizeClass}"
		class:btn-rounded={rounded}
		class:btn-circular={circular}
		style={cssStyles}
		{...$$restProps}><slot>{label}</slot></a
	>
{:else}
	<button
		aria-label={_altText}
		data-testid="btn"
		class="btn btn-{size} btn-border-{border} {outlinedClass} {focusClass} {fullSizeClass}"
		class:btn-rounded={rounded}
		class:btn-circular={circular}
		style={cssStyles}
		{...$$restProps}
		on:click={clickDispatcher}
	>
		{#if $$slots.leftIcon}
			<span style="margin-right: 0.3rem;">
				<slot name="leftIcon" />
			</span>
		{/if}
		<slot>
			{label}
		</slot>
		{#if $$slots.rightIcon}
			<span style="margin-left: 0.3rem;">
				<slot name="rightIcon" />
			</span>
		{/if}
	</button>
{/if}
