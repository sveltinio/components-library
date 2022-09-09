<script lang="ts">
	import { page } from '$app/stores';
	import { menu } from '$config/menu.js';
	import CollapsibleList from '../components/_CollapsibleList.svelte';
	import LogoLink from '../components/_LogoLink.svelte';
	// Iconoir
	import HomeIcon from '@indaco/svelte-iconoir/icons/HomeIcon.svelte';
	import XrayViewIcon from '@indaco/svelte-iconoir/icons/XrayViewIcon.svelte';
	import MediaImageFolderIcon from '@indaco/svelte-iconoir/icons/MediaImageFolderIcon.svelte';
	import ViewGridIcon from '@indaco/svelte-iconoir/icons/ViewGridIcon.svelte';
	import OpenBookIcon from '@indaco/svelte-iconoir/icons/OpenBookIcon.svelte';
	import CodeIcon from '@indaco/svelte-iconoir/icons/CodeIcon.svelte';
	import InternetIcon from '@indaco/svelte-iconoir/icons/InternetIcon.svelte';

	const leftSideIconsMap = new Map([
		['home', HomeIcon],
		['overview', XrayViewIcon],
		['essentials', OpenBookIcon],
		['media-content', MediaImageFolderIcon],
		['seo', InternetIcon],
		['services', CodeIcon],
		['widgets', ViewGridIcon]
	]);
</script>

<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
	<div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<div class="flex flex-shrink-0 items-center px-4">
				<LogoLink />
			</div>
			<nav class="mt-5 flex-1 space-y-1 bg-white px-2 text-gray-600">
				{#each menu as item}
					{#if !item.children}
						<a
							href={item.url}
							class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
							class:bg-gray-100={$page.url.pathname == item.url}
						>
							<div class="left-icon">
								<svelte:component this={leftSideIconsMap.get(item.identifier)} />
							</div>
							{item.name}
						</a>
					{:else}
						<CollapsibleList title={item.name}>
							<div class="left-icon" slot="leftIcon">
								<svelte:component this={leftSideIconsMap.get(item.identifier)} />
							</div>

							<ul slot="content">
								<li>
									<a
										href={item.url}
										class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
										class:active={$page.url.pathname == item.url}>All</a
									>
								</li>
								{#each item.children as child}
									<li>
										<a
											href={child.url}
											class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
											class:active={$page.url.pathname == child.url}>{child.name}</a
										>
									</li>
								{/each}
							</ul>
						</CollapsibleList>
					{/if}
				{/each}
			</nav>
		</div>
	</div>
</div>

<style>
	.left-icon {
		color: rgb(156 163 175);
		margin-right: 0.75rem /* 12px */;
		flex-shrink: 0;
		height: 1.5rem /* 24px */;
		width: 1.5rem /* 24px */;
	}

	.active {
		@apply bg-gray-100 text-gray-900;
	}
</style>
