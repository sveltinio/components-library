<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars } from '../../utils.js';
	import CardContent from './CardContent.svelte';
	import CardTitle from './CardTitle.svelte';
	import CardTitleLink from './CardTitleLink.svelte';

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
	class="sn-w-colors sn-w-c-card-vars sn-w-c-card {className}"
	style={cssStyles}
	data-testid="card-main"
>
	{#if $$slots.cardImage}
		<slot name="cardImage" />
	{/if}

	{#if $$slots.cardAction}
		<CardTitle {title} />
	{:else}
		<CardTitleLink {title} {href} />
	{/if}

	<CardContent {content} {lineClamp} />

	{#if $$slots.cardAction}
		<div class="card__footer">
			<slot name="cardAction" />
		</div>
	{/if}
</div>
