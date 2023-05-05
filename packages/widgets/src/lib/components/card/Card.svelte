<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/card/variables.css';
	import '../../styles/components/card/styles.css';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';
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
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	/** ********************************************** **/
	const reservedCssClasses = ['sn-w-colors', 'sn-w-c-card-vars', 'sn-w-c-card'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<div
	class="sn-w-colors sn-w-c-card-vars sn-w-c-card {className}"
	style={cssStyles.value}
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
