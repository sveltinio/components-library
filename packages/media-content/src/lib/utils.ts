import type { callBackTwoParameters } from './types.js';
import { isUrl } from '@sveltinio/ts-utils/urls';
import { removeFirstOccurrence } from '@sveltinio/ts-utils/strings';

export function toID(url: string): string {
	if (isUrl(url)) {
		return removeFirstOccurrence(new URL(url).pathname, '/').match(
			(str) => str,
			(err) => `${err.message}`
		);
	}
	return 'not_a_valid_url';
}

export function makeSettingsString<T>(
	opts: T,
	callback?: callBackTwoParameters<string, string>
): string {
	return Object.keys(opts)
		.map((key) => {
			if (callback) {
				return callback(key, opts[key]);
			} else {
				switch (typeof opts[key]) {
					case 'boolean':
						return `${key}=${Number(opts[key])}`;
					case 'number':
						return `${key}=${String(opts[key])}`;
					default:
						return `${key}=${opts[key]}`;
				}
			}
		})
		.join('&');
}

export function isScriptLoaded(url: string): boolean {
	const scripts = window.document.getElementsByTagName('script');

	for (let i = scripts.length; i--; ) {
		if (scripts[i].src == url) return true;
	}
	return false;
}
