<script lang="ts">
	export let author: string;
	export let date: string;
	export let showAvatar = true;

	function getInitials(txt: string): string {
		let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
		let matcher = [...txt.matchAll(rgx)] || [];
		return ((matcher.shift()?.[1] || '') + (matcher.pop()?.[1] || '')).toUpperCase();
	}
</script>

<div class="card__info">
	{#if showAvatar}
		<div class="circle"><span class="initials">{getInitials(author)}</span></div>
	{/if}
	<div>
		<p class="author">{author}</p>
		<span class="date">{date}</span>
	</div>
</div>
