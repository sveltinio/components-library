import { isNullish } from '@sveltinio/ts-utils/is';
import type { BreakpointMatch, Screens } from './types';
import { contains } from '@sveltinio/ts-utils/collections';

/**
 * Retrieves the CSS class names from a value, excluding any reserved names.
 * If the value is nullish, an empty string is returned.
 *
 * @param value - The value to retrieve CSS class names from.
 * @param reservedNames - An array of reserved class names to exclude.
 * @returns The retrieved CSS class names or an empty string if reserved names are found.
 */
export function retrieveCssClassNames(value: any, reservedNames: string[]): string {
	if (isNullish(value)) {
		return '';
	}

	const cssClasses = String(value).split(' ');

	if (cssClasses.some((cssClass) => contains(reservedNames, cssClass))) {
		return '';
	}

	return value;
}

export const isMobile = (width: number): boolean => width < 768;
export const isTable = (width: number): boolean => width >= 768 && width < 1024;
export const isDesktop = (width: number): boolean => width >= 1024;

export const isXSmallScreen = (width: number): boolean => getBreakpoint(width) === 'xs';
export const isSmallScreen = (width: number): boolean => getBreakpoint(width) === 'sm';
export const isMediumScreen = (width: number): boolean => getBreakpoint(width) === 'md';
export const isLargeScreen = (width: number): boolean => getBreakpoint(width) === 'lg';
export const isXLargeScreen = (width: number): boolean => getBreakpoint(width) === 'xl';
export const isXXLargeScreen = (width: number): boolean => getBreakpoint(width) === '2xl';

export function getBreakpoint(width: number): BreakpointMatch {
	const screens: Screens = {
		xs: { min: '320', max: '639' },
		sm: { min: '640px', max: '767px' },
		md: { min: '768px', max: '1023px' },
		lg: { min: '1024px', max: '1279px' },
		xl: { min: '1280px', max: '1535px' },
		'2xl': { min: '1536px' }
	};
	const breakpointKeys = Object.keys(screens) as BreakpointMatch[];
	let breakpoint: BreakpointMatch = breakpointKeys[0];

	for (let i = 1; i < breakpointKeys.length; i++) {
		const prevBreakpoint = screens[breakpoint];
		const currBreakpoint = screens[breakpointKeys[i]];

		if (width >= parseInt(prevBreakpoint.min) && width <= parseInt(currBreakpoint.max || '10000')) {
			breakpoint = breakpointKeys[i];
		}
	}

	return breakpoint;
}
