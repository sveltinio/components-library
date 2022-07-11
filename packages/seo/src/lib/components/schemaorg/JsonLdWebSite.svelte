<script lang="ts">
	import { onMount } from 'svelte';
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

	onMount(() => {
		const head = document.head || document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.innerText = jsonLdString;
		script.setAttribute('data-testid', 'jsonld-website');
		head.appendChild(script);
	});
</script>
