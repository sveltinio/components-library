<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/link/variables.css';
	import '../../styles/components/link/styles.css';
	import { ExternalLinkIcon } from './index.js';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';

	export let label = '';
	export let href: string;
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

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined =
		prefetch && !external ? `hover` : `off`;
	const target = external ? '_blank' : '_self';
	const externalIcon = external && icon ? true : false;

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', ['sn-e-c-link-vars', 'sn-e-c-link'])
		? (className = $$props.class)
		: (className = '');
</script>

<a
	{href}
	rel={relOptions.join(' ')}
	{target}
	data-sveltekit-preload-data={prefetchValue}
	class="sn-e-c-link-vars sn-e-c-link {className}"
	style={cssStyles}
	aria-label={label}
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
