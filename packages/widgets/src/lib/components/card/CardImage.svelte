<script lang="ts">
	import { filename, isImage } from '@sveltinio/ts-utils/paths';

	export let src: string;
	export let alt: string;
	export let title = '';

	let titleTxt = title == '' ? alt : title;
</script>

{#if isImage(filename(src).unwrapOr(''))}
	<div class="card__image">
		<img {src} {alt} title={titleTxt} aria-label={alt} />
	</div>
{/if}
