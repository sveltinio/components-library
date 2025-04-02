import type { SvelteHTMLElements } from 'svelte/elements';
import type { SvelteKitPrefetch } from '$lib/types.js';

type LinkRestProps = SvelteHTMLElements['a'];

interface LinkPropsInternal extends LinkRestProps {
	label?: string | null | undefined;
	href?: HTMLAnchorElement['href'];
	prefetch?: SvelteKitPrefetch;
	external?: boolean;
	externalIcon?: boolean;
	externalIconSize?: number;
	noOpener?: boolean;
	noReferrer?: boolean;
	className?: string;
	styles?: Record<string, string>;
}

export type LinkProps = LinkPropsInternal & SvelteHTMLElements['a'];
