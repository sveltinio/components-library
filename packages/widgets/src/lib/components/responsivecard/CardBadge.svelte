<script lang="ts">
	import type { CardBadge } from './types.js';

	export let data: CardBadge;
</script>

{#if data.value != 'undefined'}
	<div class="card__metadata">
		<a href={data.url}>
			<span class="badge badge-{data.color}">{data.value}</span>
		</a>
	</div>
{/if}
