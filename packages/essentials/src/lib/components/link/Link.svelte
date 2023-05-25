<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/link/variables.css';
	import '../../styles/components/link/styles.css';
	import { onMount } from 'svelte';
	import { isNullish } from '@sveltinio/ts-utils/is';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';
	import { ExternalLinkIcon } from './index.js';

	type SvelteKitPrefetch = true | '' | 'hover' | 'off' | 'tap' | null | undefined;

	export let label: string | null | undefined = undefined;
	export let href: string;
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

	let aElem: HTMLElement;

	const _prefetchValue: SvelteKitPrefetch = external ? 'off' : prefetch;
	const _extIcon = external && externalIcon ? true : false;

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-link-vars', 'sn-e-c-link'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	onMount(() => {
		if (external) {
			aElem.setAttribute('target', '_blank');

			let relOptions = ['external'];
			if (noOpener) relOptions.push('noopener');
			if (noReferrer) relOptions.push('noreferrer');
			aElem.setAttribute('rel', relOptions.join(' '));
		}
	});
</script>

<a
	bind:this={aElem}
	{href}
	data-sveltekit-preload-data={_prefetchValue}
	class="sn-e-c-link-vars sn-e-c-link {cssClasses}"
	style={cssStyles.value}
	aria-label={label}
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
