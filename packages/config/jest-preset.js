module.exports = {
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['<rootDir>/src/lib/components/**'],
	testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'ts-jest'
	},
	setupFilesAfterEnv: ['../config/jest-setup.ts', '../config/window.setup.js'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': [
			'<rootDir>/.svelte-kit/runtime/app$1',
			'<rootDir>/.svelte-kit/dev/runtime/app$1',
			'<rootDir>/.svelte-kit/build/runtime/app$1'
		]
	}
};
