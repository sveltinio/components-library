<script lang="ts">
	import type { ItemList, SiteNavigationElement, WithContext } from 'schema-dts';
	import { serializeJSONLdSchema } from '../../../utils.js';
	import type { SEOMenuItem } from '../../../types.js';

	export let baseURL: string;
	export let data: SEOMenuItem[];

	function makeSiteNavigationElementList(data: SEOMenuItem[]): Array<SiteNavigationElement> {
		let elementList: Array<SiteNavigationElement> = [];

		if (Array.isArray(data)) {
			data.forEach((elem: SEOMenuItem) => {
				const item: SiteNavigationElement = {
					'@type': 'SiteNavigationElement',
					position: elem.weight,
					name: elem.identifier,
					url: elem.external ? elem.url : `${baseURL}${elem.url}`
				};
				elementList.push(item);
			});
		}
		return elementList;
	}

	const schemaOrgSiteNavigationElement: WithContext<ItemList> = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: makeSiteNavigationElementList(data)
	};
</script>

<svelte:head>
	{@html serializeJSONLdSchema(schemaOrgSiteNavigationElement, 'jsonld-sitenavigationelement')}
</svelte:head>
