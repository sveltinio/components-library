<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.product?.plural_title}
	{@const _plural_title = data.opengraph.product.plural_title}
	<meta property="product:plural_title" content={_plural_title} />
{/if}

{#if data.opengraph?.product?.price}
	{@const _price = data.opengraph.product.price.toString()}
	<meta property="product:price.amount" content={_price} />
{/if}

{#if data.opengraph?.product?.currency}
	{@const _currency = data.opengraph.product.currency}
	<meta property="product:price.currency" content={_currency} />
{/if}
