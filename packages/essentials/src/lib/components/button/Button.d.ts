import type { SvelteHTMLElements } from 'svelte/elements';
import type { SvelteKitPrefetch } from '$lib/types.js';

export type ButtonVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warning'
	| 'info'
	| 'ghost'
	| 'neutral';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';

export type ButtonShape = 'rounded' | 'circle' | 'pill' | 'flat';

export type ButtonBorder =
	| 'none'
	| 'hidden'
	| 'dotted'
	| 'dashed'
	| 'solid'
	| 'double'
	| 'groove'
	| 'ridge'
	| 'inset'
	| 'outset'
	| 'initial'
	| 'inherit';

type ButtonRestProps = SvelteHTMLElements['button'] & SvelteHTMLElements['a'];

interface ButtonPropsInternal extends ButtonRestProps {
	label?: string | undefined;
	className?: string;
	styles?: Record<string, string>;
	alt?: string | undefined;
	variant?: ButtonVariant;
	size?: ButtonSize;
	shape?: ButtonShape;
	border?: ButtonBorder;
	disabled?: boolean;
	outline?: boolean;
	block?: boolean;
	noFocusRing?;
	href?: HTMLAnchorElement['href'] | undefined;
	prefetch?: SvelteKitPrefetch;
	external?: boolean;
}

export type ButtonProps = ButtonPropsInternal &
	SvelteHTMLElements['button'] &
	SvelteHTMLElements['a'];
