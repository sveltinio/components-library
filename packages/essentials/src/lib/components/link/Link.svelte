<script lang="ts">
	import './link-styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { stylesObjToCSSVars } from '$lib/utils';

	export let label = '';
	export let url: string;
	export let underline = false;
	export let alt: string;
	export let title = '';
	export let external = false;
	export let prefetch = false;
	export let icon = true;
	export let noOpener = true;
	export let noReferrer = true;
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	let prefetchValue = prefetch && !external ? 'hover' : 'off';
	let target = external ? '_blank' : '_self';
	let _titleText = title == '' ? alt : title;
	let externalIcon = external && icon ? true : false;
</script>

<a
	rel={relOptions.join(' ')}
	{target}
	href={url}
	{alt}
	title={_titleText}
	data-sveltekit-preload-data={prefetchValue}
	aria-label={alt}
	class="link-container"
	class:underline
	style={cssStyles}
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
			<ExternalLinkIcon />
		</slot>
	{/if}
</a>
