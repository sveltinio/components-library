<script lang="ts">
	import { navItems } from '../../../../src/data/sample.js';
	import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '$lib/index.js';

	const handleDropdownButton = (event: { detail: string }) => {
		alert('dropdown clicked on:' + event.detail);
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Dropdown</tt></h2>

	<section id="dropdown-menu" class="container">
		<h3>Dropdown items as links</h3>
		<Dropdown>
			<DropdownButton label="Posts" />
			<DropdownMenu>
				{#each navItems as item}
					{#if item.children}
						{#each item.children as child}
							<DropdownItem id={child.weight} label={child.name} href={child.url} />
						{/each}
					{/if}
				{/each}
			</DropdownMenu>
		</Dropdown>
	</section>

	<section id="dropdown-button" class="container">
		<h3>Dropdown items as button</h3>
		<Dropdown>
			<DropdownButton label="Posts" />
			<DropdownMenu>
				{#each navItems as item}
					{#if item.children}
						{#each item.children as child}
							<DropdownItem
								id={child.weight}
								label={child.name}
								on:click={handleDropdownButton}
							/>
						{/each}
					{/if}
				{/each}
			</DropdownMenu>
		</Dropdown>
	</section>
</section>
