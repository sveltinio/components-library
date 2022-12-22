<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars } from '../../utils.js';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';
	import CardContent from './CardContent.svelte';

	export let title: string;
	export let content: string;
	export let lineClamp = 4;
	export let href = '';

	let themeClassName = '';
	export { themeClassName as theme };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="sw__responsivecard sw__responsivecard__main {themeClassName}"
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
