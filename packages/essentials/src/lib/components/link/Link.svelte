<script lang="ts">
	import '../../styles/baseline.css';
	import '../../styles/components/link/styles.css';
	import type { SvelteKitPrefetch } from '$lib/types.js';
	import { isNullish } from '@sveltinio/ts-utils/is';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames, makeExternalLinkOptions } from '$lib/utils.js';
	import { ExternalLinkIcon } from './index.js';

	export let label: string | null | undefined = undefined;
	export let href: HTMLAnchorElement['href'];
	export let prefetch: SvelteKitPrefetch = 'off';
	export let external = false;
	export let externalIcon = true;
	export let externalIconSize = 12;
	export let noOpener = true;
	export let noReferrer = true;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const target = external ? '_blank' : '_self';
	const _extIcon = external && externalIcon ? true : false;

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-link'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<a
	{href}
	{target}
	rel={makeExternalLinkOptions(external, noOpener, noReferrer)}
	class="sn-e-c-link {cssClasses}"
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
