import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import type { IVimeoSettings, ICodeSandboxSettings, ICodePenSettings } from '../types';
import {
	isEmptyObject,
	isValidValue,
	isValidHex,
	getHexValue,
	toKebabCase,
	toSnakeCase,
	makeSettingsString,
	isPropValueSet,
	isScriptLoaded,
	isCommaSepareted,
	toCommaSepareted,
	isValidURL,
	toID,
	removeFirstOccurrence
} from '../utils';
import { getFullScriptTagById } from './__fixtures__/test-utils';

describe('isEmptyObject ', () => {
	it('should be an empty object', async () => {
		const obj: Record<string, string> = {};
		expect(isEmptyObject<Record<string, string>>(obj)).toBe(true);
	});

	it('should be a non empty object', async () => {
		const obj: Record<string, string> = {
			user: 'userone',
			slug: 'slugone'
		};
		expect(isEmptyObject<Record<string, string>>(obj)).toBe(false);
	});
});

describe('isValidValue ', () => {
	it('should be included into the collection', async () => {
		const strCollection = ['first', 'second', 'third'];
		expect(isValidValue<string>('first', strCollection)).toBe(true);
		expect(isValidValue<string>('second', strCollection)).toBe(true);

		const numbers = [1, 2, 3];
		expect(isValidValue<number>(1, numbers)).toBe(true);
		expect(isValidValue<number>(2, numbers)).toBe(true);
	});

	it('should note be includes into the collection', async () => {
		const collection = ['first', 'second', 'third'];
		expect(isValidValue<string>('fourth', collection)).toBe(false);

		const numbers = [1, 2, 3];
		expect(isValidValue<number>(4, numbers)).toBe(false);
	});
});

describe('isPropValueSet', () => {
	it('should be true', async () => {
		const obj: ICodePenSettings = {
			preview: false,
			borderColor: '',
			height: 0
		};

		Object.values(obj).map((val) => {
			switch (typeof val) {
				case 'boolean':
					expect(isPropValueSet(val)).toBe(true);
					break;
				case 'string':
					expect(isPropValueSet(val)).toBe(false);
					break;
				case 'number':
					expect(isPropValueSet(val)).toBe(false);
					break;
				default:
					break;
			}
		});
	});
});

describe('comma separated list', () => {
	it('should be a valid comma separted list', async () => {
		expect(isCommaSepareted('one,')).toBe(true);
		expect(isCommaSepareted('one, two')).toBe(true);
		expect(isCommaSepareted('one, two, three')).toBe(true);
	});

	it('should be a invalid comma separted list', async () => {
		expect(isCommaSepareted('one')).toBe(false);
		expect(isCommaSepareted('one two three')).toBe(false);
	});
});

describe('to comma separated string', () => {
	it('should be a valid comma separted list', async () => {
		expect(toCommaSepareted('one two')).toBe('one,two');
		expect(toCommaSepareted('one;two')).toBe('one,two');
	});
});

describe('remove first Occurrence', () => {
	it('should return the string without the initial /', async () => {
		expect(removeFirstOccurrence('/20531316728/posts/10154009990506729/', '/')).toBe(
			'20531316728/posts/10154009990506729/'
		);
	});

	it('should return the string as it is', async () => {
		expect(removeFirstOccurrence('/20531316728/posts/10154009990506729/', '$')).toBe(
			'/20531316728/posts/10154009990506729/'
		);
	});
});

describe('urls', () => {
	it('should be a valid URL', async () => {
		const url = 'https://www.facebook.com/20531316728/posts/10154009990506729/';
		expect(isValidURL(url)).toBe(true);
	});

	it('should not be a valid url', async () => {
		const url = 'http://www.facebook/20531316728/posts/10154009990506729/';
		expect(isValidURL(url)).toBe(false);
	});

	it('should get the last part of a URL without the first /', async () => {
		const url = 'http://www.facebook.com/20531316728/posts/10154009990506729/';
		expect(toID(url)).toBe('20531316728/posts/10154009990506729/');
	});

	it('should return not_a_valid_url trying to get the last part of a URL', async () => {
		const url = 'http://www.facebook/20531316728/posts/10154009990506729/';
		expect(toID(url)).toBe('not_a_valid_url');
	});
});

describe('hex colors ', () => {
	it('should be a valid hex color', async () => {
		expect(isValidHex('#ff0000')).toBe(true);
		expect(isValidHex('#fff')).toBe(true);
	});

	it('should be an invalid hex color', async () => {
		expect(isValidHex('ff0000')).toBe(false);
	});

	it('should give me back the hex string from a valid hex color string', async () => {
		expect(getHexValue('#ff0000')).toBe('ff0000');
	});

	it('should give me back not_a_valid_hex_color from a invalid hex color string', async () => {
		expect(getHexValue('ff0000')).toBe('not_a_valid_hex_color');
	});
});

