<script lang="ts">
	import { navItems } from '$lib/__tests__/__fixtures__/data.test.js';
	import { MailIcon, PlusIcon } from '@indaco/svelte-iconoir';
	import {
		Button,
		Dropdown,
		DropdownButton,
		DropdownItem,
		DropdownMenu,
		ExternalLink,
		Picture
	} from '../lib';

	const handleDropdownButton = (event: { detail: string }) => {
		alert('dropdown clicked on:' + event.detail);
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/essentials</tt></h1>

	<h2><tt>Demos</tt></h2>

	<section id="buttons" class="container">
		<h3>Button</h3>

		<div class="buttons-container">
			<h4 id="buttons-default">Basics</h4>
			<div class="buttons-row">
				<Button />
				<Button type="primary" />
				<Button type="secondary" />
				<Button type="error" />
				<Button type="warning" />
			</div>
			<div class="buttons-row">
				<Button type="success" />
				<Button type="info" />
				<Button type="light" />
				<Button type="dark" />
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">With Focus Ring</h4>
			<div class="buttons-row">
				<Button withFocusRing />
				<Button type="primary" withFocusRing />
				<Button type="secondary" withFocusRing />
				<Button type="error" withFocusRing />
				<Button type="warning" withFocusRing />
			</div>
			<div class="buttons-row">
				<Button type="success" withFocusRing />
				<Button type="info" withFocusRing />
				<Button type="light" withFocusRing />
				<Button type="dark" withFocusRing />
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">
				Sizes (can be <i>xs</i>, <i>sm</i>, <i>base</i>, <i>md</i> or <i>lg</i>. Default:
				<i>base</i>)
			</h4>
			<div class="buttons-row">
				<Button size="lg" />
				<Button type="primary" size="lg" />
				<Button type="secondary" size="lg" />
				<Button type="error" size="lg" />
				<Button type="warning" size="lg" />
			</div>
			<div class="buttons-row">
				<Button type="success" size="lg" />
				<Button type="info" size="lg" />
				<Button type="light" size="lg" />
				<Button type="dark" size="lg" />
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">Rounded</h4>
			<div class="buttons-row">
				<Button rounded />
				<Button type="primary" rounded />
				<Button type="secondary" rounded />
				<Button type="error" rounded />
				<Button type="warning" rounded />
			</div>
			<div class="buttons-row">
				<Button type="success" rounded />
				<Button type="info" rounded />
				<Button type="light" rounded />
				<Button type="dark" rounded />
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">Outlined</h4>
			<div class="buttons-row">
				<Button outlined rounded />
				<Button type="primary" outlined rounded />
				<Button type="secondary" outlined rounded />
				<Button type="error" outlined rounded />
				<Button type="warning" outlined rounded />
			</div>
			<div class="buttons-row">
				<Button type="success" outlined rounded />
				<Button type="info" outlined rounded />
				<Button type="light" outlined rounded />
				<Button type="dark" outlined rounded />
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">With Icon</h4>

			<div class="buttons-row">
				<Button type="success">
					<MailIcon slot="leftIcon" /> Button Text
				</Button>
				<Button type="info">
					<MailIcon slot="leftIcon" /> Button Text
				</Button>
				<Button type="light">
					Button Text <MailIcon slot="rightIcon" />
				</Button>

				<Button type="dark">
					Button Text <MailIcon slot="rightIcon" />
				</Button>
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-default">Circular</h4>
			<div class="buttons-row">
				<Button circular>
					<PlusIcon />
				</Button>
				<Button type="primary" size="lg" circular><PlusIcon /></Button>
				<Button type="secondary" size="xs" circular><PlusIcon /></Button>
				<Button type="error" circular><PlusIcon /></Button>
				<Button type="warning" circular><PlusIcon /></Button>
			</div>
			<div class="buttons-row">
				<Button type="success" circular><PlusIcon /></Button>
				<Button type="info" circular><PlusIcon /></Button>
				<Button type="light" circular><PlusIcon /></Button>
				<Button type="dark" circular><PlusIcon /></Button>
			</div>
		</div>

		<div class="buttons-container">
			<h4 id="buttons-custom-colors">Custom Colors</h4>
			<div class="buttons-row">
				<Button
					label="Custom Success"
					type="success"
					rounded
					withFocusRing
					--color="rgb(54 83 20)"
					--border-color="rgb(236 252 203)"
					--bg-color="rgb(132 204 22)"
					--bg-color-hover="rgb(163 230 53)"
					--ring-color="rgb(190 242 100)"
					--ring-width="3px"
					--ring-style="dashed"
				/>

				<Button
					label="Custom Success"
					type="success"
					outlined
					rounded
					--color="rgb(77 124 15)"
					--border-color="rgb(217 249 157)"
					--bg-color-hover="rgb(101 163 13)"
					--outlined-bg-hover="rgb(236 252 203)"
				/>
			</div>
		</div>
	</section>

	<section id="external-link" class="container">
		<h3>ExternalLink</h3>

		<h4 id="external-link-with-slot">with slot</h4>
		<ExternalLink id="sveltin-link" label="sveltin" url="https://sveltin.io"
			><Picture
				src="logo.png"
				altText="sveltin logo"
				webp={true}
				avif={true}
				width="30%"
			/></ExternalLink
		>

		<h4 id="external-link-with-slot-fallback">with slot fallback</h4>
		<ExternalLink id="sveltin-link" label="sveltin.io" url="https://sveltin.io" />
	</section>

	<section id="dropdown-menu" class="container">
		<h3>Dropdown</h3>

		<h4>Dropdown items as links</h4>
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

		<h4>Dropdown items as button</h4>
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

	<section id="Picture" class="container">
		<h3>Picture</h3>

		<h4 id="picture">As It Is</h4>
		<Picture src="logo.png" altText="sveltin logo" width="30%" />

		<h4 id="picture-avif">Avif srcset</h4>
		<Picture src="logo.png" altText="sveltin logo" avif width="30%" />

		<h4 id="picture-webp">WebP srcset</h4>
		<Picture src="logo.png" altText="sveltin logo" webp width="30%" />
	</section>
</section>
