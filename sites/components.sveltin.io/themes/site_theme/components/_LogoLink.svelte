<script lang="ts">
	import SveltinLogo from './_SveltinLogo.svelte';
	export let height = '3rem';
	export let handleNavMenu = () => {};
</script>

<a href="/" on:click={handleNavMenu}>
	<SveltinLogo {height} />
	<span class="sr-only">Sveltin Logo</span>
</a>
