// eslint.config.js
import js from '@eslint/js'
import next from 'eslint-config-next'

export default [
  js.configs.recommended,
  ...next(),
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
    }
  }
]
