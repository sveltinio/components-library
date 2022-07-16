<script lang="ts">
	export let date: string;
	export let withCover: boolean;
</script>

<p class="badge" class:badge-absolute={withCover}><time datetime="2020-12-02">{date}</time></p>

<style>
	.badge {
		position: relative;
		display: inline-block;
		color: #334155;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1rem; /* 16px */
		text-transform: uppercase;
		border-radius: 9999px;
		background-color: #f8fafc;
		margin-top: -2.875rem;
		padding: 0.5rem 0.1rem;
	}

	.badge-absolute {
		position: absolute;
		top: 60%;
		right: 10%;
		padding: 0.5rem 0.75rem;
	}
</style>
