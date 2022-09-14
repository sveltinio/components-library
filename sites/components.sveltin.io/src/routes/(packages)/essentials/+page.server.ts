import type { Sveltin } from 'src/sveltin';
import { list } from '$lib/essentials/loadEssentials';

export async function load() {
	const resourceName = 'essentials';
	const data = await list();

	const items: Array<Sveltin.ContentEntry> = [];
	data.forEach((elem) => {
		const item: Sveltin.ContentEntry = {
			resource: resourceName,
			metadata: <Sveltin.YAMLFrontmatter>elem.meta,
			html: ''
		};
		items.push(item);
	});
	return {
		resourceName: resourceName,
		items: items
	};
}
