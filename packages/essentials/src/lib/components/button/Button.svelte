<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/button/variables.css';
	import '../../styles/components/button/styles.css';
	import { createEventDispatcher } from 'svelte';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';

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

	let htmlElem: HTMLElement;

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-btn-vars', 'sn-e-c-btn'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	const dispatch = createEventDispatcher();
	function clickDispatcher(e: MouseEvent) {
		dispatch('click', { eventDetails: e });
	}

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
</script>

{#if href != '' && !disabled}
	<a
		tabindex="0"
		role="button"
		title={_alt}
		bind:this={htmlElem}
		on:click
		on:keydown={keydownHandler}
		{href}
		target={external ? '_blank' : '_self'}
		data-sveltekit-preload-data={prefetch ? 'hover' : ''}
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass} {cssClasses}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		style={cssStyles.value}
		aria-label={_alt}
		data-testid="btn"
		{...$$restProps}
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
		class="sn-e-colors sn-e-c-btn-vars sn-e-c-btn btn--{size} btn--border-{border} {outlinedClass} {focusClass} {cssClasses}"
		class:btn--full={fullSize}
		class:btn--rounded={rounded}
		class:btn--circle={circle}
		{disabled}
		style={cssStyles.isOk() ? cssStyles.value : ''}
		aria-label={_alt}
		aria-disabled={_ariaDisabled}
		data-testid="btn"
		{...$$restProps}
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
