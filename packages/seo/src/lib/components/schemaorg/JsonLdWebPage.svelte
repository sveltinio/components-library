<script lang="ts">
	import { IWebPageMetadata, JsonLdWebPage, JsonLdWebPageMaker } from '../../types';

	export let data: IWebPageMetadata;
	const webpage: JsonLdWebPage = JsonLdWebPageMaker.make();

	webpage.title = data.title;
	webpage.description = data.description;

	if (data.author) webpage.author = data.author;

	let jsonLdString = JSON.stringify(webpage.toJsonLdObject());
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
