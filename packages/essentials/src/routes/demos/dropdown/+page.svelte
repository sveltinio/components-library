<script lang="ts">
	import { navItems } from '../../../../src/data/sample.js';
	import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from '$lib/index.js';

	const myStyles = {
		'btn-color': '#ecfeff',
		'btn-bg-color': '#0891b2',
		'btn-bg-color-hover': '#0e7490',
		'btn-border-color': '#67e8f9',
		'content-bg-color': '#ecfeff',
		'item-color': '#164e63',
		'item-bg-color-hover': '#cffafe'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>
	<h2><tt>Dropdown</tt></h2>
</section>

<section>
	<div class="demo-container">
		<h3>Dropdown items as links</h3>
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
</section>

<section>
	<div class="demo-container">
		<h3>Dropdown Menu absolute</h3>
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
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with props</h3>
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
</section>

<section>
	<div class="demo-container">
		<h3>Custom Styles with CSS class</h3>
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
</section>
