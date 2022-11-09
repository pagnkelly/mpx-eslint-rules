// module.exports = {
//   extends: ['@mpxjs'],
//   rules: {
//     eqeqeq: 2
//   }
// }
const eslintConf = {
  extends: ['eslint:recommended', 'plugin:mpx/mpx-essential'],
  env: {
    node: true,
    jest: true
  },
  globals: {
    wx: 'readonly',
    my: 'readonly',
    getCurrentPages: 'readonly',
    getApp: 'readonly',
    App: 'readonly',
    __mpx_mode__: 'readonly',
    __mpx_env__: 'readonly',
    __env__: 'readonly',
    __VERSION__: 'readonly',
    requirePlugin: 'readonly'
  },
  rules: {
    // camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }],
    camelcase: 0,
    'mpx/no-reserved-keys': 0,
    'no-undef': 2,
    'mpx/script-setup-uses-vars': 0,
    'mpx/script-indent': ["error", 'tab', {
      "baseIndent": 1,
      "switchCase": 0,
      "ignores": []
    }]
  },
}

module.exports = eslintConf
