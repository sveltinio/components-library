<script lang="ts">
	import { navItems, dropdownContentSample } from '../../../../src/data/sample.js';
	import { Dropdown } from '$lib/index.js';

	const myDropdownButtonStyles = {
		color: 'var(--lime-1)',
		'font-family': 'var(--font-mono)',
		'bg-color': 'var(--lime-9)',
		'bg-color-hover': 'var(--lime-7)',
		'border-color': 'var(--lime-8)',
		'ring-color': 'var(--lime-3)'
	};

	const myDropdownStyles = {
		'item-font-family': 'var(--font-mono)',
		'item-font-size': 'var(--font-size-0)',
		'item-color': 'var(--lime-11)',
		'item-color-hover': 'var(--lime-12)',
		'item-bg-color': 'var(--lime-0)',
		'item-bg-color-hover': 'var(--lime-1)'
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
				<Dropdown.Button label="Open / Close" />
				<Dropdown.Items>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} href={item.url} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dropdown items as buttons</h3>
		<div class="preview">
			<Dropdown>
				<Dropdown.Button label="Open / Close" />
				<Dropdown.Items>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Open by default</h3>
		<div class="preview">
			<Dropdown open>
				<Dropdown.Button label="Open / Close" />
				<Dropdown.Items>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dropdown Menu absolute</h3>
		<div class="preview">
			<Dropdown>
				<Dropdown.Button label="Open / Close" />
				<Dropdown.Items absolute>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} href={item.url} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with props</h3>
		<div class="preview">
			<Dropdown styles={myDropdownStyles}>
				<Dropdown.Button label="Open / Close" styles={myDropdownButtonStyles} />
				<Dropdown.Items>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} href={item.url} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with CSS class</h3>
		<div class="preview">
			<Dropdown class="my-dropdown">
				<Dropdown.Button label="Open / Close" class="my-dropdown-button" />
				<Dropdown.Items>
					{#each dropdownContentSample as item}
						<Dropdown.Items.Item label={item.name} href={item.url} />
					{/each}
				</Dropdown.Items>
			</Dropdown>
		</div>
	</div>
</section>
