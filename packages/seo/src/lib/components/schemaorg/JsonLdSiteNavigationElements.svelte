<script lang="ts">
	import { onMount } from 'svelte';
	import type { SEOMenuItem, SEOWebSite } from '../../types.js';
	import {
		JsonLdSiteNavigationElementMaker,
		JsonLdSiteNavigationElement,
		JsonLdSiteNavigationElementListMaker
	} from '../../types.js';

	export let data: SEOWebSite;
	export let menuData: SEOMenuItem[];

	let elementList = Array<JsonLdSiteNavigationElement>();

	menuData.forEach((elem: SEOMenuItem) => {
		const item = JsonLdSiteNavigationElementMaker.make();
		if (!elem.external) {
			item.position = elem.weight;
			item.name = elem.identifier;
			item.url = `${data.baseURL}` + elem.url;
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
