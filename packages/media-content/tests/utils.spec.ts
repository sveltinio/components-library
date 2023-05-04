import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { isHex, getHexValue } from '@sveltinio/ts-utils/colors';
import { contains } from '@sveltinio/ts-utils/collections';
import type { IVimeoSettings, ICodeSandboxSettings } from '../src/lib/types.js';
import { makeSettingsString, isScriptLoaded, toID } from '../src/lib/utils.js';
import { getFullScriptTagById } from './test-utils.js';

describe('urls', () => {
	it('should get the last part of a URL without the first /', async () => {
		const url = 'http://www.facebook.com/20531316728/posts/10154009990506729/';
		expect(toID(url)).toBe('20531316728/posts/10154009990506729/');
	});

	it('should return not_a_valid_url trying to get the last part of a URL', async () => {
		const url = '20531316728/posts/10154009990506729/';
		expect(toID(url)).toBe('not_a_valid_url');
	});
});

describe('makeSettingsString', () => {
	it('should make the standard query params string', async () => {
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
						return contains<string>(qualityOptions, value) ? `${key}=${value}` : `${key}=auto`;
					} else if (key == 'color') {
						const hex = getHexValue(value);
						let hexValue = '';
						if (hex.isOk()) {
							hexValue = hex.value;
						}
						return isHex(value) ? `${key}=${hexValue}` : `${key}=ffffff`;
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
						return contains<string>(qualityOptions, value) ? `${key}=${value}` : `${key}=auto`;
					} else if (key == 'color') {
						const hex = getHexValue(value);
						let hexValue = '';
						if (hex.isOk()) {
							hexValue = hex.value;
						}
						return isHex(value) ? `${key}=${hexValue}` : `${key}=ffffff`;
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
