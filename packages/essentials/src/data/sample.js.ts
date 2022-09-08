import type { DropdownData } from '$lib/components/dropdown/types';
import type { ListItem } from '$lib/components/list/types';
import { CloudUploadIcon, BellIcon } from '@indaco/svelte-iconoir';

export const menu = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'posts',
		name: 'Posts',
		url: '/posts',
		external: false,
		weight: 2,

		children: [
			{
				identifier: 'getting-started',
				name: 'Getting Started',
				url: '/posts/getting-started',
				external: false,
				weight: 1
			},

			{
				identifier: 'welcome',
				name: 'Welcome',
				url: '/posts/welcome',
				external: false,
				weight: 2
			}
		]
	},

	{
		identifier: 'how-to',
		name: 'How-To',
		url: '/how-to',
		weight: 3
	}
];

export const navItems: Array<DropdownData> = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'posts',
		name: 'Posts',
		url: '/posts',
		external: false,
		weight: 2,

		children: [
			{
				identifier: 'getting-started',
				name: 'Getting Started',
				url: '/posts/getting-started',
				external: false,
				weight: 1
			},

			{
				identifier: 'welcome',
				name: 'Welcome',
				url: '/posts/welcome',
				external: false,
				weight: 2
			}
		]
	},

	{
		identifier: 'how-to',
		name: 'How-To',
		url: '/how-to',
		weight: 3
	}
];

export const contentForToggleList: Array<ListItem> = [
	{ label: 'First', url: '#first', icon: CloudUploadIcon },
	{ label: 'Second', url: '#second', icon: BellIcon }
];
