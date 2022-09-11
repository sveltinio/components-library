<script lang="ts">
	import { website } from '$config/website.js';
	import { menu } from '$config/menu.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';

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

<main class="flex flex-1 flex-col bg-white md:pl-64">
	<div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
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
		<section class="mx-auto mt-4 px-10 py-10 lg:px-12 lg:py-12">
			<ul
				class="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3"
			>
				{#each menu as menuEntry}
					{#if menuEntry.children}
						<li>
							<div
								class="flex aspect-[2/1] cursor-pointer  flex-col justify-between rounded-lg border border-slate-200 bg-slate-100/10 hover:bg-slate-100/30"
							>
								<div>
									<h4 class="mt-4 px-4 text-lg font-medium text-slate-900 hover:text-cyan-600">
										<a href={menuEntry.url}>{menuEntry.name.toUpperCase()}</a>
									</h4>
									<p class="mt-1.5 px-4 text-sm font-medium text-slate-500">
										{menuEntry.children.length} components
									</p>
								</div>

								<p class=" my-2.5 px-4 font-mono text-xs text-slate-600">
									<a
										href="https://www.npmjs.com/package/@sveltinio/{menuEntry.identifier}"
										target="_blank"
										class=" inline-flex items-center space-x-7 hover:text-slate-700"
									>
										<img
											alt="NPM Bagde for {menuEntry.identifier}"
											class="mr-4"
											src="https://img.shields.io/npm/v/@sveltinio/{menuEntry.identifier}.svg?style=flat&labelColor=lightgrey&color=informational"
										/>

										@sveltinio/{menuEntry.identifier}
									</a>
								</p>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</section>
	</div>
</main>
