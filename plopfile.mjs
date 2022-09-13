export default function (plop) {
	plop.setGenerator('component', {
		description: 'Create a new component',
		prompts: [
			{
				// Select the package for your Component
				type: 'list',
				name: 'packageName',
				message: 'What is the package name of your component?',
				choices: ['essentials', 'media-content', 'seo', 'services', 'widgets']
			},
			{
				// Name your Component
				type: 'input',
				name: 'name',
				message: 'What is the name of your component?'
			}
		],
		actions: [
			{
				// Create the component files
				type: 'addMany',
				destination: './packages/{{packageName}}/src/lib/components/{{lowerCase name}}',
				base: `.templates/component/definition`,
				templateFiles: `.templates/component/definition/*.hbs`
			},
			{
				// Export component in lib/index.ts
				type: 'append',
				path: './packages/{{packageName}}/src/lib/index.ts',
				templateFile: '.templates/component/lib-index.ts.hbs'
			},
			{
				// Create a test suite for the component
				type: 'add',
				path: './packages/{{packageName}}/tests/{{properCase name}}.spec.ts',
				templateFile: '.templates/component/tests/test.spec.ts.hbs'
			},
			{
				// Create a demo page route for the component
				type: 'add',
				path: './packages/{{packageName}}/src/routes/demos/{{lowerCase name}}/+page.svelte',
				templateFile: '.templates/component/demo/page.svelte.hbs'
			}
		]
	});
}
