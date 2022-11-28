import { ContentMetadata, ResourceContentMaker } from '$lib/types.js';
import type { TocEntry } from '$lib/types.js';

const tocEntries: Array<TocEntry> = [
	{
		depth: 2,
		value: 'Headings',
		id: 'headings'
	},
	{
		depth: 2,
		value: 'Paragraph',
		id: 'paragraph'
	},
	{
		depth: 2,
		value: 'Blockquotes',
		id: 'blockquotes',
		children: [
			{
				depth: 3,
				value: 'w/o attribution',
				id: 'wo-attribution'
			},
			{
				depth: 3,
				value: 'w/ attribution',
				id: 'w-attribution'
			}
		]
	},
	{
		depth: 2,
		value: 'Tables',
		id: 'tables'
	},
	{
		depth: 2,
		value: 'Lists',
		id: 'lists',
		children: [
			{
				depth: 3,
				value: 'Unordered',
				id: 'unordered'
			},
			{
				depth: 3,
				value: 'Ordered',
				id: 'ordered'
			},
			{
				depth: 3,
				value: 'Nested',
				id: 'nested'
			}
		]
	},
	{
		depth: 2,
		value: 'Other Elements',
		id: 'other-elements'
	},
	{
		depth: 2,
		value: 'Emoij',
		id: 'emoij'
	},
	{
		depth: 2,
		value: 'Code Blocks',
		id: 'code-blocks',
		children: [
			{
				depth: 3,
				value: 'with backticks',
				id: 'with-backticks'
			}
		]
	}
];

const contentItem = ResourceContentMaker.create();
contentItem.resource = 'posts';
contentItem.metadata = <ContentMetadata>{
	slug: 'welcome',
	title: 'Card Title',
	headline:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

const contentItemWithCreateDate = ResourceContentMaker.create();
contentItemWithCreateDate.resource = 'posts';
contentItemWithCreateDate.metadata = <ContentMetadata>{
	slug: 'welcome',
	title: 'Card Title',
	created_at: '13-Jan-2022',
	headline:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

const contentItemWithCover = ResourceContentMaker.create();
contentItemWithCover.resource = 'posts';
contentItemWithCover.metadata = <ContentMetadata>{
	slug: 'welcome',
	title: 'Card Title',
	headline:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	cover: 'dummy.jpeg'
};

const contentItemWithCoverAndCreateDate = ResourceContentMaker.create();
contentItemWithCoverAndCreateDate.resource = 'posts';
contentItemWithCoverAndCreateDate.metadata = <ContentMetadata>{
	slug: 'welcome',
	title: 'Card Title',
	created_at: '13-Jan-2022',
	headline:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	cover: 'dummy.jpeg'
};

const next = ResourceContentMaker.create();
next.resource = 'posts';
next.metadata = <ContentMetadata>{
	title: 'Getting Started',
	slug: 'getting-started'
};

const previous = ResourceContentMaker.create();
previous.resource = 'posts';
previous.metadata = <ContentMetadata>{
	title: 'Why',
	slug: 'why'
};

export {
	contentItem,
	contentItemWithCreateDate,
	contentItemWithCover,
	contentItemWithCoverAndCreateDate,
	next,
	previous,
	tocEntries
};
