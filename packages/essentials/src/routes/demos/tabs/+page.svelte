<script lang="ts">
	import { Tabs, Tab } from '$lib/index.js';
	/*import DummyIcon from '../_dummyIcon.svelte';

	const customStyles = {
		'tab-bg-color-hover': '#C7D8E6',
		'tab-active-border-b-color': '#0084f6'
	};*/
</script>

<div class="header" role="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Tabs</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div class="demo-wrapper">
		<h3>Default</h3>
		<Tabs>
			<Tab id="1" label="Tab 1"
				><h3>1 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="2" label="Tab 2"
				><h3>2 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
			<Tab id="3" label="Tab 3"
				><h3>3 - Heading</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p></Tab
			>
		</Tabs>
	</div>

	<!-- To avoid a11y errors due to duplicated ids. Uncomment to see other examples.
	<div class="demo-wrapper">
		<h3>Bordered Variant</h3>
		<div class="preview">
			<Tabs activeTab="3" bordered>
				<Tab id="1" label="Tab 1"
					><h3>1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="2" label="Tab 2"
					><h3>2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="3" label="Tab 3"
					><h3>3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Custom Styles with prop</h3>
		<div class="preview">
			<Tabs activeTab="1" styles={customStyles}>
				<Tab id="1" label="Tab 1"
					><h3 style="font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="2" label="Tab 2"
					><h3 style="font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="3" label="Tab 3"
					><h3 style="font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Dark - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="1" class="my-tabs">
				<Tab id="1" label="Tab 1" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="2" label="Tab 2" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="3" label="Tab 3" icon={DummyIcon}
					><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Rounded Tabs - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="1" class="rounded-tabs">
				<Tab id="1" label="Tab 1"
					><h3 style="color: #0084f6; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="2" label="Tab 2"
					><h3 style="color: #0084f6; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="3" label="Tab 3"
					><h3 style="color: #0084f6; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
			</Tabs>
		</div>
	</div>

	<div class="demo-wrapper">
		<h3>Pills TabsGroup - Custom Styles with CSS Class</h3>
		<div class="preview">
			<Tabs activeTab="2" class="pills-tabgroup" justify="center">
				<Tab id="1" label="Tab 1"
					><h3 style="color: #57534e; font-weight: bold;">1 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="2" label="Tab 2"
					><h3 style="color: #57534e; font-weight: bold;">2 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
				<Tab id="3" label="Tab 3"
					><h3 style="color: #57534e; font-weight: bold;">3 - Heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p></Tab
				>
			</Tabs>
		</div>
	</div> -->
</section>
