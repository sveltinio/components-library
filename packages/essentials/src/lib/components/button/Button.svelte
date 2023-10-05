<script lang="ts">
	import '../../styles/baseline.css';
	import '../../styles/components/button/styles.css';
	import type { SvelteKitPrefetch } from '$lib/types.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames, makeExternalLinkOptions, prefixObjectKeys } from '$lib/utils';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { preserveButtonPropsList } from './index.js';

	type ButtonVariant =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'ghost'
		| 'neutral';
	type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';
	type ButtonShape = 'rounded' | 'circle' | 'pill' | 'flat';
	type ButtonBorder =
		| 'none'
		| 'hidden'
		| 'dotted'
		| 'dashed'
		| 'solid'
		| 'double'
		| 'groove'
		| 'ridge'
		| 'inset'
		| 'outset'
		| 'initial'
		| 'inherit';

	export let label: string | undefined = undefined;
	export let alt = '';
	export let variant: ButtonVariant = 'default';
	export let size: ButtonSize = 'base';
	export let shape: ButtonShape = 'rounded';
	export let border: ButtonBorder = 'none';
	export let disabled = false;
	export let outlined = false;
	export let block = false;
	export let noFocusRing = false;
	export let href: HTMLAnchorElement['href'] | undefined = undefined;
	export let prefetch: SvelteKitPrefetch = 'off';
	export let external = false;

	const className: string | null | undefined = undefined;
	export { className as class };

	export let styles: Record<string, string> = {};
	let computedStyles: typeof styles = {};
	if (!isEmpty(styles)) {
		computedStyles = prefixObjectKeys(styles, variant, preserveButtonPropsList);
	}

	const cssStyles = mapToCssVars(computedStyles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-button'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	$: _alt = alt != '' ? alt : label ?? 'alt placeholder';
</script>

{#if href && !disabled}
	<a
		tabindex="0"
		role="button"
		title={_alt}
		{href}
		target={external ? '_blank' : '_self'}
		rel={makeExternalLinkOptions(external)}
		class="sn-e-c-button {cssClasses}"
		style={cssStyles.value}
		aria-label={_alt}
		aria-disabled={disabled}
		data-variant={outlined ? `${variant}-outlined` : `${variant}`}
		data-size={size}
		data-shape={shape}
		data-border={outlined ? 'solid' : border}
		data-block={block}
		data-no-focus-ring={noFocusRing}
		data-sveltekit-preload-data={prefetch}
		data-testid="btn"
		{...$$restProps}
	>
		{#if $$slots.leftIcon}
			<span class="button__icon" aria-hidden="true">
				<slot name="leftIcon" />
			</span>
		{/if}

		{#if label}
			{label}
		{:else}
			<slot />
		{/if}

		{#if $$slots.rightIcon}
			<span class="button__icon" aria-hidden="true">
				<slot name="rightIcon" />
			</span>
		{/if}
	</a>
{:else}
	<button
		class="{cssClasses} sn-e-c-button"
		style={cssStyles.value}
		aria-label={_alt}
		aria-disabled={disabled}
		data-variant={outlined ? `${variant}-outlined` : variant}
		data-size={size}
		data-shape={shape}
		data-border={outlined ? 'solid' : border}
		data-block={block}
		data-no-focus-ring={noFocusRing}
		{disabled}
		data-testid="btn"
		{...$$restProps}
	>
		{#if $$slots.leftIcon}
			<span class="button__icon">
				<slot name="leftIcon" />
			</span>
		{/if}

		{#if label}
			{label}
		{:else}
			<slot />
		{/if}

		{#if $$slots.rightIcon}
			<span class="button__icon">
				<slot name="rightIcon" />
			</span>
		{/if}
	</button>
{/if}
