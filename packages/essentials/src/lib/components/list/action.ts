export function isActive(href: string): boolean {
	const { hash, pathname, search } = new URL(location.href);
	const path = pathname + search + hash;
	return path.includes(href);
}

export function injectActiveClass(node: HTMLElement): void {
	const parentElement = node.parentElement;
	if (isActive(node.getAttribute('href') || '')) {
		parentElement?.classList.add('is-active');
	} else {
		parentElement?.classList.remove('is-active');
	}
}

export const activeAction = (node: HTMLElement) => {
	injectActiveClass(node);

	return {
		update: () => injectActiveClass(node)
	};
};
