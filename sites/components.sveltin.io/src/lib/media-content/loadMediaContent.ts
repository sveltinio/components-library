import type { Sveltin } from 'src/sveltin';

export async function list() {
	const contentFiles = import.meta.glob('/content/media-content/**/*.{svelte.md,md,svx}');
	const contentFilesArray = Object.entries(contentFiles);
	const contents = await Promise.all(
		contentFilesArray.map(async ([path, resolver]) => {
			const data = await resolver();
			const result: Sveltin.DynamicObject = {
				meta: data['metadata'],
				path: path
			};
			return result;
		})
	);
	const publishedByDate = contents
		.filter((elem) => !elem.meta['draft'])
		.sort((a, b) => (a.meta['created_at'] < b.meta['created_at'] ? 1 : -1));

	return publishedByDate;
}

export async function getSingle(slug: string) {
	const resourceName = 'media-content';
	const publishedByDate = await list();

	const selected = publishedByDate.filter((item) => {
		return item.meta['slug'] == slug;
	});

	if (selected.length != 0) {
		const selectedItemIndex = publishedByDate.findIndex((elem) => slug === elem.meta['slug']);
		const selectedItem = publishedByDate[selectedItemIndex];
		const current: Sveltin.ContentEntry = {
			resource: resourceName,
			metadata: selectedItem.meta as Sveltin.YAMLFrontmatter
		};
		const previous: Sveltin.ContentEntry = {
			resource: resourceName,
			metadata: <Sveltin.YAMLFrontmatter>{
				title: publishedByDate[selectedItemIndex + 1]?.meta['title'],
				slug: publishedByDate[selectedItemIndex + 1]?.meta['slug']
			}
		};
		const next: Sveltin.ContentEntry = {
			resource: resourceName,
			metadata: <Sveltin.YAMLFrontmatter>{
				title: publishedByDate[selectedItemIndex - 1]?.meta['title'],
				slug: publishedByDate[selectedItemIndex - 1]?.meta['slug']
			}
		};

		return {
			status: 200,
			current,
			previous,
			next
		};
	}
	return {
		status: 404
	};
}
