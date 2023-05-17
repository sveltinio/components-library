<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/responsive-card/variables.css';
	import '../../styles/components/responsive-card/styles.css';
	import '../../styles/components/responsive-card/badge.css';
	import { retrieveCssClassNames } from '$lib/utils';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
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

	// avoid hacking reserverd css classes
	const reservedNames = ['sn-w-colors', 'sn-w-c-responsivecard-vars', 'sn-w-c-responsivecard'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-w-colors sn-w-c-responsivecard-vars sn-w-c-responsivecard {cssClasses}"
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
