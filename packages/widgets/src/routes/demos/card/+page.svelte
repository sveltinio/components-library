<script lang="ts">
	import { assets, base } from '$app/paths';
	import { Card, CardAction, CardImage } from '$lib/index.js';
	import { contentItem_1, contentItem_2, contentItem_3 } from '../../../data/sample.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>
	<h2><tt>Card</tt></h2>
</section>

<section>
	<h3 id="card-wo-cover-create-date)">Basic</h3>
	<Card title={contentItem_1.metadata.title} content={contentItem_1.metadata.headline ?? ''}>
		<CardAction
			slot="cardAction"
			href="{base}/{contentItem_1.resource}/{contentItem_1.metadata.slug}"
		/>
	</Card>

	<h3 id="card-wo-cover-create-date)">Title as link</h3>
	<Card
		title={contentItem_2.metadata.title}
		content={contentItem_2.metadata.headline ?? ''}
		href="{base}/{contentItem_2.resource}/{contentItem_2.metadata.slug}"
	/>

	<h3 id="card-with-cover-without-create-date">Complete</h3>
	<Card title={contentItem_3.metadata.title} content={contentItem_3.metadata.headline ?? ''}>
		<CardImage
			slot="cardImage"
			alt={contentItem_3.metadata.title}
			src="{assets}/resources/{contentItem_3.resource}/{contentItem_3.metadata
				.slug}/{contentItem_3.metadata.cover}"
		/>
		<CardAction
			slot="cardAction"
			href="{base}/{contentItem_3.resource}/{contentItem_3.metadata.slug}"
		/>
	</Card>
</section>
