<script lang="ts">
	import { website } from '$config/website.js';
	import { getFavicon } from '$lib/utils/strings.js';
	import Hero from '$themes/site_theme/partials/Hero.svelte';
	import { PageMetaTags } from '@sveltinio/seo';
	import { JsonLdWebPage } from '@sveltinio/seo';

	$: homePage = {
		url: website.baseURL,
		title: website.title,
		description: website.seoDescription,
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: 'website'
		},
		twitter: {
			type: 'summary_large_image'
		}
	};
</script>

<!-- SEO Section -->
<PageMetaTags data={homePage} />
<JsonLdWebPage data={homePage} />
<!-- End of SEO Section -->

<Hero />
