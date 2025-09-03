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
    eslintConfigPrettier
)
