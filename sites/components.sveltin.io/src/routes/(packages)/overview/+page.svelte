<script lang="ts">
	import { website } from '$config/website.js';
	import { menu } from '$config/menu.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';
	import PageContent from '$themes/site_theme/partials/PageContent.svelte';

	import { NpmSquareIcon } from '@indaco/svelte-iconoir/icons/NpmSquareIcon';

	const overviewPage: IWebPageMetadata = {
		url: getPageUrl('overview', website),
		title: 'Overview',
		description: website.seoDescription,
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: 'article'
		},
		twitter: {
			type: 'summary'
		}
	};
</script>

<PageMetaTags data={overviewPage} />
<JsonLdWebPage data={overviewPage} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent="" currentTitle={overviewPage.title} />
<PageContent>
	<div class="mx-auto w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
				Components Library
			</h2>
			<p
				class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Take control of your team.
			</p>
			<p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
				Start building for free, then add a site plan to go live. Account plans unlock additional
				features.
			</p>
		</div>
	</div>
	<section class="mx-auto w-full py-16 px-4">
		<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each menu as menuEntry}
				{#if menuEntry.children}
					<li class="w-full rounded-lg bg-white shadow">
						<div
							class="flex cursor-pointer flex-col rounded-lg border border-slate-200 bg-slate-100/10 px-6 py-3 text-sm hover:bg-slate-100/30"
						>
							<div class="flex flex-col">
								<h3 class="font-medium text-gray-900">
									<a href={menuEntry.url}>{menuEntry.name.toUpperCase()}</a>
								</h3>
								<p class="t text-gray-500">
									{menuEntry.children.length} components
								</p>
							</div>
							<div class="mt-8">
								<a
									href="https://www.npmjs.com/package/@sveltinio/{menuEntry.identifier}"
									target="_blank"
									class="inline-flex items-center space-x-2 font-medium text-slate-700"
								>
									<NpmSquareIcon size="24" />

									<span>@sveltinio/{menuEntry.identifier}</span>
								</a>
							</div>
						</div>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</PageContent>
