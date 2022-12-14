<script lang="ts">
	import './styles.css';
	import type { PagesNavigatorItem } from '../../types.js';
	import { stylesObjToCSSVars, capitalize } from '../../utils.js';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let placeholders = true;
	export let labels = true;
	export let spacer = false;

	let themeClassName = '';
	export { themeClassName as theme };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	// ensure to show the labels at least
	if (!placeholders && !labels) {
		placeholders = false;
		labels = true;
	}

	let prevPlaceholderTxt = prev.placeholder ?? 'prev';
	let nextPlaceholderTxt = next.placeholder ?? 'next';

	let prevAltText = prev.alt ?? prev.label;
	let nextAltText = next.alt ?? next.label;

	// true is both the label the href props are valid
	const isValid = (obj: PagesNavigatorItem): boolean => {
		return obj.label != undefined && !obj.href.includes('undefined');
	};
</script>

<div
	class="sw__pagesnav sw__pagesnav__main {themeClassName}"
	class:sw__pagesnav__spacer-bottom={!prev.href || !next.href}
	style={cssStyles}
	data-testid="pagesnav_main"
>
	{#if isValid(prev)}
		<a
			href={prev.href}
			alt="link to {prevAltText}"
			title="link to {prevAltText}"
			aria-label="link to {prevAltText}"
			class="link"
			class:prev__only={!isValid(next)}
			class:prev__only-with-spacer={spacer && !isValid(next)}
			data-testid="link_to_previous"
		>
			<div class="content">
				<slot name="previous-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						height="20px"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						class="icon"
						color="currentColor"
						><path
							d="M18.5 12H6m0 0l6-6m-6 6l6 6"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
				</slot>
				<div class="previous-text">
					{#if placeholders}
						<span class="placeholder">{capitalize(prevPlaceholderTxt)}</span>
					{/if}
					{#if labels}
						<p class="message" data-testid="previous_message_text">
							{prev.label}
						</p>
					{/if}
				</div>
			</div>
		</a>
	{/if}
	{#if spacer}
		<div
			class="spacer"
			class:spacer__with-prev={spacer && !isValid(next)}
			class:spacer__with-next={spacer && !isValid(prev)}
		/>
	{/if}
	{#if isValid(next)}
		<a
			href={next.href}
			alt="link to {nextAltText}"
			title="link to {nextAltText}"
			aria-label="link to {nextAltText}"
			class="link"
			class:next__only={!isValid(prev)}
			class:next__only-with-spacer={spacer && !isValid(prev)}
			data-testid="link_to_next"
		>
			<div class="content">
				<div class="next-text">
					{#if placeholders}
						<span class="placeholder">{capitalize(nextPlaceholderTxt)}</span>
					{/if}
					{#if labels}
						<p class="message" data-testid="next_message_text">
							{next.label}
						</p>
					{/if}
				</div>
				<slot name="next-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						height="20px"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						class="icon"
						color="currentColor"
						><path
							d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
				</slot>
			</div>
		</a>
	{/if}
</div>
