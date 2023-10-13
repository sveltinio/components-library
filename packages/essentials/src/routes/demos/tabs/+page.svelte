<script lang="ts">
	import { Tabs } from '$lib/index.js';
	import DummyIcon from '../_dummyIcon.svelte';

	const customStyles = {
		'tab-bg-color-hover': '#C7D8E6',
		'tab-active-border-b-color': '#0084f6'
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Tabs</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="tabs-variants-wrapper" class="demo-wrapper">
		<h3 id="tabs-variants">Variants</h3>
		<h4>Default</h4>
		<div class="preview">
			<Tabs>
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>

		<h4>Bordered</h4>
		<div class="preview">
			<Tabs activeTab="3" variant="border">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div id="tabs-sizes-wrapper" class="demo-wrapper">
		<h3 id="tabs-sizes">Sizes</h3>
		<h4>sm</h4>
		<div class="preview">
			<Tabs size="sm">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>

		<h4>Default (base)</h4>
		<div class="preview">
			<Tabs activeTab="1" size="base">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>

		<h4>lg</h4>
		<div class="preview">
			<Tabs activeTab="1" size="lg">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div id="tabs-justify-wrapper" class="demo-wrapper">
		<h3 id="tabs-justify">Justify</h3>
		<h4>Default</h4>
		<div class="preview">
			<Tabs justify="start">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>

		<h4>Center</h4>
		<div class="preview">
			<Tabs activeTab="3" justify="center">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>

		<h4>End</h4>
		<div class="preview">
			<Tabs activeTab="3" justify="end">
				<Tabs.Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with prop</h3>
		<div class="preview">
			<Tabs activeTab="1" styles={customStyles}>
				<Tabs.Tab id="1" label="Tab 1"
					><h3 style="font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3 style="font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3 style="font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dark - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="1" class="my-tabs">
				<Tabs.Tab id="1" label="Tab 1" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Rounded Tabs - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="1" class="rounded-tabs">
				<Tabs.Tab id="1" label="Tab 1"
					><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Pills TabsGroup - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="2" class="pills-tabgroup" justify="center">
				<Tabs.Tab id="1" label="Tab 1"
					><h3 style="color: #57534e; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="2" label="Tab 2"
					><h3 style="color: #57534e; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
				<Tabs.Tab id="3" label="Tab 3"
					><h3 style="color: #57534e; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tabs.Tab
				>
			</Tabs>
		</div>
	</div>
</section>
