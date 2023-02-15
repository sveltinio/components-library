<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { TwitterCardType } from '../../../types.js';

	export let data: SEOWebPage;
</script>

<svelte:head>
	<!-- TwitterCard -->
	{#if data.twitter}
		{#if data.twitter.type}
			<meta property="twitter:card" content={data.twitter.type} />
			<meta property="twitter:title" content={data.title} />
			{#if data.twitter.site}
				<meta property="twitter:site" content={data.twitter.site} />
			{/if}
			{#if data.description}
				<meta property="twitter:description" content={data.description} />
			{/if}
			{#if data.image}
				<meta property="twitter:image" content={data.image} />
			{/if}
			{#if data.imageAlt}
				<meta property="twitter:image:alt" content={data.imageAlt} />
			{/if}

			{#if data.twitter.type == TwitterCardType.Player}
				{#if data.twitter.player}
					<meta property="twitter:player" content={data.twitter.player.url} />
					<meta property="twitter:player:width" content={data.twitter.player.width} />
					<meta property="twitter:player:height" content={data.twitter.player.height} />
				{/if}
			{/if}

			{#if data.twitter.type == TwitterCardType.App}
				{#if data.twitter.app}
					{#if data.twitter.app.country}
						<meta property="twitter:app:country" content={data.twitter.app.country} />
					{/if}
					<meta property="twitter:app:id:iphone" content={data.twitter.app.idIPhone} />
					<meta property="twitter:app:id:ipad" content={data.twitter.app.idIPad} />
					<meta
						property="twitter:app:id:googleplay"
						content={data.twitter.app.idGooglePlay}
					/>
				{/if}
			{/if}
		{/if}
	{/if}
</svelte:head>
