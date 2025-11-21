import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import vitest from 'eslint-plugin-vitest';

export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      'scripts/**',
      '**/*/.d.ts',
      '**/*.{json,json5,css,scss,md}',
      '.dumirc.{js,jsx,ts,tsx}',
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat['jsx-runtime'],
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    ...vitest.configs.recommended,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
];
