<script lang="ts">
	import { ExternalLinkIcon } from './';

	export let id = '';
	export let label: string;
	export let underline = false;
	export let url: string;
	export let altText = '';
	export let target = '_blank';
	export let noOpener = true;
	export let noReferrer = true;
	export let icon = true;

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	$: _idText = id != '' ? id : label;
	$: _altText = altText != '' ? altText : label;
</script>

<a
	id={_idText}
	data-testid="ext-link"
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
		--_color: var(--color, rgb(30 41 59)); /** slate-800 */
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
