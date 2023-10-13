<script lang="ts">
	import type { ButtonProps as $$ButtonProps } from './Button.d.ts';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { makeExternalLinkOptions, prefixObjectKeys } from '$lib/utils.js';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { preserveButtonPropsList } from './index.js';

	interface $$Props extends $$ButtonProps {}

	export let label: $$Props['label'] = undefined;
	export let alt: $$Props['alt'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'base';
	export let shape: $$Props['shape'] = 'rounded';
	export let border: $$Props['border'] = 'none';
	export let disabled: $$Props['disabled'] = false;
	export let outline: $$Props['outline'] = false;
	export let block: $$Props['block'] = false;
	export let noFocusRing: $$Props['noFocusRing'] = false;
	export let href: $$Props['href'] = undefined;
	export let prefetch: $$Props['prefetch'] = 'off';
	export let external: $$Props['external'] = false;
	export let styles: $$Props['styles'] = {};
	export let className: $$Props['className'] = undefined;
	export { className as class };

	let computedStyles: typeof styles = {};

	if (!isEmpty(styles)) {
		computedStyles = prefixObjectKeys(styles, variant, preserveButtonPropsList);
	}

	const cssStyles = mapToCssVars(computedStyles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(Button): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}
	/** Error handling*/
	if (external && (typeof href !== 'string' || href.length < 1)) {
		console.error(
			'@sveltinio/essentials(Button) Cannot be external with href empty or undefined'
		);
	}

	$: _alt = alt ? alt : label ?? 'alt placeholder';
</script>

{#if href && !disabled}
	<a
		title={_alt}
		{href}
		target={external ? '_blank' : '_self'}
		rel={makeExternalLinkOptions(external || false)}
		class="link {className}"
		style={cssStyles.value}
		aria-label={_alt}
		aria-disabled={disabled}
		data-variant={outline ? `${variant}-outline` : `${variant}`}
		data-size={size}
		data-shape={shape}
		data-border={outline ? 'solid' : border}
		data-block={block}
		data-no-focus-ring={noFocusRing}
		data-sveltekit-preload-data={prefetch}
		data-testid="btn"
		{...$$restProps}
	>
		{#if $$slots.leftIcon}
			<slot name="leftIcon" />
		{/if}

		{#if label}
			{label}
		{:else}
			<slot />
		{/if}

		{#if $$slots.rightIcon}
			<slot name="rightIcon" />
		{/if}
	</a>
{:else}
	<button
		class={className}
		style={cssStyles.value}
		aria-label={_alt}
		aria-disabled={disabled}
		data-variant={outline ? `${variant}-outline` : variant}
		data-size={size}
		data-shape={shape}
		data-border={outline ? 'solid' : border}
		data-block={block}
		data-no-focus-ring={noFocusRing}
		{disabled}
		data-testid="btn"
		on:click
		on:dblclick
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		{#if $$slots.leftIcon}
			<slot name="leftIcon" />
		{/if}

		{#if label}
			{label}
		{:else}
			<slot />
		{/if}

		{#if $$slots.rightIcon}
			<slot name="rightIcon" />
		{/if}
	</button>
{/if}

<style src="./styles/Button.postcss">
</style>
