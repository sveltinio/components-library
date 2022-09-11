<script lang="ts">
	import { onMount } from 'svelte';

	import {
		JsonLdBreadcrumbsItem,
		JsonLdBreadcrumbsItemMaker,
		JsonLdBreadcrumbsListMaker
	} from '../../types.js';

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

	onMount(() => {
		const head = document.head || document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.innerText = jsonLdString;
		script.setAttribute('data-testid', 'jsonld-breadcrumbs');
		head.appendChild(script);
	});
</script>
