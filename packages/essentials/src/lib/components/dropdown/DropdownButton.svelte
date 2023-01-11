<script lang="ts">
	export let label: string;
	export let iconSize = 20;
</script>

<button id="menubutton" class="btn" aria-haspopup="true" aria-controls="menu-list"
	>{label}

	<span class="btn__icon">
		<slot name="btnIcon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={iconSize}
				height={iconSize}
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				color="currentColor"
			>
				<path
					d="M6 9L12 15L18 9"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</slot>
	</span></button
>
