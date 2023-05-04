<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/responsive-card/variables.css';
	import '../../styles/components/responsive-card/styles.css';
	import '../../styles/components/responsive-card/badge.css';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';
	import CardContent from './CardContent.svelte';

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
	$: className = '';
	// avoid hacking default class names
	$: contains(
		['sn-w-colors', 'sn-w-c-sw__responsivecard-vars', 'sn-w-c-sw__responsivecard'],
		$$props.class ?? ''
	)
		? (className = '')
		: (className = $$props.class);
</script>

<div
	class="sn-w-colors sn-w-c-responsivecard-vars sn-w-c-responsivecard {className}"
	style={cssStyles.value}
	data-testid="responsivecard_main"
>
	{#if $$slots.cardImage}
		<slot name="cardImage" />
	{/if}

	<div class="card__wrapper">
		{#if $$slots.cardBadge}
			<slot name="cardBadge" />
		{/if}

		{#if $$slots.cardAction && !titleLink}
			<CardTitle {title} />
		{:else}
			<CardTitleLink {prefetch} {href} {title} />
		{/if}

		<CardContent {content} {lineClamp} />

		{#if $$slots.cardAction}
			<div class="card__footer">
				<slot name="cardInfo" />

				<slot name="cardAction" />
			</div>
		{/if}
	</div>
</div>
