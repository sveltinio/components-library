import { ContentMetadata, HeadingItem, ResourceContentMaker } from '../../types';

const headings: Array<HeadingItem> = [
	{
		depth: 2,
		title: 'Headings',
		id: 'headings'
	},
	{
		depth: 2,
		title: 'Paragraph',
		id: 'paragraph'
	},
	{
		depth: 2,
		title: 'Blockquotes',
		id: 'blockquotes',
		children: [
			{
				depth: 3,
				title: 'w/o attribution',
				id: 'wo-attribution'
			},
			{
				depth: 3,
				title: 'w/ attribution',
				id: 'w-attribution'
			}
		]
	},
	{
		depth: 2,
		title: 'Tables',
		id: 'tables'
	},
	{
		depth: 2,
		title: 'Lists',
		id: 'lists',
		children: [
			{
				depth: 3,
				title: 'Unordered',
				id: 'unordered'
			},
			{
				depth: 3,
				title: 'Ordered',
				id: 'ordered'
			},
			{
				depth: 3,
				title: 'Nested',
				id: 'nested'
			}
		]
	},
	{
		depth: 2,
		title: 'Other Elements',
		id: 'other-elements'
	},
	{
		depth: 2,
		title: 'Emoij',
		id: 'emoij'
	},
	{
		depth: 2,
		title: 'Code Blocks',
		id: 'code-blocks',
		children: [
			{
				depth: 3,
				title: 'with backticks',
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
	cover:
		'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
};

const contentItemWithCoverAndCreateDate = ResourceContentMaker.create();
contentItemWithCoverAndCreateDate.resource = 'posts';
contentItemWithCoverAndCreateDate.metadata = <ContentMetadata>{
	slug: 'welcome',
	title: 'Card Title',
	created_at: '13-Jan-2022',
	headline:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	cover:
		'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
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
	headings
};