describe('toKebabCase ', () => {
	it('should be a true', async () => {
		expect(toKebabCase('borderColor')).toBe('border-color');
		expect(toKebabCase('gettingStarted')).toBe('getting-started');
		expect(toKebabCase('tabLinkColor')).toBe('tab-link-color');
	});

	it('should be false', async () => {
		expect(toKebabCase('borderColor')).not.toBe('border_color');
	});
});

describe('toSnakeCase ', () => {
	it('should be a true', async () => {
		expect(toSnakeCase('borderColor')).toBe('border_color');
		expect(toSnakeCase('gettingStarted')).toBe('getting_started');
		expect(toSnakeCase('tabLinkColor')).toBe('tab_link_color');
	});

	it('should be false', async () => {
		expect(toKebabCase('borderColor')).not.toBe('border_color');
	});
});

describe('buildOptionsString', () => {
	it('should build the standard query params string', async () => {
		const options: ICodeSandboxSettings = {
			hidedevtools: true,
			theme: 'light',
			editorsize: 40
		};

		const result = 'hidedevtools=1&theme=light&editorsize=40';
		expect(makeSettingsString<ICodeSandboxSettings>(options)).toBe(result);
	});

	it('should use the callback function to customize the query params string', async () => {
		const qualityOptions = ['240p', '360p', '540p', '720p', '1080p', '2k', '4k', 'auto'];
		const options: IVimeoSettings = {
			autoplay: false,
			muted: true,
			portrait: false,
			color: '#ff0000',
			quality: '360p'
		};

		const matchersCallback = (key: string, value: string): string => {
			switch (typeof value) {
				case 'boolean':
					return `${key}=${Number(value)}`;
				case 'number':
					return `${key}=${String(value)}`;
				default:
					if (key == 'quality') {
						return isValidValue<string>(value, qualityOptions) ? `${key}=${value}` : `${key}=auto`;
					} else if (key == 'color') {
						return isValidHex(value) ? `${key}=${getHexValue(value)}` : `${key}=ffffff`;
					} else {
						return `${key}=${value}`;
					}
			}
		};
		const result = 'autoplay=0&muted=1&portrait=0&color=ff0000&quality=360p';
		expect(makeSettingsString<IVimeoSettings>(options, matchersCallback)).toBe(result);
	});

	it('should use the callback function to customize the query params string and set default prop value for unsupported and invalid values', async () => {
		const qualityOptions = ['240p', '360p', '540p', '720p', '1080p', '2k', '4k', 'auto'];
		const options: IVimeoSettings = {
			autoplay: false,
			muted: true,
			portrait: false,
			color: '#ff0000',
			quality: '360'
		};

		const matchersCallback = (key: string, value: string): string => {
			switch (typeof value) {
				case 'boolean':
					return `${key}=${Number(value)}`;
				case 'number':
					return `${key}=${String(value)}`;
				default:
					if (key == 'quality') {
						return isValidValue<string>(value, qualityOptions) ? `${key}=${value}` : `${key}=auto`;
					} else if (key == 'color') {
						return isValidHex(value) ? `${key}=${getHexValue(value)}` : `${key}=ffffff`;
					} else {
						return `${key}=${value}`;
					}
			}
		};
		const result = 'autoplay=0&muted=1&portrait=0&color=ff0000&quality=auto';
		expect(makeSettingsString<IVimeoSettings>(options, matchersCallback)).toBe(result);
	});
});

describe('isScriptLoaded', () => {
	function addCodepenScript(id: string, src: string) {
		const head = document.head || document.getElementsByTagName('head')[0];

		const script = document.createElement('script');
		script.id = id;
		script.async = true;
		script.src = src;

		head.appendChild(script);
	}

	it('should be true', async () => {
		const id = 'codepen-lib-script';
		const src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

		addCodepenScript(id, src);
		const loadedScriptElem = getFullScriptTagById(id);
		expect(isScriptLoaded(loadedScriptElem['src'])).toBe(true);
	});

	it('should be false', async () => {
		const notPreviouslyLoadedScript =
			'https://connect.facebook.net/${langCode}/sdk.js#xfbml=1&version=v13.0';

		expect(isScriptLoaded(notPreviouslyLoadedScript)).toBe(false);
	});
});
