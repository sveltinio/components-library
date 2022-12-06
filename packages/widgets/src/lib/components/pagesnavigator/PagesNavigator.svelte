<script lang="ts">
	import './styles.css';
	import type { PagesNavigatorItem } from '../../types.js';
	import { stylesObjToCSSVars, capitalize } from '../../utils.js';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let placeholders = true;
	export let labels = true;
	export let spacer = false;

	// ensure to show the labels at least
	if (!placeholders && !labels) {
		placeholders = false;
		labels = true;
	}

	let prevPlaceholderTxt = prev.placeholder ?? 'previous';
	let nextPlaceholderTxt = next.placeholder ?? 'next';

	let prevAltText = prev.alt ?? prev.label;
	let nextAltText = next.alt ?? next.label;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="sw__prevnextbtn sw__prevnextbtn__container"
	class:sw__prevnextbtn__spacer-bottom={!prev.label || !next.label}
	style={cssStyles}
	data-testid="prevnext_container"
>
	{#if prev}
		<a
			href={prev.href}
			alt="link to {prevAltText}"
			title="link to {prevAltText}"
			aria-label="link to {prevAltText}"
			class="link"
			data-testid="link_to_previous"
		>
			<div class="content content-left">
				{#if placeholders}
					<span class="placeholder">{capitalize(prevPlaceholderTxt)}</span>
				{/if}
				{#if labels}
					<p class="message" data-testid="previous_message_text">
						«&nbsp;{prev.label}
					</p>
				{/if}
			</div>
		</a>
	{/if}
	{#if spacer}
		<div class="spacer" />
	{/if}
	{#if next}
		<a
			href={next.href}
			alt="link to {nextAltText}"
			title="link to {nextAltText}"
			aria-label="link to {nextAltText}"
			class="link"
			data-testid="link_to_next"
		>
			<div class="content content-right">
				{#if placeholders}
					<span class="placeholder">{capitalize(nextPlaceholderTxt)}</span>
				{/if}
				{#if labels}
					<p class="message" data-testid="next_message_text">
						{next.label}&nbsp;»
					</p>
				{/if}
			</div>
		</a>
	{/if}
</div>
