<script lang="ts">
	import {
		JsonLdBreadcrumbsItem,
		JsonLdBreadcrumbsItemMaker,
		JsonLdBreadcrumbsListMaker
	} from '../../types';

	export let baseURL: string;
	export let parent: string;
	export let currentTitle: string;

	let itemElementList = Array<JsonLdBreadcrumbsItem>();

	const homePage = JsonLdBreadcrumbsItemMaker.make();
	homePage.position = 1;
	homePage.name = 'Home';
	homePage.url = `${baseURL}`;
	itemElementList.push(homePage);

	if (parent != undefined && parent != '') {
		const resourcePage = JsonLdBreadcrumbsItemMaker.make();
		resourcePage.position = 2;
		resourcePage.name = parent.toUpperCase();
		resourcePage.url = `${baseURL}/${parent}`;
		itemElementList.push(resourcePage);

		const currentPage = JsonLdBreadcrumbsItemMaker.make();
		currentPage.position = 3;
		currentPage.name = currentTitle;
		itemElementList.push(currentPage);
	} else {
		const currentPage = JsonLdBreadcrumbsItemMaker.make();
		currentPage.position = 2;
		currentPage.name = currentTitle;
		itemElementList.push(currentPage);
	}

	const schemaOrgBreadcrumbsList = JsonLdBreadcrumbsListMaker.makeWithValues(itemElementList);
	let jsonLdString = JSON.stringify(schemaOrgBreadcrumbsList.toJsonLdObject());

	let jsonLdScript = `
	<script type="application/ld+json">
		${jsonLdString}
	${'<'}/script>
	`;
</script>

<!-- JSONLD-Breacrumbs-->
<svelte:head>
	{@html jsonLdScript}
</svelte:head>
