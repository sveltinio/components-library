<script lang="ts">
	import { ExternalLinkIcon } from './index.js';

	export let label: string;
	export let url: string;
	export let underline = false;
	export let alt = '';
	export let external = false;
	export let noOpener = true;
	export let noReferrer = true;

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	$: _altText = alt != '' ? alt : label;
	$: target = external ? '_blank' : '_self';
	$: icon = external ? true : false;
</script>

<a
	data-testid="link"
	rel={relOptions.join(' ')}
	{target}
	href={url}
	alt={_altText}
	title={_altText}
	aria-label={_altText}
	class="link-container"
	class:underline
	{...$$restProps}
>
	<slot>{label}</slot>

	{#if icon}
		<slot name="icon">
			<ExternalLinkIcon />
		</slot>
	{/if}
</a>

<style>
	a {
		--_color: var(--color, rgb(30, 41, 59)); /** slate-800 */
		color: var(--_color);
		text-decoration: none;
	}
	.underline {
		text-decoration: underline;
	}
	.link-container {
		display: inline-flex;
		align-items: center;
		align-content: flex-start;
	}
</style>
