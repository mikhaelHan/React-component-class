import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintReactCompiler from 'eslint-plugin-react-compiler';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import parser from '@typescript-eslint/parser';
import eslintImport from 'eslint-plugin-import';

/**@type {import ('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      'react-compiler': eslintReactCompiler,
      import: eslintImport,
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
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'no-console': 'warn',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
        { usePrettierrc: true },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: true,
          peerDependencies: true,
          bundledDependencies: true,
        },
      ],
      'react-compiler/react-compiler': 'error',
      'linebreak-style': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/prefer-stateless-function': 'off',
      'react/jsx-key': 'off',
    },
  },
];
