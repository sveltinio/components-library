<script lang="ts">
	/** The id for the content to be embed.*/
	export let id: string;
	/** The content title. */
	export let title: string;
	/** The user who published the content. */
	export let user: string;
	/** The width of the container. */
	export let width = 595;
	/** The height of the container. */
	export let height = 485;
	/** To control the visibility of the text below the content. */
	export let withText = true;

	const iframeURL = `https://www.slideshare.net/slideshow/embed_code/key/${id}`;
</script>

<div data-testid="wrapper" class={$$props.class} style={$$props.style}>
	<iframe
		data-testid="iframe"
		{title}
		src={iframeURL}
		{width}
		{height}
		frameborder="0"
		marginwidth="0"
		marginheight="0"
		scrolling="no"
		style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
		allowfullscreen
	/>
	{#if withText}
		<div data-testid="text-box" style="margin-bottom: 5px;">
			<strong>
				<a
					data-testid="link-to-the-video"
					alt="Click to open the video on the Vimeo website"
					aria-label="Click to open the video on the Vimeo website"
					href="https://www.slideshare.net/{user}/{title}"
					target="_blank"
					rel="noreferrer">{title}</a
				>
			</strong>
			from
			<strong
				><a
					data-testid="link-to-the-user-page"
					alt="Link to the user page on Vimeo website"
					aria-label="Link to the user page on Vimeo website"
					href="https://www.slideshare.net/{user}"
					target="_blank"
					rel="noreferrer">{user}</a
				></strong
			>
		</div>
	{/if}
</div>
