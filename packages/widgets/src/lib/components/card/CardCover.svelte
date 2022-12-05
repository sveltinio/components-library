<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title = '';

	let titleTxt = title == '' ? alt : title;
</script>

<div class="sw__bc--card-header">
	<img {src} {alt} title={titleTxt} />
</div>
