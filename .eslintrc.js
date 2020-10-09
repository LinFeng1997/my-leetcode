module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  'extends': ['eslint:recommended'],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 1,
    'block-spacing': [
      'error',
      'always'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': ['error', { 'before': true }],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'no-useless-escape': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off'
  },
  'parser': 'babel-eslint',
};