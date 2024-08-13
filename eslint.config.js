import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintReactCompiler from 'eslint-plugin-react-compiler';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import parser from '@typescript-eslint/parser';

/**@type {import ('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      'react-compiler': eslintReactCompiler,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist', '.husky', 'public'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
      parser: parser,
    },
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    settings: { react: { version: 'detect' } },
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'no-console': 'warn',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      'react-compiler/react-compiler': 'error',
      'linebreak-style': 'off',
    },
  },
];
