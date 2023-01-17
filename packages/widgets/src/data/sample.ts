import type { ResourceContent, TocEntry } from '$lib/types.js';

const tocEntries: Array<TocEntry> = [
	{
		depth: 2,
		value: 'Intro',
		id: 'intro'
	},
	{
		depth: 2,
		value: 'Motivation',
		id: 'motivation'
	},
	{
		depth: 2,
		value: 'Design & Development',
		id: 'design-development',
		children: [
			{
				depth: 3,
				value: 'Component Design',
				id: 'component-design'
			},
			{
				depth: 3,
				value: 'Development',
				id: 'development'
			}
		]
	},
	{
		depth: 2,
		value: 'License',
		id: 'license'
	}
];

const contentItem_1: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'welcome',
		title: 'Welcome',
		draft: false,
		author: 'John Foo',
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy.jpeg',
		category: 'tutorial'
	}
};

const contentItem_2: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'microphone',
		title: 'The microphone and the voice',
		draft: false,
		author: 'John Foo',
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy_2.jpeg',
		category: 'music'
	}
};

const contentItem_3: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'welcome',
		title: 'Welcome',
		draft: false,
		author: 'John Foo',
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy.jpeg'
	}
};

const contentItem_4: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'welcome',
		title: 'Welcome',
		author: 'John Foo',
		draft: false,
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy.jpeg'
	}
};

const previous: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'welcome',
		title: 'Welcome',
		author: 'John Foo',
		draft: false,
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy.jpeg'
	}
};

const next: ResourceContent = {
	resource: 'posts',
	metadata: {
		slug: 'getting-started',
		title: 'Getting Started',
		draft: false,
		author: 'John Foo',
		created_at: '13 Dec 2022',
		headline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		cover: 'dummy_2.jpeg'
	}
};

export { contentItem_1, contentItem_2, contentItem_3, contentItem_4, next, previous, tocEntries };
