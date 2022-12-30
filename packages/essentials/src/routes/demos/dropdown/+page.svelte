<script lang="ts">
	import { navItems } from '../../../../src/data/sample.js';
	import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from '$lib/index.js';
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
