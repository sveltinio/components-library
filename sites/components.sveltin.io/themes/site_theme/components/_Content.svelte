<script lang="ts">
	import Footer from '../partials/Footer.svelte';
	import Markdown from './_Markdown.svelte';

	export let title: string;
</script>

<div class="flex flex-1 flex-col md:pl-64">
	<Markdown {title}>
		<slot />
	</Markdown>

	<Footer />
</div>
