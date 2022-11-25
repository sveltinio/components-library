<script lang="ts">
	import './styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { stylesObjToCSSVars } from '$lib/utils';

	export let label = '';
	export let url: string;
	export let underline = false;
	export let alt: string;
	export let title = '';
	export let external = false;
	export let icon = true;
	export let noOpener = true;
	export let noReferrer = true;
	export let styles = {};

	const cssStyles = stylesObjToCSSVars(styles);

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	$: target = external ? '_blank' : '_self';
	$: _titleText = title == '' ? alt : title;
	$: externalIcon = external && icon ? true : false;
</script>

<a
	data-testid="link"
	rel={relOptions.join(' ')}
	{target}
	href={url}
	{alt}
	title={_titleText}
	aria-label={alt}
	class="link-container"
	class:underline
	style={cssStyles}
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
