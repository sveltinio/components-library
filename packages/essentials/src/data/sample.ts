import type { DropdownData } from '$lib/components/dropdown/Dropdown.d.ts';
import type { ListItem } from '$lib/components/list/ToggleList.d.ts';
import { CloudUploadIcon } from '@indaco/svelte-iconoir/cloud-upload';
import { BellIcon } from '@indaco/svelte-iconoir/bell';

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

export const dropdownContentSample = [
	{ identifier: 'item_1', name: 'Item 1', url: '/item-1' },
	{ identifier: 'item_2', name: 'Item 2', url: '/item-2' }
];

export const contentForToggleList: Array<ListItem> = [
	{ label: 'First', url: '#first', icon: CloudUploadIcon },
	{ label: 'Second', url: '#second', icon: BellIcon }
];
