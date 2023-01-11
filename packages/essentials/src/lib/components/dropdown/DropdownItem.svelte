<script lang="ts">
	export let label: string;
	export let href: string;
	export let prefetch = true;
	export let target = '_self';
</script>

<li class="list__item" role="none">
	<a {href} {target} data-sveltekit-preload-data={prefetch ? 'hover' : 'off'} role="menuitem">
		{label}
	</a>
</li>
