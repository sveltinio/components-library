<script lang="ts">
	import type { IMenuItem, IWebSite } from '../../types';
	import {
		JsonLdSiteNavigationElementMaker,
		JsonLdSiteNavigationElement,
		JsonLdSiteNavigationElementListMaker
	} from '../../types';

	export let websiteData: IWebSite;
	export let menuData: IMenuItem[];

	let elementList = Array<JsonLdSiteNavigationElement>();

	menuData.forEach((elem: IMenuItem) => {
		const item = JsonLdSiteNavigationElementMaker.make();
		if (!elem.external) {
			item.position = elem.weight;
			item.name = elem.identifier;
			item.url = `${websiteData.baseURL}` + elem.url;
		} else {
			item.position = elem.weight;
			item.name = elem.identifier;
			item.url = elem.url;
		}
		elementList.push(item);
	});

	const schemaOrgSiteNavigationElementList =
		JsonLdSiteNavigationElementListMaker.makeWithValues(elementList);

	let jsonLdString = JSON.stringify(schemaOrgSiteNavigationElementList.toJsonLdObject());
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
