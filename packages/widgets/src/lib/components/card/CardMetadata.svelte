<script lang="ts">
	export let date: string;
	export let withCover = false;
</script>

<p class="badge" class:no-cover={!withCover} class:cover={withCover}>
	<time datetime="2020-12-02">{date}</time>
</p>
