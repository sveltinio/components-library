<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/link/variables.css';
	import '../../styles/components/link/styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';

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

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined = !external
		? prefetch
		: 'off';
	const target = external ? '_blank' : '_self';
	const externalIcon = external && icon ? true : false;

	const reservedCssClasses = ['sn-e-c-link-vars', 'sn-e-c-link'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<a
	{href}
	rel={relOptions.join(' ')}
	{target}
	data-sveltekit-preload-data={prefetchValue}
	class="sn-e-c-link-vars sn-e-c-link {className}"
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
