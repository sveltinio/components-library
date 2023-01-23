<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/button/variables.css';
	import '../../styles/components/button/styles.css';
	import { createEventDispatcher } from 'svelte';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';

	export let label = 'Button Text';
	export let alt = '';
	export let type = 'default';
	export let size = 'base';
	export let border = 'solid';
	export let disabled = false;
	export let outlined = false;
	export let rounded = false;
	export let circle = false;
	export let fullSize = false;
	export let withFocusRing = false;
	export let href = '';
	export let prefetch = false;
	export let external = false;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const dispatch = createEventDispatcher();
	function clickDispatcher(e: MouseEvent) {
		dispatch('click', { eventDetails: e });
	}

	let htmlElem: HTMLElement;
	function keydownHandler(e: KeyboardEvent) {
		if (['Enter', 'Space'].includes(e.code)) {
			e.preventDefault();
			htmlElem.click();
		}
	}

	$: _alt = alt != '' ? alt : label;
	$: _ariaDisabled = disabled ? true : false;
	$: outlinedClass = outlined ? `btn--outlined btn--${type}-outlined` : `btn--${type}`;
	$: focusClass = withFocusRing ? `btn--focus btn--${type}-focus` : '';

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', ['sn-e-colors', 'sn-e-c-btn-vars', 'sn-e-c-btn'])
		? (className = $$props.class)
		: (className = '');
</script>

{#if href != '' && !disabled}
	<a
		tabindex="0"
		role="button"
		bind:this={htmlElem}
		on:click
		on:keydown={keydownHandler}
		{href}
		target={external ? '_blank' : '_self'}
		data-sveltekit-preload-data={prefetch ? 'hover' : ''}
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass} {className}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		style={cssStyles}
		aria-label={_alt}
		data-testid="btn"
		title={_alt}
	>
		{#if $$slots.leftIcon}
			<span class="btn__icon">
				<slot name="leftIcon" />
			</span>
		{/if}
		<slot>
			{label}
		</slot>
		{#if $$slots.rightIcon}
			<span class="btn__icon">
				<slot name="rightIcon" />
			</span>
		{/if}
	</a>
{:else}
	<button
		bind:this={htmlElem}
		on:click={clickDispatcher}
		on:keydown={keydownHandler}
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass} {className}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		{disabled}
		style={cssStyles}
		aria-label={_alt}
		aria-disabled={_ariaDisabled}
		data-testid="btn"
	>
		{#if $$slots.leftIcon}
			<span class="btn__icon">
				<slot name="leftIcon" />
			</span>
		{/if}
		<slot>
			{label}
		</slot>
		{#if $$slots.rightIcon}
			<span class="btn__icon">
				<slot name="rightIcon" />
			</span>
		{/if}
	</button>
{/if}
