// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig(
    {
        ignores: ['node_modules', 'dist', 'public']
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    storybook.configs['flat/recommended'],
)
