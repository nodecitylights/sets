module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2017,
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint/eslint-plugin',
	],
	'ignorePatterns': [
		'tests/**/*.ts',
		'dist/**/*.ts',
	],
	'rules': {
		'semi': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/semi': ['error'],
		'no-unused-vars': 'off',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
	}
};
