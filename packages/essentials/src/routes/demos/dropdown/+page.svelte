<script lang="ts">
	import { navItems } from '../../../../src/data/sample.js';
	import { Dropdown } from '$lib/index.js';

	const myDropdownButtonStyles = {
		color: 'var(--lime-1)',
		'bg-color': 'var(--lime-9)',
		'bg-color-hover': 'var(--lime-7)',
		'border-color': 'var(--lime-8)',
		'ring-color': 'var(--lime-3)'
	};

	const myDropdownStyles = {
		'list-bg-color': '#ecfeff',
		'item-color': '#164e63',
		'item-bg-color-hover': '#cffafe'
	};
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
				<Dropdown.Button label="Posts" />
				<Dropdown.Items>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dropdown items as buttons</h3>
		<div class="preview">
			<Dropdown>
				<Dropdown.Button label="Posts" />
				<Dropdown.Items>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Open by default</h3>
		<div class="preview">
			<Dropdown open>
				<Dropdown.Button label="Posts" />
				<Dropdown.Items>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dropdown Menu absolute</h3>
		<div class="preview">
			<Dropdown>
				<Dropdown.Button label="Posts" />
				<Dropdown.Items absolute>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with props</h3>
		<div class="preview">
			<Dropdown styles={myDropdownStyles}>
				<Dropdown.Button label="Posts" styles={myDropdownButtonStyles} />
				<Dropdown.Items>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with CSS class</h3>
		<div class="preview">
			<Dropdown class="my-dropdown">
				<Dropdown.Button label="Posts" class="my-dropdown-button" />
				<Dropdown.Items>
					{#each navItems as item}
						{#if item.children}
							{#each item.children as child}
								<Dropdown.Items.Item label={child.name} href={child.url} />
							{/each}
						{/if}
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>
</section>
