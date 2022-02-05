<script lang="ts">
	export let username: string;
	export let repo: string;
	export let action: string;
	$: text = toTitle(action);
	function toTitle(text: string): string {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
</script>

<a
	class="github-button"
	href="https://github.com/{username}/{repo}/{action}"
	target="_blank"
	title="{text} {username}/{repo} on GitHub"
	aria-label="{text} {username}/{repo} on GitHub"
	data-testid="githubLink"
>
	{#if action == 'star'}
		<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-testid="starIcon">
			<path
				fill-rule="evenodd"
				d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
			/>
		</svg>
	{:else if action == 'follow' || action == 'fork'}
		<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-testid="followIcon">
			<path
				fill-rule="evenodd"
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
			/>
		</svg>
	{:else if action == 'issue'}
		<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-testid="issueIcon">
			<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
			<path
				fill-rule="evenodd"
				d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
			/>
		</svg>
	{:else if action == 'watch'}
		<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-testid="watchIcon">
			<path
				fill-rule="evenodd"
				d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
			/>
		</svg>
	{/if}
	{text}
	{#if action == 'follow'} @{username} {/if}
</a>

<style>
	a {
		text-decoration: none;
	}
	.github-button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		vertical-align: middle;
		align-items: center;
		gap: 4px;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
		color: #000000;
		font-weight: 600;
		font-size: smaller;
		padding: 0 8px;
		border: 1px solid #d5d5d5;
		border-radius: 3px;
		background: #fff;
		background-color: #eee;
		background: -webkit-linear-gradient(#fcfcfc, #eee);
		background: -moz-linear-gradient(#fcfcfc, #eee);
		background: -ms-linear-gradient(#fcfcfc, #eee);
		background: -o-linear-gradient(#fcfcfc, #eee);
		background: linear-gradient(#fcfcfc, #eee);
	}
</style>
