<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/card/variables.css';
	import '../../styles/components/card/styles.css';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';
	import CardContent from './CardContent.svelte';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';

	export let title: string;
	export let content: string;
	export let lineClamp = 4;
	export let href = '';
	export let titleLink = true;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined = 'off';

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', ['sn-w-colors', 'sn-w-c-card-vars', 'sn-w-c-card'])
		? (className = $$props.class)
		: (className = '');
</script>

<div
	class="sn-w-colors sn-w-c-card-vars sn-w-c-card {className}"
	style={cssStyles}
	data-testid="card_main"
>
	{#if $$slots.cardImage}
		<slot name="cardImage" />
	{/if}

	{#if $$slots.cardAction && !titleLink}
		<CardTitle {title} />
	{:else}
		<CardTitleLink {prefetch} {href} {title} />
	{/if}

	<CardContent {content} {lineClamp} />

	{#if $$slots.cardAction}
		<div class="card__footer">
			<slot name="cardAction" />
		</div>
	{/if}
</div>
