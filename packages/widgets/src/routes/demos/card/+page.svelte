<script lang="ts">
	import { base } from '$app/paths';
	import { Card, CardTitle, CardCover, CardContent, CardButton, CardMetadata } from '$lib/index.js';
	import {
		contentItem,
		contentItemWithCover,
		contentItemWithCoverAndCreateDate
	} from '../../../data/sample.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>Card</tt></h2>

	<section id="card" class="container">
		<h3>Card</h3>

		<h4 id="card-wo-cover-create-date)">Basic</h4>
		<Card>
			<CardTitle>{contentItem.metadata.title}</CardTitle>
			<CardContent>{contentItem.metadata.headline}</CardContent>
			<CardButton href="{base}/{contentItem.resource}/{contentItem.metadata.slug}" />
		</Card>

		<h4 id="card-wo-cover-create-date)">w/ create date, w/o cover</h4>
		<Card>
			{#if contentItemWithCoverAndCreateDate.metadata.created_at}
				<CardMetadata date={contentItemWithCoverAndCreateDate.metadata.created_at} />
			{/if}
			<CardTitle>{contentItem.metadata.title}</CardTitle>
			<CardContent>{contentItem.metadata.headline}</CardContent>
			<CardButton href="{base}/{contentItem.resource}/{contentItem.metadata.slug}" />
		</Card>

		<h4 id="card-with-cover-without-create-date">w/ cover, w/o create date</h4>
		<Card>
			<CardCover
				alt={contentItemWithCover.metadata.title}
				src="{base}/resources/{contentItemWithCover.resource}/{contentItemWithCover.metadata
					.slug}/{contentItemWithCover.metadata.cover}"
			/>
			<CardTitle>
				{contentItemWithCover.metadata.title}</CardTitle
			>

			<CardContent>{contentItemWithCover.metadata.headline}</CardContent>
			<CardButton href="{base}/{contentItem.resource}/{contentItem.metadata.slug}" />
		</Card>

		<h4 id="card-without-cover-and-create-date">Full</h4>
		<Card>
			<CardCover
				alt={contentItemWithCoverAndCreateDate.metadata.title}
				src="{base}/resources/{contentItemWithCover.resource}/{contentItemWithCover.metadata
					.slug}/{contentItemWithCover.metadata.cover}"
			/>

			{#if contentItemWithCoverAndCreateDate.metadata.created_at}
				<CardMetadata
					date={contentItemWithCoverAndCreateDate.metadata.created_at}
					withCover={true}
				/>
			{/if}
			<CardTitle>
				{contentItemWithCoverAndCreateDate.metadata.title}</CardTitle
			>
			<CardContent>{contentItemWithCoverAndCreateDate.metadata.headline}</CardContent>
			<CardButton
				label="Read the article"
				href="{base}/{contentItem.resource}/{contentItem.metadata.slug}"
			/>
		</Card>
	</section>
</section>
