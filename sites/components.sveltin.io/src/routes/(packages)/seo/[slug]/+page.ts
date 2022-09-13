import { getSingle } from '$lib/seo/loadSeo';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;
	const { status, current, previous, next } = await getSingle(slug);

	if (status == 200) {
		return {
			actual: current,
			before: previous,
			after: next,
			mdsvexComponent: (await import(`../../../../../content/seo/${slug}/index.svx`)).default
		};
	}

	throw error(404, 'Not found');
}
