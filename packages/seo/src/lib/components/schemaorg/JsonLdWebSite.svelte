<script lang="ts">
	import { onMount } from 'svelte';
	import type { SEOWebSite } from '../../types.js';

	export let data: SEOWebSite;

	const schemaOrgWebSite: Record<string, string | Array<string>> = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${data.baseURL}/#website`,
		name: `${data.name}`,
		url: `${data.baseURL}`,
		description: `${data.seoDescription}`,
		inLanguage: `${data.language}`
	};

	if (data.socials != undefined) {
		schemaOrgWebSite.sameAs = Object.values(data.socials).filter((v) => v != '');
	}

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
