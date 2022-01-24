<script lang="ts">
	import type { IWebSite } from '../../types';

	export let websiteData: IWebSite;

	const sameAs = Object.values(websiteData.socials).filter((v) => v != '');
	const schemaOrgWebSite = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${websiteData.baseURL}/#website`,
		name: `${websiteData.name}`,
		url: `${websiteData.baseURL}`,
		description: `${websiteData.seoDescription}`,
		inLanguage: `${websiteData.language}`,
		sameAs: [`${sameAs}`]
	};

	let jsonLdString = JSON.stringify(schemaOrgWebSite);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
