<script lang="ts">
	import type { BreakpointsQueries, BreakpointMatch } from '../../types.js';
	import { onMount } from 'svelte';
	import { BreakpointChecker } from '../../utils.js';
	import { isImage, filename } from '@sveltinio/ts-utils/paths';
	import { merge, getPropertyValue } from '@sveltinio/ts-utils/objects';
	import { isUrl } from '@sveltinio/ts-utils/urls';

	export let src: string;
	export let alt: string;
	export let title = '';
	export let setVisibility: BreakpointsQueries = {};

	let titleTxt = title == '' ? alt : title;
	let innerWidth = 0;

	const bpChecker = new BreakpointChecker();

	const defaultVisibility: BreakpointsQueries = {
		xs: false,
		sm: false,
		md: true,
		lg: true,
		xl: true,
		'2xl': true
	};
	const _visibility = merge(defaultVisibility, setVisibility);

	const isVisibleOnXSmallScreen = () => isVisibleOn('xs');
	const isVisibleOnSmallScreen = () => isVisibleOn('sm');
	const isVisibleOnMediumScreen = () => isVisibleOn('md');
	const isVisibleOnLargeScreen = () => isVisibleOn('lg');
	const isVisibleOnXLargeScreen = () => isVisibleOn('xl');
	const isVisibleOnXXLargeScreen = () => isVisibleOn('2xl');

	const isVisibleOn = (breakpoint: BreakpointMatch) => getPropertyValue(_visibility, breakpoint);

	onMount(async () => {
		innerWidth = window.innerWidth;
	});
</script>

<svelte:window bind:innerWidth />

{#if isUrl(src) || isImage(filename(src).unwrapOr(''))}
	{#if bpChecker.isXSmallScreen(innerWidth) && isVisibleOnXSmallScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if bpChecker.isSmallScreen(innerWidth) && isVisibleOnSmallScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if bpChecker.isMediumScreen(innerWidth) && isVisibleOnMediumScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if bpChecker.isLargeScreen(innerWidth) && isVisibleOnLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if bpChecker.isXLargeScreen(innerWidth) && isVisibleOnXLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if bpChecker.isXXLargeScreen(innerWidth) && isVisibleOnXXLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{/if}
{/if}
