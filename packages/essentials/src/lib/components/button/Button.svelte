<script lang="ts">
	import './styles.css';
	import { createEventDispatcher } from 'svelte';
	import { stylesObjToCSSVars } from '$lib/utils';

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

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		dispatch('click', { eventDetails: e });
	};

	$: outlinedClass = outlined ? `btn_outlined btn_${type}_outlined` : `btn_${type}`;
	$: focusClass = withFocusRing ? `btn_focus btn_${type}_focus` : '';
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
		class="sw__btn sw__btn__main btn btn_{size} btn_border_{border} {outlinedClass} {focusClass}"
		class:btn_full={fullSize}
		class:btn_rounded={rounded}
		class:btn_circle={circle}
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
		class="sw__btn sw__btn__main btn btn_{size} btn_border_{border} {outlinedClass} {focusClass} {className}"
		class:btn_full={fullSize}
		class:btn_rounded={rounded}
		class:btn_circle={circle}
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
