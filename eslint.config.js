import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tsEslint.config(
	stylistic.configs.customize({
		indent: 'tab',
		quote: 'single',
		semi: false,
		jsx: true,
	}),
	eslint.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.eslint.json',
				tsconfigRootDir: import.meta.dirname,
			},
		}
	},
)
