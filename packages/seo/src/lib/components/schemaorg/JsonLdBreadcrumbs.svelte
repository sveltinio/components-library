<script lang="ts">
	import {
		IMenuItem,
		IWebSite,
		JsonLdBreadcrumbsItem,
		JsonLdBreadcrumbsItemMaker,
		JsonLdBreadcrumbsListMaker
	} from '../../types';

	export let websiteData: IWebSite;
	export let menuData: Array<IMenuItem>;

	let itemElementList = Array<JsonLdBreadcrumbsItem>();

	menuData.forEach(function (elem: IMenuItem) {
		const listItem = JsonLdBreadcrumbsItemMaker.make();
		if (!elem.external) {
			listItem.position = elem.weight;
			listItem.name = elem.name;
			listItem.url = `${websiteData.baseURL}${elem.url}`;
		} else {
			listItem.position = elem.weight;
			listItem.name = elem.name;
			listItem.url = `${elem.url}`;
		}
		itemElementList.push(listItem);
	});

	const schemaOrgBreadcrumbList = JsonLdBreadcrumbsListMaker.makeWithValues(itemElementList);

	let jsonLdString = JSON.stringify(schemaOrgBreadcrumbList.toJsonLdObject());
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
