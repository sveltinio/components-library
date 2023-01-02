<script lang="ts">
	import { base } from '$app/paths';
	import {
		ResponsiveCard,
		ResponsiveCardImage,
		ResponsiveCardBadge,
		ResponsiveCardInfo,
		ResponsiveCardAction
	} from '$lib/index.js';
	import { ResourceContentUtils } from '$lib/types.js';

	import { contentItem_1, contentItem_2 } from '../../../data/sample.js';

	/* the resources folder name within the static folder */
	const resourcesFolder = 'resources';

	const item_1_CoverImgPath = `${base}/${ResourceContentUtils.getCoverPath(
		resourcesFolder,
		contentItem_1
	)}`;

	const item_2_CoverImgPath = `${base}/${ResourceContentUtils.getCoverPath(
		resourcesFolder,
		contentItem_2
	)}`;
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>
	<h2><tt>ResponsiveCard</tt></h2>
</section>

<!--
	https://source.unsplash.com/600x400/?music
	https://placeimg.com/400/400/any
-->

<section>
	<div class="demo-container">
		<h3>Complete</h3>
		<ResponsiveCard
			title={contentItem_2.metadata.title}
			content={contentItem_2.metadata.headline ?? ''}
		>
			<ResponsiveCardImage
				slot="cardImage"
				src={item_2_CoverImgPath}
				alt="microphone photo"
			/>
			<ResponsiveCardBadge
				slot="cardBadge"
				data={{
					value: String(contentItem_2.metadata.category),
					color: 'blue',
					url: ResourceContentUtils.getMetadataURL(
						base,
						contentItem_2.resource,
						'category',
						String(contentItem_2.metadata.category)
					)
				}}
			/>
			<ResponsiveCardInfo
				slot="cardInfo"
				author={contentItem_2.metadata.author ?? ''}
				date={contentItem_2.metadata.created_at ?? ''}
				showAvatar={false}
			/>
			<ResponsiveCardAction
				slot="cardAction"
				href={ResourceContentUtils.getURL(base, contentItem_2)}
			/>
		</ResponsiveCard>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>Title as Link</h3>
		<ResponsiveCard
			title={contentItem_1.metadata.title}
			content={contentItem_1.metadata.headline ?? ''}
		>
			<ResponsiveCardImage slot="cardImage" src={item_1_CoverImgPath} alt="viola photo" />
			<ResponsiveCardBadge
				slot="cardBadge"
				data={{
					value: String(contentItem_1.metadata.category),
					color: 'red',
					url: ResourceContentUtils.getMetadataURL(
						base,
						contentItem_1.resource,
						'category',
						String(contentItem_1.metadata.category)
					)
				}}
			/>
			<ResponsiveCardInfo
				slot="cardInfo"
				author={contentItem_1.metadata.author ?? ''}
				date={contentItem_1.metadata.created_at ?? ''}
			/>
		</ResponsiveCard>
	</div>
</section>

<section>
	<div class="demo-container">
		<h3>No Image</h3>
		<ResponsiveCard
			title={contentItem_1.metadata.title}
			content={contentItem_1.metadata.headline ?? ''}
		>
			<ResponsiveCardAction
				slot="cardAction"
				href={ResourceContentUtils.getURL(base, contentItem_1)}
			/>
		</ResponsiveCard>
	</div>
</section>
