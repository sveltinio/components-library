<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/responsivecard/variables.css';
	import '../../styles/components/responsivecard/styles.css';
	import '../../styles/components/responsivecard/badge.css';
	import { stylesObjToCSSVars } from '../../utils.js';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';
	import CardContent from './CardContent.svelte';

	export let title: string;
	export let content: string;
	export let lineClamp = 4;
	export let href = '';

	let className = '';
	export { className as class };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="sw__responsivecard sw__responsivecard__main {className}"
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

		{#if $$slots.cardAction}
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
