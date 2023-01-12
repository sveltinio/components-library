<script lang="ts">
	import { getLastSegment, isImageFile } from '../../utils.js';
	export let src: string;
	export let alt: string;
	export let title = '';

	let titleTxt = title == '' ? alt : title;
</script>

{#if isImageFile(getLastSegment(src))}
	<div class="card__image">
		<img {src} {alt} title={titleTxt} />
	</div>
{/if}
