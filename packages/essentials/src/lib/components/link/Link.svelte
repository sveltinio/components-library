<script lang="ts">
	import './styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils';

	export let label = '';
	export let href: string;
	export let external = false;
	export let prefetch = false;
	export let icon = true;
	export let noOpener = true;
	export let noReferrer = true;

	let className = '';
	export { className as class };

	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-c-link-vars', 'sn-e-c-link'])) {
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined =
		prefetch && !external ? `hover` : `off`;
	const target = external ? '_blank' : '_self';
	const externalIcon = external && icon ? true : false;
</script>

<a
	{href}
	rel={relOptions.join(' ')}
	{target}
	data-sveltekit-preload-data={prefetchValue}
	aria-label={label}
	class="sn-e-c-link-vars sn-e-c-link {className}"
	style={cssStyles}
	data-testid="link"
	{...$$restProps}
	><span class="link__content">
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
	</span>
</a>
