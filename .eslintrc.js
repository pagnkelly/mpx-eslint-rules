const { userConf } = require('./config/index')

const eslintConf = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:mpx/mpx-essential', 'eslint:recommended'],
  globals: {
    wx: 'readonly',
    getApp: 'readonly',
    App: 'readonly',
    __mpx_mode__: 'readonly',
    __mpx_env__: 'readonly',
    requirePlugin: 'readonly'
  },
  rules: {
    camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }]
  }
}
if (userConf.tsSupport) {
  eslintConf.overrides = [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'standard',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['*.mpx'],
      parser: 'mpx-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-undef': 'off',
      }
    }
  ]
}

module.exports = eslintConf
