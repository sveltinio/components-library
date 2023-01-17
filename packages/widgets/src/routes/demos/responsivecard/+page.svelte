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

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>ResponsiveCard</h2>
</div>

<!--
	https://source.unsplash.com/600x400/?music
	https://placeimg.com/400/400/any
-->

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="responsivecard-complete-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-complete">Complete</h3>
		<div class="preview">
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
	</div>

	<div id="responsivecard-title-link-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-title-link">Title as Link</h3>
		<div class="preview">
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
	</div>

	<div id="responsivecard-no-image-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-no-image">No Image</h3>
		<div class="preview">
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
	</div>
</section>
