<script lang="ts">
	import type { WebSite } from '../../types';

	export let websiteData: WebSite;

	const schemaOrgWebPage = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: `${websiteData.name}`,
		description: `${websiteData.seoDescription}`,
		publisher: {
			'@type': 'ProfilePage',
			name: `${websiteData.webmaster.name}`
		}
	};

	let jsonLdString = JSON.stringify(schemaOrgWebPage);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
