import { getSingle } from '$lib/seo/loadSeo';
import { error } from '@sveltejs/kit';
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	const { pathname } = url;
	const slug = pathname.substring(pathname.lastIndexOf('/') + 1);
	if (!slug) {
		throw error(404, 'Seo not found');
	}

	const data = await getSingle(slug);
	return new Response(JSON.stringify(data));
}
