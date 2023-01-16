<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/responsivecard/variables.css';
	import '../../styles/components/responsivecard/styles.css';
	import '../../styles/components/responsivecard/badge.css';
	import { stylesObjToCSSVars, isValidClassName } from '../../utils.js';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';
	import CardContent from './CardContent.svelte';

	export let title: string;
	export let content: string;
	export let lineClamp = 4;
	export let href = '';
	export let titleLink = true;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', [
		'sn-w-colors',
		'sn-w-c-sw__responsivecard-vars',
		'sn-w-c-sw__responsivecard'
	])
		? (className = $$props.class)
		: (className = '');
</script>

<div
	class="sn-w-colors sn-w-c-sw__responsivecard-vars sn-w-c-sw__responsivecard {className}"
	style={cssStyles}
	data-testid="responsivecard-main"
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
			<CardTitleLink {title} {href} />
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
