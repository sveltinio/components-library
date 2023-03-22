module.exports = {
	extends: ['stylelint-config-standard'],
	ignoreFiles: ['**/app.postcss'],
	rules: {
		'alpha-value-notation': [
			'percentage',
			{
				exceptProperties: [
					'opacity',
					'fill-opacity',
					'flood-opacity',
					'stop-opacity',
					'stroke-opacity'
				]
			}
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment']
			}
		],
		'annotation-no-unknown': true,
		'at-rule-no-vendor-prefix': true,
		'at-rule-no-unknown': true,
		'block-no-empty': null,
		'color-no-invalid-hex': true,
		'color-function-notation': 'modern',
		'color-hex-length': 'short',
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['stylelint-commands']
			}
		],
		'custom-media-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {}],
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['after-custom-property', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block']
			}
		],
		'custom-property-pattern': ['^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {}],
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'custom-property-no-missing-var-function': true,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values']
			}
		],
		'declaration-block-no-redundant-longhand-properties': null,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-property-value-no-unknown': true,
		'font-family-name-quotes': 'always-where-recommended',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-no-unknown': true,
		'function-url-quotes': 'always',
		'hue-degree-notation': 'angle',
		'import-notation': 'url',
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'keyframes-name-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {}],
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
		'length-zero-no-unit': true,
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'named-grid-areas-no-invalid': true,
		'no-descending-specificity': null,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'number-max-precision': 4,
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment']
			}
		],
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)(__[a-z0-9]+)?(__)?([a-z0-9]+)?(-+[a-z0-9]+)*$',
			{}
		],
		'selector-id-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', {}],
		'selector-no-vendor-prefix': true,
		'selector-not-notation': 'complex',
		'shorthand-property-no-redundant-values': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements']
			}
		],
		'string-no-newline': true,
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': [
			true,
			{
				ignoreValues: ['box']
			}
		]
	}
};
