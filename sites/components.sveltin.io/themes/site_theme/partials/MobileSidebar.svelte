<script lang="ts">
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { menu } from '$config/menu.js';

	import HomeIcon from '@indaco/svelte-iconoir/icons/HomeIcon.svelte';
	import XrayViewIcon from '@indaco/svelte-iconoir/icons/XrayViewIcon.svelte';
	import MediaImageFolderIcon from '@indaco/svelte-iconoir/icons/MediaImageFolderIcon.svelte';
	import ViewGridIcon from '@indaco/svelte-iconoir/icons/ViewGridIcon.svelte';
	import OpenBookIcon from '@indaco/svelte-iconoir/icons/OpenBookIcon.svelte';
	import CodeIcon from '@indaco/svelte-iconoir/icons/CodeIcon.svelte';
	import InternetIcon from '@indaco/svelte-iconoir/icons/InternetIcon.svelte';
	import OpenMobileSidebarMenuBtn from '../components/_OpenMobileSidebarMenuBtn.svelte';
	import CloseMobileSidebarMenuBtn from '../components/_CloseMobileSidebarMenuBtn.svelte';
	import LogoLink from '../components/_LogoLink.svelte';

	export let navIsOpen: boolean;

	const leftSideIconsMap = new Map([
		['home', HomeIcon],
		['overview', XrayViewIcon],
		['essentials', OpenBookIcon],
		['media-content', MediaImageFolderIcon],
		['seo', InternetIcon],
		['services', CodeIcon],
		['widgets', ViewGridIcon]
	]);

	function handleNavMenu(): void {
		console.log('before: ' + navIsOpen);
		navIsOpen = !navIsOpen;
		console.log('later: ' + navIsOpen);
	}
</script>

<OpenMobileSidebarMenuBtn bind:navIsOpen />

{#if navIsOpen}
	<div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
		<div
			class="fixed inset-0 bg-gray-600 bg-opacity-75"
			class:hidden={!navIsOpen}
			aria-hidden={navIsOpen}
			in:fly={{ x: -200, duration: 300, easing: cubicInOut }}
			out:fly={{ x: -400, duration: 400, easing: cubicInOut }}
		/>

		<div class="fixed inset-0 z-40 flex">
			<div
				class="relative flex w-full max-w-xs flex-1 flex-col bg-white"
				class:hidden={!navIsOpen}
				in:fly={{ x: -400, duration: 500, easing: cubicInOut }}
				out:fly={{ x: -600, duration: 200, easing: cubicInOut }}
			>
				<CloseMobileSidebarMenuBtn bind:navIsOpen handleNavMenu={() => handleNavMenu()} />

				<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
					<div class="flex flex-shrink-0 items-center px-4">
						<LogoLink handleNavMenu={() => handleNavMenu()} />
					</div>
					<nav class="mt-5 space-y-1 px-2">
						{#each menu as menuEntry}
							<a
								href={menuEntry.url}
								class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
								class:active={$page.url.pathname == menuEntry.url}
								on:click={handleNavMenu}
							>
								<div class="left-icon">
									<svelte:component this={leftSideIconsMap.get(menuEntry.identifier)} />
								</div>
								{menuEntry.name}
							</a>
						{/each}
					</nav>
				</div>
			</div>

			<div class="w-14 flex-shrink-0">
				<!-- Force sidebar to shrink to fit close icon -->
			</div>
		</div>
	</div>
{/if}

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
