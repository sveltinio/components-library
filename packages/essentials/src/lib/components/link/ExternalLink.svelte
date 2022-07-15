<script lang="ts">
	export let id = '';
	export let label: string;
	export let url: string;
	export let altText = '';
	export let target = '_blank';
	export let noOpener = true;
	export let noReferrer = true;

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	$: _idText = id != '' ? id : label;
	$: _altText = altText != '' ? altText : label;
</script>

<a
	id={_idText}
	data-testid="ext-link"
	rel={relOptions.join(' ')}
	{target}
	href={url}
	alt={_altText}
	title={_altText}
	aria-label={_altText}
	class={$$props.class}
	style={$$props.style}
>
	<slot>{label}</slot>
</a>
