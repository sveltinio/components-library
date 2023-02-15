<script lang="ts">
	import type { WebPage, WithContext } from 'schema-dts';
	import { serializeJSONLdSchema } from '../../../utils.js';
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;

	const schemaOrgWebPage: WithContext<WebPage> = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: data.title,
		description: data.description || ''
	};

	if (data.author) schemaOrgWebPage.author = data.author;
	if (data.keywords && data.keywords.length != 0) schemaOrgWebPage.keywords = data.keywords;
</script>

<svelte:head>
	{@html serializeJSONLdSchema(schemaOrgWebPage, 'jsonld-webpage')}
</svelte:head>
