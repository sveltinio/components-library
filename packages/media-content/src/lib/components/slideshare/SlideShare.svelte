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

<div class={$$props.class} style={$$props.style} data-testid="slideshare_wrapper">
	<iframe
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
		data-testid="slideshare_iframe"
	/>
	{#if withText}
		<div style="margin-bottom: 5px;" data-testid="slideshare_text_box">
			<strong>
				<a
					aria-label="Click to open the video on the Vimeo website"
					href="https://www.slideshare.net/{user}/{title}"
					target="_blank"
					rel="noreferrer"
					data-testid="slideshare_link_to_the_video">{title}</a
				>
			</strong>
			from
			<strong
				><a
					aria-label="Link to the user page on Vimeo website"
					href="https://www.slideshare.net/{user}"
					target="_blank"
					rel="noreferrer"
					data-testid="slideshare_link_to_the_user_page">{user}</a
				></strong
			>
		</div>
	{/if}
</div>
