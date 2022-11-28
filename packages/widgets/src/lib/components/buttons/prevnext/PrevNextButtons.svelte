<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars, capitalize } from '../../../utils.js';

	export let prevLabel = 'previous';
	export let prevValue: string;
	export let prevHref: string;
	export let prevPrefix = '«';
	export let prevAlt = '';
	let prevAltText = prevAlt == '' ? prevValue : prevAlt;

	export let nextLabel = 'next';
	export let nextValue: string;
	export let nextHref: string;
	export let nextPrefix = '»';
	export let nextAlt = '';
	let nextAltText = nextAlt == '' ? nextValue : nextAlt;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<div
	class="prevnext prevnext-container"
	data-testid="prevnext-container"
	class:bottom-spacer={!prevValue || !nextValue}
	style={cssStyles}
>
	<div class="spacer">
		<div class="prevnext-wrapper">
			<div>
				{#if prevValue}
					<a
						href={prevHref}
						alt="link to {prevAltText}"
						title="link to {prevAltText}"
						aria-label="link to {prevAltText}"
						class="link-wrapper"
						data-testid="link-to-previous"
						><div class="link-item">
							<span>{capitalize(prevLabel)}</span>
							<p data-testid="previous-message-text">
								{prevPrefix}
								{prevValue}
							</p>
						</div></a
					>
				{/if}
			</div>
			<div class="divider">
				{#if nextValue}
					<a
						href={nextHref}
						alt="link to {nextAltText}"
						title="link to {nextAltText}"
						aria-label="link to {nextAltText}"
						class="link-wrapper "
						data-testid="link-to-next"
						><div class="link-item">
							<span>{capitalize(nextLabel)}</span>
							<p data-testid="next-message-text">
								{nextValue}
								{nextPrefix}
							</p>
						</div></a
					>
				{/if}
			</div>
		</div>
	</div>
</div>
