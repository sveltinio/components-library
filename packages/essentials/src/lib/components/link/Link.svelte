<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/link/variables.css';
	import '../../styles/components/link/styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { onMount } from 'svelte';
	import { retrieveCssClassNames } from '$lib/utils';

	export let label = '';
	export let href: string;
	export let external = false;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined = 'off';
	export let icon = true;
	export let iconSize = 12;
	export let noOpener = true;
	export let noReferrer = true;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let aElem: HTMLElement;

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined = !external
		? prefetch
		: 'off';
	const externalIcon = external && icon ? true : false;

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
	data-sveltekit-preload-data={prefetchValue}
	class="sn-e-c-link-vars sn-e-c-link {cssClasses}"
	style={cssStyles.value}
	aria-label={label}
	data-testid="link"
	{...$$restProps}
>
	{#if label != ''}
		{label}
	{:else}
		<slot />
	{/if}

	{#if externalIcon}
		<slot name="icon">
			<ExternalLinkIcon size={iconSize} />
		</slot>
	{/if}
</a>
