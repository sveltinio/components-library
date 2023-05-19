<script lang="ts">
	import { navItems } from '../../../../src/data/sample.js';
	import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from '$lib/index.js';

	/*
	const myStyles = {
		'btn-color': '#ecfeff',
		'btn-bg-color': '#0891b2',
		'btn-bg-color-hover': '#0e7490',
		'btn-border-color': '#67e8f9',
		'content-bg-color': '#ecfeff',
		'item-color': '#164e63',
		'item-bg-color-hover': '#cffafe'
	};
	*/
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Dropdown</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div class="demo-wrapper">
		<h3>Dropdown items as links</h3>
		<div class="preview">
			<Dropdown>
				<DropdownButton label="Posts" />
				<DropdownContent>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<DropdownItem label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</DropdownContent>
			</Dropdown>
		</div>
	</div>

	<!-- To avoid a11y errors due to duplicated ids. Uncomment to see other examples.

	<div class="demo-wrapper">
		<h3>Dropdown Menu absolute</h3>
		<div class="preview">
			<Dropdown>
				<DropdownButton label="Posts" />
				<DropdownContent absolute>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<DropdownItem label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</DropdownContent>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with props</h3>
		<div class="preview">
			<Dropdown styles={myStyles}>
				<DropdownButton label="Posts" />
				<DropdownContent absolute>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<DropdownItem label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</DropdownContent>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with CSS class</h3>
		<div class="preview">
			<Dropdown class="my-dropdown">
				<DropdownButton label="Posts" />
				<DropdownContent absolute>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<DropdownItem label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</DropdownContent>
			</Dropdown>
		</div>
	</div>
	-->
</section>
