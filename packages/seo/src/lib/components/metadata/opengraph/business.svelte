<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.business?.street_address}
	{@const _street_address = data.opengraph.business.street_address}
	<meta property="business:contact_data:street_address" content={_street_address} />
{/if}

{#if data.opengraph?.business?.city}
	{@const _city = data.opengraph.business.city}
	<meta property="business:contact_data:locality" content={_city} />
{/if}

{#if data.opengraph?.business?.state}
	{@const _state = data.opengraph.business.state}
	<meta property="business:contact_data:region" content={_state} />
{/if}

{#if data.opengraph?.business?.postal_code}
	{@const _postal_code = data.opengraph.business.postal_code.toString()}
	<meta property="business:contact_data:postal_code" content={_postal_code} />
{/if}

{#if data.opengraph?.business?.country}
	{@const _country = data.opengraph.business.country}
	<meta property="business:contact_data:country_name" content={_country} />
{/if}
