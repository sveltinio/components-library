import { list } from '$lib/media-content/loadMediaContent';
import { error } from '@sveltejs/kit';
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const data = await list();
	const body = data.map((item) => ({
		...item
	}));

	if (!body) {
		throw error(404, 'Nothing here yet');
	}

	return new Response(JSON.stringify(body));
}
