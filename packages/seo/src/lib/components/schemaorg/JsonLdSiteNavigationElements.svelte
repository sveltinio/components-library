<script lang="ts">
	import { onMount } from 'svelte';
	import type { IMenuItem, IWebSite } from '../../types.js';
	import {
		JsonLdSiteNavigationElementMaker,
		JsonLdSiteNavigationElement,
		JsonLdSiteNavigationElementListMaker
	} from '../../types.js';

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

	onMount(() => {
		const head = document.head || document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.innerText = jsonLdString;
		script.setAttribute('data-testid', 'jsonld-sitenavigationelement');
		head.appendChild(script);
	});
</script>
