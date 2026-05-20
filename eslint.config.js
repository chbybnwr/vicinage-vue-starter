import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import vicinage from '@vicinage/eslint-plugin'
import stylex from '@stylexjs/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      //
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ['**/*.tsx'],
    extends: [
      vicinage.configs.recommended,
      //
    ],
    rules: {
      'vicinage/valid-styles': 'off',
    },
  },

  {
    plugins: {
      '@stylexjs': stylex,
    },
    rules: {
      '@stylexjs/no-conflicting-props': 'error',
      '@stylexjs/no-nonstandard-styles': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/valid-shorthands': 'warn',
      '@stylexjs/sort-keys': 'warn',
      '@stylexjs/no-lookahead-selectors': 'warn',
    },
  },
])
