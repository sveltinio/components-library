<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title = '';

	let titleTxt = title == '' ? alt : title;
</script>

<div class="card-header">
	<img {src} {alt} title={titleTxt} />
</div>

<style>
	.card-header {
		width: 100%;
		height: auto;
	}

	.card-header img {
		object-fit: cover;
		width: 100%;
	}
</style>
