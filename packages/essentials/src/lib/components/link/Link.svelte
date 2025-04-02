<svelte:options accessors={true} />

<script lang="ts">
	import type { LinkProps as $$LinkProps } from './Link.d.ts';
	import { isNullish } from '@sveltinio/ts-utils/is';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { makeExternalLinkOptions } from '$lib/utils.js';
	import { ExternalLinkIcon } from './index.js';

	interface $$Props extends $$LinkProps {}

	export let label: $$Props['label'] = undefined;
	export let href: $$Props['href'] = undefined;
	export let prefetch: $$Props['prefetch'] = 'off';
	export let external: $$Props['external'] = false;
	export let externalIcon: $$Props['externalIcon'] = true;
	export let externalIconSize: $$Props['externalIconSize'] = 12;
	export let noOpener: $$Props['noOpener'] = true;
	export let noReferrer: $$Props['noReferrer'] = true;
	export let styles: $$Props['styles'] = {};
	export let className: $$Props['className'] = undefined;
	export { className as class };

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(Link): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}

	const target = external ? '_blank' : '_self';
	const _extIcon = external && externalIcon ? true : false;
</script>

<a
	{href}
	{target}
	rel={makeExternalLinkOptions(external, noOpener, noReferrer)}
	class={className}
	style={cssStyles.value}
	aria-label={label}
	data-sveltekit-preload-data={prefetch}
	data-testid="link"
	{...$$restProps}
>
	<slot name="leftIcon" />

	{#if !isNullish(label)}
		{label}
	{:else}
		<slot />
	{/if}

	{#if _extIcon}
		<slot name="rightIcon">
			<ExternalLinkIcon size={externalIconSize} />
		</slot>
	{/if}
</a>

<style src="./styles/Link.postcss">
</style>
