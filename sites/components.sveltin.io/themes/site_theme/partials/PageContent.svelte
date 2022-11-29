<script lang="ts">
	import Footer from './Footer.svelte';
	export let title = '';
</script>

<div class="mx-auto flex max-w-7xl flex-1 flex-col md:pl-64">
	{#if title != ''}
		<div class="px-4 py-4 sm:px-6 md:px-8">
			<h1 class="text-2xl font-semibold text-gray-900">{title}</h1>
		</div>
	{/if}
	<slot />

	<Footer />
</div>
