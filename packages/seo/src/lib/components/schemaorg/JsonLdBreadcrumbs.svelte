<script lang="ts">
	import {
		JsonLdBreadcrumbsListItemMaker,
		JsonLdBreadcrumbsItemListElementMaker,
		MenuItem,
		WebSite
	} from '../../types';

	export let websiteData: WebSite;
	export let menuData: Array<MenuItem>;

	let itemElementListAsJsonString = Array<Record<string, unknown>>();

	menuData.forEach(function (elem: MenuItem) {
		const listItem = JsonLdBreadcrumbsItemListElementMaker.create();
		if (!elem.external) {
			listItem.position = elem.weight;
			listItem.item = JsonLdBreadcrumbsListItemMaker.createWithValues(
				`${websiteData.baseURL}${elem.url}`,
				elem.name
			);
		} else {
			listItem.position = elem.weight;
			listItem.item = JsonLdBreadcrumbsListItemMaker.createWithValues(`${elem.url}`, elem.name);
		}
		itemElementListAsJsonString.push(listItem.toJsonLdObject());
	});

	const schemaOrgBreadcrumbList = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: itemElementListAsJsonString
	};

	let jsonLdString = JSON.stringify(schemaOrgBreadcrumbList);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
