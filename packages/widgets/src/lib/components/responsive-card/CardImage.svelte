<script lang="ts">
	import type { BreakpointsQueries, BreakpointMatch } from '../../types.js';
	import {
		isXSmallScreen,
		isSmallScreen,
		isMediumScreen,
		isLargeScreen,
		isXLargeScreen,
		isXXLargeScreen
	} from '../../utils.js';
	import { isImage, filename } from '@sveltinio/ts-utils/paths';
	import { merge, getPropertyValue } from '@sveltinio/ts-utils/objects';
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let title = '';
	export let setVisibility: BreakpointsQueries = {};

	let titleTxt = title == '' ? alt : title;
	let innerWidth = 0;

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

{#if isImage(filename(src).unwrapOr(''))}
	{#if isXSmallScreen(innerWidth) && isVisibleOnXSmallScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if isSmallScreen(innerWidth) && isVisibleOnSmallScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if isMediumScreen(innerWidth) && isVisibleOnMediumScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if isLargeScreen(innerWidth) && isVisibleOnLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if isXLargeScreen(innerWidth) && isVisibleOnXLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{:else if isXXLargeScreen(innerWidth) && isVisibleOnXXLargeScreen()}
		<div class="card__image">
			<img {src} {alt} title={titleTxt} aria-label={alt} />
		</div>
	{/if}
{/if}
