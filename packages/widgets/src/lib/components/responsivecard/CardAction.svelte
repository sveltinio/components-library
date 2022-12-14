<script lang="ts">
	export let label = 'Read More';
	export let href = '';
</script>

<div class="card__actions">
	<a {href}>{label}</a>
	<slot name="btn-icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16px"
			height="16px"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			color="currentColor"
			><path
				d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/></svg
		>
	</slot>
</div>
