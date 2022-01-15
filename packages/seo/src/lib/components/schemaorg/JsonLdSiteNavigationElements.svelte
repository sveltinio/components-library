<script lang="ts">
	import { JsonLdSiteNavigationElementMaker, MenuItem, WebSite } from '../../types';
	export let websiteData: WebSite;
	export let menuData: MenuItem[];

	let elementListAsJsonString = Array<Record<string, unknown>>();

	menuData.forEach(function (elem: MenuItem) {
		const item = JsonLdSiteNavigationElementMaker.create();
		if (!elem.external) {
			item.position = elem.weight;
			item.name = elem.identifier;
			item.url = `${websiteData.baseURL}` + elem.url;
		} else {
			item.position = elem.weight;
			item.name = elem.identifier;
			item.url = elem.url;
		}
		elementListAsJsonString.push(item.toJsonLdObject());
	});

	const schemaOrgSiteNavigationElementList = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: elementListAsJsonString
	};

	let jsonLdString = JSON.stringify(schemaOrgSiteNavigationElementList);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
