export const getFullScriptTagbyId = (scriptId: string): HTMLScriptElement => {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('id') === scriptId) {
			return scripts[i];
		}
	}
	return new HTMLScriptElement();
};

export const getScriptTagById = (scriptId: string): boolean => {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('id') === scriptId) {
			return true;
		}
	}
	return false;
};

export const getScriptSrcById = (scriptId: string): string | null => {
	const scripts = document.getElementsByTagName('script');
	for (let i = 0; i < scripts.length; i += 1) {
		if (scripts[i].getAttribute('id') === scriptId) {
			return scripts[i].getAttribute('src');
		}
	}
	return '';
};

export const getRelLinks = (): string | null => {
	const links = document.getElementsByTagName('link');
	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('rel') === 'preconnect') {
			return links[i].getAttribute('href');
		}
	}
	return '';
};

export const getGoogleFontLinks = (): Array<string> => {
	const links = document.getElementsByTagName('link');
	const hrefs: Array<string> = [];
	for (let i = 0; i < links.length; i += 1) {
		if (links[i].getAttribute('media') === 'print') {
			hrefs.push(links[i].getAttribute('href') || '');
		}
	}
	return hrefs;
};
