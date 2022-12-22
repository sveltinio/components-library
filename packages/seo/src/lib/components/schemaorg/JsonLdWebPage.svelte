<script lang="ts">
	import { JsonLdWebPage, JsonLdWebPageMaker } from '../../types.js';
	import type { SEOWebPageMetadata } from '../../types.js';
	import { onMount } from 'svelte';

	export let data: SEOWebPageMetadata;

	const webpage: JsonLdWebPage = JsonLdWebPageMaker.make();
	webpage.title = data.title;
	webpage.description = data.description || '';
	if (data.author) webpage.author = data.author;

	let jsonLdString = JSON.stringify(webpage.toJsonLdObject());

	onMount(() => {
		const head = document.head || document.getElementsByTagName('head')[0];
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.innerText = jsonLdString;
		script.setAttribute('data-testid', 'jsonld-webpage');

		head.appendChild(script);
	});
</script>
